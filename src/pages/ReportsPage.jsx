import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getMonthlyTrends, exportTransactionsCsv } from '../services/reportService';

export const ReportsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => { getMonthlyTrends().then(res => setData(res.data)); }, []);

  return (
    <div className="glass-panel">
      <h2>Financial Reports</h2>
      <button onClick={() => exportTransactionsCsv()}>Export CSV</button>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#82ca9d" />
          <Bar dataKey="expense" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};