import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { fetchTrends, exportTransactions } from '../services/reportService';

const ReportsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => { fetchTrends().then(setData); }, []);

  const handleExport = () => exportTransactions();

  if (data.length === 0) return <div className='glass-panel'>No transaction data available for analysis.</div>;

  return (
    <div className='glass-panel'>
      <h2>Financial Trends</h2>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={data}>
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip />
          <Bar dataKey='income' fill='#82ca9d' />
          <Bar dataKey='expense' fill='#8884d8' />
        </BarChart>
      </ResponsiveContainer>
      <button onClick={handleExport}>Export to CSV</button>
    </div>
  );
};
export default ReportsPage;