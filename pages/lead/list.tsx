// pages/list.js
import { useEffect, useState } from "react";
import { getLeads } from "../api/repository";
import Layout from "../../components/Layout";
import { Lead } from "./types";
import Image from "next/image";
import { format } from 'date-fns';

import { 
    HomeIcon, UserIcon, 
    CogIcon, PlusIcon, 
    FunnelIcon, CurrencyDollarIcon,
    ListBulletIcon, BriefcaseIcon,
    BanknotesIcon, DocumentTextIcon,
    BookOpenIcon, PencilSquareIcon
  } from '@heroicons/react/24/outline';

const ListPage = () => {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState([]);
    let ada = true;
    
    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const params = {
                    type: "all", // Example type
                    page: 1, // Example page number
                    search: "", // Example search query
                    filterAM: "", // Optional filter
                    filterCompany: "", // Optional filter
                };

                const data = await getLeads(params);
                console.log("API response:", JSON.stringify(data)); // Log the API response
                
                if (Array.isArray(data.data)) {
                    setLeads(data.data);
                } else {
                    throw new Error("API response is not an array");
                }
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("An unknown error occurred");
                }
            }
        };
        
        fetchLeads();
    }, []);
  
    if (error) {
        // ada = false;
        return <div>Error: {error}</div>;
    }
  
    return (
        <Layout>
            <div className="flex items-center space-x-2 mb-4">
                <FunnelIcon className="h-6 w-6 text-black" />
                <span className="text-black font-bold text-lg">Leads</span>
            </div>
            <div className="mt-10 mb-10 flex items-center justify-between ">
                <p className="text-xl font-bold">Manage Leads</p>
            </div>
            <div className="relative overflow-x-auto shadow-xl sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-black">
                    <thead className="text-xs text-black uppercase bg-white">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                            Lead ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Customer
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Customer PIC
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Lead Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Assigned AM
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Estimation (MYR)
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Total Opportunity
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Oppo Consolidate Value (MYR)
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Created At
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {leads.map((lead) => (
                            <tr key={lead.id} className="bg-white border-b hover:bg-gray-200">
                                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap" >
                                    {lead.lead_id}
                                </th>
                                <td className="px-6 py-4">{lead.customer_pic}</td>
                                <td className="px-6 py-4">{lead.lead_contact}</td>
                                <td className="px-6 py-4">{lead.name}</td>
                                <td className="px-6 py-4">{lead.assigned_am}</td>
                                <td className="px-6 py-4">{lead.estimation}</td>
                                <td className="px-6 py-4">{lead.total_oppo}</td>
                                <td className="px-6 py-4">{lead.oppo_consolidate}</td>
                                <td className="px-6 py-4">
                                { lead.lead_status ? 
                                    (
                                    <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 ">
                                        Active
                                    </div>
                                    ) : 
                                    (
                                    <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 ">
                                        Not Active
                                    </div>
                                    )
                                }
                                </td>
                                <td className="px-6 py-4">{lead.lead_created_formatted}</td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" >
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 pb-4" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                        Showing{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">1000</span>
                    </span>
                    
                    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-black bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700   -700 ">
                            Previous
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
                            1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
                            2
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">
                            3
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 " >
                            4
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
                            5
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">
                            Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Layout>
  );
};

export default ListPage;
