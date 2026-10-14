import axios from 'axios';

export const getMonthlyTrends = async (months = 6) => {
  const response = await axios.get(`/api/v1/reports/monthly-trends?months=${months}`);
  return response.data;
};

export const exportTransactionsCsv = async (filters = {}) => {
  const params = new URLSearchParams(filters);
  const response = await axios.get(`/api/v1/transactions/export?${params.toString()}`, {
    responseType: 'blob',
  });
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `transactions_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  link.remove();
};