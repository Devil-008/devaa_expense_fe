import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Receipt, PieChart, BarChart3, Tags, Settings } from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    { to: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { to: '/transactions', label: 'Transactions', icon: <Receipt size={20} /> },
    { to: '/budgets', label: 'Budgets', icon: <PieChart size={20} /> },
    { to: '/reports', label: 'Reports', icon: <BarChart3 size={20} /> },
    { to: '/categories', label: 'Categories', icon: <Tags size={20} /> },
    { to: '/settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside className="glass-panel" style={{ width: '250px', borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: 0, padding: '1.5rem 1rem' }}>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 14px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: isActive ? '#FF5A14' : '#737887',
              backgroundColor: isActive ? 'rgba(255, 90, 20, 0.1)' : 'transparent',
              fontWeight: isActive ? 600 : 400,
              transition: 'all 0.2s ease'
            })}
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
