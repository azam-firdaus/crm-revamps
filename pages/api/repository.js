// api/repository.js

// import { json } from "stream/consumers";

const API_URL = 'http://crm-backend.loc/api';
const TOKEN = 'asoidnasoindoiasdnasoidnoasdasd'; // Replace with your actual bearer token

const fetchWithToken = async (endpoint, params = {}) => {
    const url = new URL(`${API_URL}/${endpoint}`);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  const response = await fetch(`${url}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`
    },
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const getLeads = (params) => fetchWithToken('leads', params);

export const getLeadById = (id) => fetchWithToken(`leads/${id}`);
