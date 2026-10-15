import React, { useState, useEffect } from 'react';
import { fetchBudgetStatus, createBudget } from '../services/budgetService';

export const BudgetsPage = () => {
  const [budgets, setBudgets] = useState([]);
  
  useEffect(() => {
    fetchBudgetStatus().then(setBudgets);
  }, []);

  return (
    <div className="glass-panel p-6">
      <h2 className="text-xl font-bold mb-4">Monthly Budgets</h2>
      {budgets.map(b => (
        <div key={b.category_id} className="mb-4">
          <div className="flex justify-between">
             <span>{b.category_name}</span>
             <span>{b.percentage_used.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className={`h-2.5 rounded-full ${b.percentage_used >= 100 ? 'bg-red-500' : b.percentage_used >= 80 ? 'bg-yellow-500' : 'bg-green-500'}`} style={{width: `${Math.min(b.percentage_used, 100)}%`}}></div>
          </div>
          {b.is_over_budget && <div className="text-red-600 text-sm mt-1">Warning: Over budget!</div>}
        </div>
      ))}
    </div>
  );
};