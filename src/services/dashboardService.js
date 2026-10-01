import api from './api';

export const dashboardService = {
  async getSummary(params) {
    const response = await api.get('/dashboard/summary', { params });
    return response.data;
  },
  
  async getCategoryBreakdown(params) {
    const response = await api.get('/dashboard/category-breakdown', { params });
    return response.data.breakdown;
  },
  
  async getRecentTransactions(limit = 5) {
    const response = await api.get('/dashboard/recent-transactions', { params: { limit } });
    return response.data.transactions;
  }
};
