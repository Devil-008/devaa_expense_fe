import React, { useState, useEffect } from 'react';
import { transactionService } from '../services/transactionService';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const data = await transactionService.getTransactions();
      setTransactions(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Transactions</h1>
        <button className="btn-primary" style={{ width: 'auto' }}>Add Transaction</button>
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem' }}>
        {loading ? (
          <p>Loading transactions...</p>
        ) : transactions.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 0', color: '#737887' }}>
            <p>No transactions found.</p>
            <p>Add your first transaction to start tracking!</p>
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', textAlign: 'left' }}>
                <th style={{ padding: '12px' }}>Date</th>
                <th style={{ padding: '12px' }}>Type</th>
                <th style={{ padding: '12px' }}>Amount</th>
                <th style={{ padding: '12px' }}>Note</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(tx => (
                <tr key={tx.id} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '12px' }}>{tx.transaction_date}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ 
                      color: tx.type === 'income' ? '#16A36A' : '#E5484D',
                      backgroundColor: tx.type === 'income' ? 'rgba(22, 163, 106, 0.1)' : 'rgba(229, 72, 77, 0.1)',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '0.85rem'
                    }}>
                      {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
                    </span>
                  </td>
                  <td style={{ padding: '12px', fontWeight: 600 }}>
                    {tx.type === 'income' ? '+' : '-'}${tx.amount.toFixed(2)}
                  </td>
                  <td style={{ padding: '12px', color: '#737887' }}>{tx.note || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
