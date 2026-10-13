import api from './api';

export const getMonthlyTrends = (months = 6) => api.get(`/reports/monthly-trends?months=${months}`);

export const exportTransactions = async (filters) => {
  const response = await api.get('/transactions/export', { params: filters, responseType: 'blob' });
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `transactions_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  link.remove();
};