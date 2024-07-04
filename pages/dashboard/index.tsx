
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
  BookOpenIcon
} from '@heroicons/react/24/outline';

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

      <div className="mt-10 mb-10 flex items-center justify-between ">
        <p className="text-lg font-bold">Lets pick up where you left off</p>
        {/* <h4 className="text-2xl font-bold">Lets pick up where you left off</h4> */}
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative bg-white border border-blue-900 border-opacity-30 p-4 rounded-lg shadow-sm w-full h-64">
          <div className="flex flex-col items-start space-y-1">
            <div className="flex items-center space-x-2">
              <FunnelIcon className="h-20 w-20 text-blue-700" />
              <span className="text-blue-900 font-bold text-lg ">Leads</span>
            </div>
            <span className="text-blue-900 ">New prospects to engage.</span>
          </div>
          <div className="absolute bottom-4 right-4 text-black flex flex-col space-y-1">
            <span className="font-bold text-blue-900" >Manage Leads</span>
            <Link href="/lead/create">
              <span className="text-blue-900">+ Add new leads</span>
            </Link>
          </div>
        </div>


        <div className="relative bg-white border border-blue-900 border-opacity-30 p-4 rounded-lg shadow-sm w-full h-64">
          <div className="flex flex-col items-start space-y-1">
            <div className="flex items-center space-x-2">
              <CurrencyDollarIcon className="h-20 w-20 text-blue-700" />
              <span className="text-blue-900 font-bold text-lg ">Opportunities</span>
            </div>
            <span className="text-blue-900 ">Sales in progress.</span>
          </div>
          <div className="absolute bottom-4 right-4 text-black flex flex-col space-y-1">
            <span className="font-bold text-blue-900" >Manage Opportunities</span>
            <Link href="/opportunity/create">
              <span className="text-blue-900">+ Add new opportunity</span>
            </Link>
          </div>
        </div>


        <div className="relative bg-white border border-blue-900 border-opacity-30 p-4 rounded-lg shadow-sm w-full h-64">
          <div className="flex flex-col items-start space-y-1">
            <div className="flex items-center space-x-2">
              <ListBulletIcon className="h-20 w-20 text-blue-700" />
              <span className="text-blue-900 font-bold text-lg ">Requirements</span>
            </div>
            <span className="text-blue-900 ">Client project needs.</span>
          </div>
          <div className="absolute bottom-4 right-4 text-black flex flex-col space-y-1">
            <span className="font-bold text-blue-900" >Manage Requirements</span>
            <Link href="/requirement/create">
              <span className="text-blue-900">+ Add new requirement</span>
            </Link>
          </div>
        </div>


        <div className="relative bg-white border border-blue-900 border-opacity-30 p-4 rounded-lg shadow-sm w-full h-64">
          <div className="flex flex-col items-start space-y-1">
            <div className="flex items-center space-x-2">
              <BanknotesIcon className="h-20 w-20 text-blue-700" />
              <span className="text-blue-900 font-bold text-lg ">Quotations</span>
            </div>
            <span className="text-blue-900 ">Proposals awaiting review.</span>
          </div>
          <div className="absolute bottom-4 right-4 text-black flex flex-col space-y-1">
            <span className="font-bold text-blue-900" >Manage Quotations</span>
            {/* <span className="text-blue-900">+ Add new requirement</span> */}
          </div>
        </div>


        <div className="relative bg-white border border-blue-900 border-opacity-30 p-4 rounded-lg shadow-sm w-full h-64">
          <div className="flex flex-col items-start space-y-1">
            <div className="flex items-center space-x-2">
              <DocumentTextIcon className="h-20 w-20 text-blue-700" />
              <span className="text-blue-900 font-bold text-lg ">Sales PKD</span>
            </div>
            <span className="text-blue-900 ">Project launchpad.</span>
          </div>
          <div className="absolute bottom-4 right-4 text-black flex flex-col space-y-1">
            <span className="font-bold text-blue-900" >Manage PKD</span>
            <Link href="/pkd/create">
              <span className="text-blue-900">+ Generate PKD</span>
            </Link>
          </div>
        </div>


        <div className="relative bg-white border border-blue-900 border-opacity-30 p-4 rounded-lg shadow-sm w-full h-64">
          <div className="flex flex-col items-start space-y-1">
            <div className="flex items-center space-x-2">
              <BookOpenIcon className="h-20 w-20 text-blue-700" />
              <span className="text-blue-900 font-bold text-lg ">Directory</span>
            </div>
            <span className="text-blue-900 ">Your network in one place.</span>
          </div>
          <div className="absolute bottom-4 right-4 text-black flex flex-col space-y-1">
            <span className="font-bold text-blue-900" >Manage Companies</span>
            <span className="text-blue-900">+ Add new company</span>
          </div>
        </div>
      </div>
      {/* <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome to the dashboard!</p> */}
    </Layout>
  );
};

export default Dashboard;