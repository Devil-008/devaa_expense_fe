import React from 'react';

export default function Footer({ compact }) {
  if (compact) {
    return (
      <footer style={{ padding: '1rem', textAlign: 'center', fontSize: '0.8rem', color: '#737887' }}>
        &copy; {new Date().getFullYear()} ExpenseTracker. All rights reserved.
      </footer>
    );
  }

  return (
    <footer style={{ padding: '3rem 2rem', backgroundColor: '#fff', borderTop: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
      <div style={{ marginBottom: '1rem' }}>
        <a href="#" style={{ color: '#737887', textDecoration: 'none', margin: '0 1rem' }}>Privacy Policy</a>
        <a href="#" style={{ color: '#737887', textDecoration: 'none', margin: '0 1rem' }}>Terms of Service</a>
      </div>
      <p style={{ color: '#737887', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} ExpenseTracker. Building better financial habits.
      </p>
    </footer>
  );
}
