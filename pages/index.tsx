// pages/index.tsx
import React from 'react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold">Welcome to the Management System</h1>
      <p>This is the dashboard.</p>
    </Layout>
  );
};

export default Home;