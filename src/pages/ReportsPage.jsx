import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getMonthlyTrends, exportTransactions } from '../services/reportService';

const ReportsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getMonthlyTrends().then(res => setData(res.data.data));
  }, []);

  return (
    <div className="glass-panel p-6">
      <h2 className="text-2xl mb-4">Financial Reports</h2>
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="month" /><YAxis /><Tooltip /><Legend />
            <Bar dataKey="income" fill="#82ca9d" /><Bar dataKey="expense" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      ) : <div className="text-center py-10">No transaction history available.</div>}
      <button onClick={() => exportTransactions()} className="mt-4 btn-primary">Export CSV</button>
    </div>
  );
};
export default ReportsPage;