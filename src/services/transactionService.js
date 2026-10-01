import api from './api';

export const transactionService = {
  async getTransactions(params) {
    const response = await api.get('/transactions', { params });
    return response.data.transactions;
  },
  
  async createTransaction(data) {
    const response = await api.post('/transactions', data);
    return response.data.transaction;
  },
  
  async updateTransaction(id, data) {
    const response = await api.put(`/transactions/${id}`, data);
    return response.data.transaction;
  },
  
  async deleteTransaction(id) {
    const response = await api.delete(`/transactions/${id}`);
    return response.data;
  }
};

export const categoryService = {
  async getCategories() {
    const response = await api.get('/categories');
    return response.data.categories;
  },
  
  async createCategory(data) {
    const response = await api.post('/categories', data);
    return response.data.category;
  },
  
  async updateCategory(id, data) {
    const response = await api.put(`/categories/${id}`, data);
    return response.data.category;
  },
  
  async deleteCategory(id) {
    const response = await api.delete(`/categories/${id}`);
    return response.data;
  }
};
