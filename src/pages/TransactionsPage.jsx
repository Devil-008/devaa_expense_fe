import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionModal from '../components/TransactionModal';

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [filters, setFilters] = useState({ from_date: '', to_date: '', type: 'All', category: '' });

  const fetchTransactions = async () => {
    const res = await axios.get('/api/v1/transactions', { params: filters });
    setTransactions(res.data);
  };

  useEffect(() => { const timer = setTimeout(fetchTransactions, 500); return () => clearTimeout(timer); }, [filters]);

  const handleSave = async (data) => {
    await axios.post('/api/v1/transactions', data);
    fetchTransactions();
  };

  return (
    <div className="p-4">
      <div className="filter-bar">
        <input type="date" onChange={(e) => setFilters({...filters, from_date: e.target.value})} />
        <input type="date" onChange={(e) => setFilters({...filters, to_date: e.target.value})} />
        <button className="btn-primary" onClick={() => setModalOpen(true)}>Add Transaction</button>
      </div>
      <TransactionModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onSave={handleSave} categories={['Food', 'Rent']} />
      <table>
        {transactions.map(t => <tr key={t.id}><td>{t.amount}</td></tr>)}
      </table>
    </div>
  );
};
export default TransactionsPage;