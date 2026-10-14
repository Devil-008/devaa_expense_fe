import api from './api';

export const getMonthlyTrends = async (months = 6) => {
    const response = await api.get(`/reports/monthly-trends?months=${months}`);
    return response.data.data;
};

export const exportTransactions = async (filters = {}) => {
    const response = await api.get('/reports/transactions/export', { params: filters, responseType: 'blob' });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `transactions_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
};