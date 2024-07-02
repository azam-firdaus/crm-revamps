import React from 'react';
import Layout from '../../components/Layout';

const UserList: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold">Users List</h1>
      <ul className="mt-4">
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
    </Layout>
  );
};

export default UserList;