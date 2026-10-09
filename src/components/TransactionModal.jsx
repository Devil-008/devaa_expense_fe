import React, { useState, useEffect } from 'react';

const TransactionModal = ({ isOpen, onClose, onSave, transaction, categories }) => {
  const [formData, setFormData] = useState({ type: 'Expense', amount: '', category: '', date: new Date().toISOString().split('T')[0], method: 'Cash', note: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => { if (transaction) setFormData(transaction); }, [transaction]);

  const validate = (data) => {
    const newErrors = {};
    if (data.amount <= 0) newErrors.amount = 'Amount must be greater than 0';
    if (!data.category) newErrors.category = 'Category is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(formData)) { onSave(formData); onClose(); }
  };

  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <form onSubmit={handleSubmit} className="glass-panel">
        <input type="number" value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})} />
        {errors.amount && <span className="error">{errors.amount}</span>}
        <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
          <option value="">Select Category</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        {errors.category && <span className="error">{errors.category}</span>}
        <button type="submit" disabled={Object.keys(errors).length > 0} className="btn-primary">Save</button>
        <button onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};
export default TransactionModal;