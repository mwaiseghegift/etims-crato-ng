/**
{
  "vendorID": 0,
  "saveResponseToFile": true,
  "saveDataToDatabase": true
}
 */

import { API_ENDPOINTS } from "@/constants/apis";
import axiosInstance from "../config/axios-config";


export const selectPurchaseSalesListService = async (body) => {
    try {
        const response = await axiosInstance.post(
            API_ENDPOINTS.SELECT_TRANS_PURCHASE_SALES_LIST, body);
        return response.data;
    } catch (error) {
        console.error("Error fetching notice list:", error);
        throw error;
    }
}
