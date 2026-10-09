import React, { useState, useEffect } from 'react';
import { transactionService } from '../services/transactionService';
import TransactionModal from '../components/TransactionModal';

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [filters, setFilters] = useState({ from: '', to: '', type: 'All', category_id: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTx, setEditingTx] = useState(null);

  const fetchTransactions = async () => {
    const data = await transactionService.getTransactions(filters);
    setTransactions(data);
  };

  useEffect(() => {
    const timer = setTimeout(fetchTransactions, 300);
    return () => clearTimeout(timer);
  }, [filters]);

  const handleDelete = async (id) => {
    if (window.confirm('Delete this transaction?')) {
      await transactionService.deleteTransaction(id);
      fetchTransactions();
    }
  };

  return (
    <div>
      <div className="filter-bar">
        <input type="date" onChange={e => setFilters({...filters, from: e.target.value})} />
        <button className="btn-primary" onClick={() => { setEditingTx(null); setIsModalOpen(true); }}>Add Transaction</button>
      </div>
      <table>
        {transactions.map(tx => (
          <tr key={tx.id}>
            <td>{tx.amount}</td>
            <td><button onClick={() => {setEditingTx(tx); setIsModalOpen(true);}}>Edit</button></td>
            <td><button onClick={() => handleDelete(tx.id)}>Delete</button></td>
          </tr>
        ))}
      </table>
      <TransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} transaction={editingTx} onRefresh={fetchTransactions} />
    </div>
  );
};
export default TransactionsPage;