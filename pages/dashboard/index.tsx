
import React from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image'
import Link from 'next/link';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="relative px-8 py-4 bg-blue-100 rounded-lg shadow-md w-full h-64">
        <div className="absolute bottom-0 right-0">
          <Image
            src="/card_image.svg"
            alt="Card Image"
            layout="responsive"
            width={700}
            height={700}
            className="w-16 h-16"
          />
        </div>
      
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            July 3, 2024
          </span>
        </div>
        <div className="mt-2">
          <p className="text-xl font-bold text-blue-500 ">
            Welcome back, Farid
          </p>
          <p className="text-lg mt-3 font-bold text-blue-900 ">
            Ready to crush your goals today?
          </p>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <p className="text-lg font-bold">Lets pick up where you left off</p>
        {/* <h4 className="text-2xl font-bold">Lets pick up where you left off</h4> */}
      </div>
      {/* <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome to the dashboard!</p> */}
    </Layout>
  );
};

export default Dashboard;