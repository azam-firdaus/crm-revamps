import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HomeIcon, UserIcon, CogIcon, PlusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'

const Sidebar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const router = useRouter();
  
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const isActive = (path: string) => router.pathname === path || router.pathname.startsWith(path);
  
    return (
        <div className={`font-medium h-screen ${isCollapsed ? 'w-20' : 'w-64'} bg-slate-100 text-black transition-width duration-700`}>
            <div className="p-4 flex items-center">
                <Image
                    src="/logo.ico"
                    alt="Logo"
                    width={800}
                    height={500}
                    className="h-8 w-8 cursor-pointer" 
                    onClick={toggleSidebar}
                />
                {!isCollapsed && <h1 className="text-2xl font-bold ps-7">CRM</h1>}
            </div>
            <nav className="mt-10">
                <Link href="/dashboard" className={`flex items-center p-2 ${isActive('/dashboard') ? 'text-sky-500 ' : ' hover:bg-gray-300'} h-12 rounded-lg transform transition-transform duration-200 hover:scale-95`}>
                    <HomeIcon className="h-6 w-6 mr-2" />
                    {!isCollapsed && 'Home'}
                </Link>
                

                {/* #################### START Leads #################### */}
                <div className={`relative flex items-center p-2 ${isActive('/lead') ? 'text-sky-500 ' : ' hover:bg-gray-300'} group h-12 rounded-lg transform transition-transform duration-200 hover:scale-95`}>
                    <Link href="/lead" className="flex items-center w-full">
                        <UserIcon className="h-6 w-6 mr-2" />
                        {!isCollapsed && 'Leads'}
                    </Link>
                    {!isCollapsed && (
                        <Link href="/lead/create" className="ml-auto hidden group-hover:flex items-center justify-center bg-gray-300 p-2 rounded hover:bg-slate-400">
                            <PlusIcon className="h-6 w-6 text-black" />
                        </Link>
                    )}
                </div>


                {/* #################### START Opportunities #################### */}
                <div className={`relative flex items-center p-2 ${isActive('/opportunity') ? 'text-sky-500 ' : ' hover:bg-gray-300'} group h-12 rounded-lg transform transition-transform duration-200 hover:scale-95`}>
                    <Link href="/opportunity" className="flex items-center w-full">
                        <UserIcon className="h-6 w-6 mr-2" />
                        {!isCollapsed && 'Opportunities'}
                    </Link>
                    {!isCollapsed && (
                        <Link href="/opportunity/create" className="ml-auto hidden group-hover:flex items-center justify-center bg-gray-300 p-2 rounded hover:bg-slate-400">
                            <PlusIcon className="h-6 w-6 text-black" />
                        </Link>
                    )}
                </div>


                {/* #################### START Requirements #################### */}
                <div className={`relative flex items-center p-2 ${isActive('/requirement') ? 'text-sky-500 ' : ' hover:bg-gray-300'} group h-12 rounded-lg transform transition-transform duration-200 hover:scale-95`}>
                    <Link href="/requirement" className="flex items-center w-full">
                        <UserIcon className="h-6 w-6 mr-2" />
                        {!isCollapsed && 'Requirements'}
                    </Link>
                    {!isCollapsed && (
                        <Link href="/requirement/create" className="ml-auto hidden group-hover:flex items-center justify-center bg-gray-300 p-2 rounded hover:bg-slate-400">
                            <PlusIcon className="h-6 w-6 text-black" />
                        </Link>
                    )}
                </div>


                {/* #################### START Business Cases #################### */}
                <div className={`relative flex items-center p-2 ${isActive('/bc') ? 'text-sky-500 ' : ' hover:bg-gray-300'} group h-12 rounded-lg transform transition-transform duration-200 hover:scale-95`}>
                    <Link href="/bc" className="flex items-center w-full">
                        <UserIcon className="h-6 w-6 mr-2" />
                        {!isCollapsed && 'Business Cases'}
                    </Link>
                    {!isCollapsed && (
                        <Link href="/bc/create" className="ml-auto hidden group-hover:flex items-center justify-center bg-gray-300 p-2 rounded hover:bg-slate-400">
                            <PlusIcon className="h-6 w-6 text-black" />
                        </Link>
                    )}
                </div>


                {/* #################### START Quotations #################### */}
                <div className={`relative flex items-center p-2 ${isActive('/quotation') ? 'text-sky-500 ' : ' hover:bg-gray-300'} group h-12 rounded-lg transform transition-transform duration-200 hover:scale-95`}>
                    <Link href="/quotation" className="flex items-center w-full">
                        <UserIcon className="h-6 w-6 mr-2" />
                        {!isCollapsed && 'Quotations'}
                    </Link>
                    {!isCollapsed && (
                        <Link href="/quotation/create" className="ml-auto hidden group-hover:flex items-center justify-center bg-gray-300 p-2 rounded hover:bg-slate-400">
                            <PlusIcon className="h-6 w-6 text-black" />
                        </Link>
                    )}
                </div>


                {/* #################### START SALE PKD #################### */}
                <div className={`relative flex items-center p-2 ${isActive('/pkd') ? 'text-sky-500 ' : ' hover:bg-gray-300'} group h-12 rounded-lg transform transition-transform duration-200 hover:scale-95`}>
                    <Link href="/pkd" className="flex items-center w-full">
                        <UserIcon className="h-6 w-6 mr-2" />
                        {!isCollapsed && 'Sales PKD'}
                    </Link>
                    {!isCollapsed && (
                        <Link href="/pkd/create" className="ml-auto hidden group-hover:flex items-center justify-center bg-gray-300 p-2 rounded hover:bg-slate-400">
                            <PlusIcon className="h-6 w-6 text-black" />
                        </Link>
                    )}
                </div>
                

                <hr className="my-2 border-gray-300" />
                <Link href="/settings" className={`flex items-center p-2 ${isActive('/settings') ? 'text-sky-500 ' : ' hover:bg-gray-300'} h-12 rounded-lg transform transition-transform duration-200 hover:scale-95`}>
                    <CogIcon className="h-6 w-6 mr-2" />
                    {!isCollapsed && 'Settings'}
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;