import React from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Wallet, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import PublicHeader from '../components/layout/PublicHeader';
import Footer from '../components/layout/Footer';

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <PublicHeader />
      
      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <section style={{ 
          padding: '6rem 2rem', 
          textAlign: 'center',
          background: 'linear-gradient(135deg, #F7F8FC 0%, #e0eafc 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative blur blobs */}
          <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', background: 'rgba(255, 90, 20, 0.2)', filter: 'blur(80px)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '400px', height: '400px', background: 'rgba(22, 163, 106, 0.15)', filter: 'blur(100px)', borderRadius: '50%' }} />
          
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#202431', marginBottom: '1.5rem', lineHeight: 1.2 }}>
              Understand Your Money. <br />
              <span style={{ color: '#FF5A14' }}>Make Every Rupee Count.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#737887', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              The elegant expense tracker that helps you record income, understand spending patterns, and manage a monthly budget with ease.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <Link to="/register" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', fontSize: '1.1rem' }}>
                Start Tracking <ArrowRight size={20} />
              </Link>
              <a href="#features" className="glass-panel" style={{ textDecoration: 'none', color: '#202431', padding: '14px 28px', fontSize: '1.1rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>
                Explore Features
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" style={{ padding: '5rem 2rem', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', color: '#202431', marginBottom: '1rem' }}>Everything you need</h2>
              <p style={{ color: '#737887', fontSize: '1.1rem' }}>Simple, powerful tools to take control of your financial life.</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <FeatureCard 
                icon={<Wallet size={32} color="#FF5A14" />}
                title="Track Income & Expenses"
                desc="Easily log your daily transactions and see exactly where your money goes."
              />
              <FeatureCard 
                icon={<PieChart size={32} color="#16A36A" />}
                title="Set Monthly Budgets"
                desc="Create custom budgets for different categories and never overspend again."
              />
              <FeatureCard 
                icon={<TrendingUp size={32} color="#3B82F6" />}
                title="Visualize Spending"
                desc="Beautiful, interactive charts that give you actionable insights instantly."
              />
              <FeatureCard 
                icon={<Shield size={32} color="#8B5CF6" />}
                title="Secure & Private"
                desc="Your data is yours. We prioritize security and privacy in everything we build."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: '6rem 2rem', background: '#FF5A14', color: '#fff', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to take control?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9 }}>Join thousands of others building better financial habits today.</p>
          <Link to="/register" style={{ 
            backgroundColor: '#fff', 
            color: '#FF5A14', 
            padding: '14px 32px', 
            borderRadius: '8px', 
            textDecoration: 'none', 
            fontWeight: 700, 
            fontSize: '1.1rem',
            display: 'inline-block',
            boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
          }}>
            Create Free Account
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div style={{ 
      padding: '2rem', 
      borderRadius: '16px', 
      border: '1px solid rgba(0,0,0,0.05)',
      backgroundColor: '#FAFAFA',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      cursor: 'default'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
    >
      <div style={{ marginBottom: '1.5rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#202431' }}>{title}</h3>
      <p style={{ color: '#737887', lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}
