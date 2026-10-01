import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { dashboardService } from '../services/dashboardService';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Wallet } from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuth();
  const [summary, setSummary] = useState({ income: 0, expenses: 0, balance: 0 });
  const [breakdown, setBreakdown] = useState([]);
  const [recentTx, setRecentTx] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const date = new Date();
      const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).toISOString().split('T')[0];
      const today = date.toISOString().split('T')[0];
      
      const params = { from: firstDay, to: today };
      
      const [sumData, breakData, txData] = await Promise.all([
        dashboardService.getSummary(params),
        dashboardService.getCategoryBreakdown(params),
        dashboardService.getRecentTransactions(5)
      ]);
      
      setSummary(sumData);
      setBreakdown(breakData);
      setRecentTx(txData);
    } catch (err) {
      console.error("Failed to load dashboard data", err);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: user?.currency || 'INR'
    }).format(amount);
  };

  if (loading) {
    return <div style={{ padding: '2rem' }}>Loading dashboard...</div>;
  }

  const COLORS = ['#FF5A14', '#16A36A', '#3B82F6', '#8B5CF6', '#F59E0B', '#EC4899'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h1 style={{ marginBottom: '0.5rem' }}>Overview</h1>
        <p style={{ color: '#737887' }}>Here's what's happening with your money this month.</p>
      </div>

      {/* Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#737887', fontWeight: 500 }}>
            <Wallet size={20} color="#3B82F6" /> Net Balance
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 700 }}>{formatCurrency(summary.balance)}</div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#737887', fontWeight: 500 }}>
            <ArrowUpRight size={20} color="#16A36A" /> Income
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 700 }}>{formatCurrency(summary.income)}</div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#737887', fontWeight: 500 }}>
            <ArrowDownRight size={20} color="#E5484D" /> Expenses
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 700 }}>{formatCurrency(summary.expenses)}</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
        {/* Charts */}
        <div className="glass-panel" style={{ padding: '1.5rem', minHeight: '350px', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Expenses by Category</h3>
          <div style={{ flex: 1, position: 'relative' }}>
            {breakdown.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={breakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {breakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color || COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: '#737887' }}>
                No expenses this month.
              </div>
            )}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Recent Transactions</h3>
          {recentTx.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {recentTx.map(tx => (
                <div key={tx.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '8px' }}>
                  <div>
                    <div style={{ fontWeight: 600 }}>{tx.note || (tx.type === 'income' ? 'Income' : 'Expense')}</div>
                    <div style={{ fontSize: '0.8rem', color: '#737887' }}>{tx.transaction_date}</div>
                  </div>
                  <div style={{ fontWeight: 700, color: tx.type === 'income' ? '#16A36A' : '#E5484D' }}>
                    {tx.type === 'income' ? '+' : '-'}{formatCurrency(tx.amount)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '2rem 0', color: '#737887' }}>
              No recent transactions.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
