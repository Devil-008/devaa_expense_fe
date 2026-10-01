import React, { useState, useEffect } from 'react';
import { categoryService } from '../services/transactionService';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const data = await categoryService.getCategories();
      setCategories(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Categories</h1>
        <button className="btn-primary" style={{ width: 'auto' }}>Add Category</button>
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem' }}>
        {loading ? (
          <p>Loading categories...</p>
        ) : categories.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 0', color: '#737887' }}>
            <p>No custom categories yet.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
            {categories.map(cat => (
              <div key={cat.id} style={{ 
                padding: '1rem', 
                border: '1px solid rgba(0,0,0,0.1)', 
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <div style={{ 
                  width: '16px', height: '16px', borderRadius: '50%', 
                  backgroundColor: cat.color || (cat.type === 'income' ? '#16A36A' : '#E5484D') 
                }} />
                <div>
                  <div style={{ fontWeight: 600 }}>{cat.name}</div>
                  <div style={{ fontSize: '0.8rem', color: '#737887' }}>{cat.type}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
