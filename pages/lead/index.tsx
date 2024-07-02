import React from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image'
import Link from 'next/link';

const UserList: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        
        
        <div className=" px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
            
            <Link href="#" className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" role="link">
              Design
            </Link>
          </div>
          <div className="mt-2">
          <p className="text-xl font-bold text-gray-700 dark:text-white ">
              Welcome back, Farid
            </p>
            <Link href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" role="link">
              Accessibility tools for designers and developers
            </Link>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline" role="link">
              Read more
            </Link>

            <div className="flex items-center">
              <Image
                src="/vercel.svg"
                alt="avatar"
                width={800}
                height={500}
                className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
              />
              
              <Link href="#" className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" role="link">
                Khatab wedaa
              </Link>
            </div>
          </div>
        </div>



        <h1 className="text-2xl font-bold">Users List</h1>
        <ul className="mt-4">
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
        </ul>
      </div>
    </Layout>
  );
};

export default UserList;