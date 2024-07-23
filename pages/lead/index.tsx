import React from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image'
import Link from 'next/link';
import { 
  HomeIcon, UserIcon, 
  CogIcon, PlusIcon, 
  FunnelIcon, CurrencyDollarIcon,
  ListBulletIcon, BriefcaseIcon,
  BanknotesIcon, DocumentTextIcon,
  BookOpenIcon, PencilSquareIcon
} from '@heroicons/react/24/outline';

const LeadIndexPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex items-center space-x-2 mb-4">
        <FunnelIcon className="h-6 w-6 text-black" />
        <span className="text-black font-bold text-lg">Leads</span>
      </div>
      <div className="min-h-screen">
        <div className="mt-5 relative px-8 py-4 bg-blue-100 rounded-lg shadow-md w-full">
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
            
          </div>
          <div className="mt-2">
            <p className="text-xl font-bold text-blue-500 ">
              Transform Leads into Loyal Customers
            </p>
            <p className="text-lg mt-3 text-blue-900 ">
              Effortlessly organize, track, and nurture leads from 
            </p>
          </div>
        </div>


        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative bg-white border border-blue-900 border-opacity-30 p-4 rounded-lg shadow-sm w-full h-64">
            <div className="flex flex-col items-start space-y-1">
              <div className="flex items-center space-x-2">
                <FunnelIcon className="h-10 w-10 text-blue-700" />
                <span className="text-blue-900 font-bold text-lg ">Capture New Leads</span>
              </div>
              <span className="text-blue-900 ">Add a new lead to your pipeline.</span>
            </div>
            <div className="absolute bottom-4 right-4 text-black flex flex-col space-y-1">
              {/* <span className="font-bold text-blue-900" >Manage Leads</span> */}
              <Link href="/lead/create">
                <span className="text-blue-900">Add new leads</span>
              </Link>
            </div>
          </div>


          <div className="relative bg-white border border-blue-900 border-opacity-30 p-4 rounded-lg shadow-sm w-full h-64">
            <div className="flex flex-col items-start space-y-1">
              <div className="flex items-center space-x-2">
                <PencilSquareIcon className="h-10 w-10 text-blue-700" />
                <span className="text-blue-900 font-bold text-lg ">View & Edit Leads</span>
              </div>
              <span className="text-blue-900 ">Manage and track your existing leads.</span>
            </div>
            <div className="absolute bottom-4 right-4 text-black flex flex-col space-y-1">
              {/* <span className="font-bold text-blue-900" >Manage Leads</span> */}
              <Link href="/lead/list">
                <span className="text-blue-900">Managed Leads</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LeadIndexPage;