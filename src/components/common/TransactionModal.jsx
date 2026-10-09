import React, { useState, useEffect } from 'react';
import { transactionService } from '../../services/transactionService';

const TransactionModal = ({ isOpen, onClose, onSave, transaction = null, categories = [] }) => {
  const [formData, setFormData] = useState({ type: 'Expense', amount: 0, category_id: '', transaction_date: new Date().toISOString().split('T')[0], payment_method: 'Cash', note: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (transaction) setFormData(transaction);
  }, [transaction]);

  const validate = () => {
    const newErrors = {};
    if (formData.amount <= 0) newErrors.amount = 'Amount must be greater than 0';
    if (!formData.category_id) newErrors.category_id = 'Category is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      if (transaction) await transactionService.updateTransaction(transaction.id, formData);
      else await transactionService.createTransaction(formData);
      onSave();
      onClose();
    } catch (err) {
      setErrors({ global: 'Failed to save transaction' });
    }
  };

  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <form onSubmit={handleSubmit} className="glass-panel">
        <h2>{transaction ? 'Edit' : 'New'} Transaction</h2>
        <select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <input type="number" step="0.01" value={formData.amount} onChange={(e) => setFormData({...formData, amount: parseFloat(e.target.value)})} />
        {errors.amount && <span>{errors.amount}</span>}
        <select value={formData.category_id} onChange={(e) => setFormData({...formData, category_id: e.target.value})}>
          <option value="">Select Category</option>
          {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        {errors.category_id && <span>{errors.category_id}</span>}
        <input type="date" value={formData.transaction_date} onChange={(e) => setFormData({...formData, transaction_date: e.target.value})} />
        <input maxLength="255" placeholder="Note" value={formData.note} onChange={(e) => setFormData({...formData, note: e.target.value})} />
        <button type="submit" className="btn-primary">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};
export default TransactionModal;