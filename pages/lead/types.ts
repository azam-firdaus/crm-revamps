export interface Lead {
    id: number;
    lead_id: string;
    name: string;
    customer_pic: string;
    lead_contact: string;
    assigned_am: string;
    estimation: string;
    total_oppo: number;
    oppo_consolidate: number;
    lead_status: boolean;
    lead_created: string;
    lead_created_formatted: string;
    lead_validity: string;
    // Add other properties as needed
  }