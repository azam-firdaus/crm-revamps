import React from 'react';
import Layout from '../../components/Layout';

const CreateUser: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold">Create User</h1>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Create</button>
      </form>
    </Layout>
  );
};

export default CreateUser;