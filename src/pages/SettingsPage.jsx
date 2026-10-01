import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function SettingsPage() {
  const { user } = useAuth();

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1>Settings</h1>
      </div>
      <div className="glass-panel" style={{ padding: '2rem', maxWidth: '600px' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>Profile Information</h3>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', color: '#737887', fontSize: '0.9rem', marginBottom: '0.3rem' }}>Name</label>
          <div style={{ padding: '10px 14px', backgroundColor: 'rgba(0,0,0,0.03)', borderRadius: '8px' }}>{user?.name}</div>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', color: '#737887', fontSize: '0.9rem', marginBottom: '0.3rem' }}>Email</label>
          <div style={{ padding: '10px 14px', backgroundColor: 'rgba(0,0,0,0.03)', borderRadius: '8px' }}>{user?.email}</div>
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', color: '#737887', fontSize: '0.9rem', marginBottom: '0.3rem' }}>Currency</label>
          <div style={{ padding: '10px 14px', backgroundColor: 'rgba(0,0,0,0.03)', borderRadius: '8px' }}>{user?.currency}</div>
        </div>
        
        <button className="btn-primary" style={{ width: 'auto' }}>Edit Profile (Coming Soon)</button>
      </div>
    </div>
  );
}
