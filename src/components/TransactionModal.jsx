import React, { useState, useEffect } from 'react';
import { transactionService } from '../services/transactionService';

const TransactionModal = ({ isOpen, onClose, transaction, onRefresh }) => {
  const [formData, setFormData] = useState({ type: 'Expense', amount: '', category_id: '', transaction_date: new Date().toISOString().split('T')[0], payment_method: 'Cash', note: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (transaction) setFormData(transaction);
    else setFormData({ type: 'Expense', amount: '', category_id: '', transaction_date: new Date().toISOString().split('T')[0], payment_method: 'Cash', note: '' });
  }, [transaction]);

  const validate = () => {
    const newErrors = {};
    if (formData.amount <= 0) newErrors.amount = 'Amount must be > 0';
    if (!formData.category_id) newErrors.category_id = 'Category required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (transaction) await transactionService.updateTransaction(transaction.id, formData);
    else await transactionService.createTransaction(formData);
    onRefresh();
    onClose();
  };

  if (!isOpen) return null;
  return (
    <div className="modal glass-panel">
      <form onSubmit={handleSubmit}>
        <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
          <option>Income</option><option>Expense</option>
        </select>
        <input type="number" value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})} />
        {errors.amount && <span>{errors.amount}</span>}
        <input type="date" value={formData.transaction_date} onChange={e => setFormData({...formData, transaction_date: e.target.value})} />
        <button type="submit" className="btn-primary">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};
export default TransactionModal;