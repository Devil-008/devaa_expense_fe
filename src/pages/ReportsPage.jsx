import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { fetchTrends, exportCSV } from '../services/reportService';

const ReportsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrends().then(res => { setData(res.data); setLoading(false); });
  }, []);

  const handleExport = () => exportCSV();

  if (loading) return <div>Loading...</div>;
  if (data.length === 0) return <div className="glass-panel">No transaction data available for reports.</div>;

  return (
    <div className="glass-panel">
      <h2>Financial Trends</h2>
      <button onClick={handleExport}>Export to CSV</button>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="income" fill="#82ca9d" />
          <Bar dataKey="expense" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default ReportsPage;