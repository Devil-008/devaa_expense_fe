import React from 'react';

export default function BudgetsPage() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Budgets</h1>
        <button className="btn-primary" style={{ width: 'auto' }}>Create Budget</button>
      </div>
      <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', color: '#737887' }}>
        <p>Budget tracking feature coming soon.</p>
      </div>
    </div>
  );
}
