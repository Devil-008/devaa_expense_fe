import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { LogOut, Plus } from 'lucide-react';

export default function AppHeader() {
  const { user, logout } = useAuth();

  return (
    <header className="glass-panel" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '1rem 2rem',
      borderRadius: 0,
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <div style={{ fontWeight: 700, fontSize: '1.25rem', color: '#202431' }}>
        <span style={{ color: '#FF5A14' }}>Expense</span>Tracker
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', width: 'auto' }}>
          <Plus size={18} /> New Transaction
        </button>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.9rem', color: '#737887' }}>{user?.name}</span>
          <button 
            onClick={logout} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#737887', display: 'flex', alignItems: 'center' }}
            title="Logout"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
