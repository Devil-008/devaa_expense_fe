import React, { useState, useEffect } from 'react';
import { transactionService } from '../services/transactionService';
import TransactionModal from '../components/common/TransactionModal';

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [filters, setFilters] = useState({ type: '', category_id: '', from: '', to: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const fetchData = async () => {
    const data = await transactionService.getTransactions(filters);
    setTransactions(data);
  };

  useEffect(() => { fetchData(); }, [filters]);

  const handleDelete = async (id) => {
    if (window.confirm('Delete this transaction?')) {
      await transactionService.deleteTransaction(id);
      fetchData();
    }
  };

  return (
    <div>
      <div className="filters">
        <input type="date" onChange={(e) => setFilters({...filters, from: e.target.value})} />
        <input type="date" onChange={(e) => setFilters({...filters, to: e.target.value})} />
        <button onClick={() => { setEditingTransaction(null); setIsModalOpen(true); }}>Add Transaction</button>
      </div>
      <table>
        <tbody>{transactions.map(t => (
          <tr key={t.id}>
            <td>{t.amount}</td>
            <td>
              <button onClick={() => { setEditingTransaction(t); setIsModalOpen(true); }}>Edit</button>
              <button onClick={() => handleDelete(t.id)}>Delete</button>
            </td>
          </tr>
        ))}</tbody>
      </table>
      <TransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={fetchData} transaction={editingTransaction} />
    </div>
  );
};
export default TransactionsPage;