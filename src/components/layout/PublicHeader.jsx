import React from 'react';
import { Link } from 'react-router-dom';

export default function PublicHeader() {
  return (
    <header className="glass-panel" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '1rem 5%',
      borderRadius: 0,
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <Link to="/" style={{ textDecoration: 'none', fontWeight: 800, fontSize: '1.5rem', color: '#202431' }}>
        <span style={{ color: '#FF5A14' }}>Expense</span>Tracker
      </Link>
      
      <nav style={{ display: 'none', gap: '2rem' }} className="md-flex">
        <a href="#features" style={{ color: '#737887', textDecoration: 'none', fontWeight: 500 }}>Features</a>
        <a href="#how-it-works" style={{ color: '#737887', textDecoration: 'none', fontWeight: 500 }}>How It Works</a>
      </nav>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link to="/login" style={{ color: '#202431', textDecoration: 'none', fontWeight: 600 }}>Log in</Link>
        <Link to="/register" className="btn-primary" style={{ textDecoration: 'none' }}>Get Started</Link>
      </div>
    </header>
  );
}
