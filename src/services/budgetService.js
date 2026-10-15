import api from './api';

export const getBudgets = (month, year) => api.get(`/budgets?month=${month}&year=${year}`);
export const createBudget = (data) => api.post('/budgets', data);
export const getBudgetStatus = (month, year) => api.get(`/budgets/status?month=${month}&year=${year}`);