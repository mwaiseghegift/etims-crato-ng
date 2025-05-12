/**
 Select Item List
 should be post
 sample body
 {
  "vendorID": 0,
  "lastReqDt": "2025-05-11T14:25:01.811Z",
  "saveResponseToFile": true,
  "saveDataToDatabase": true
}
 */

import { API_ENDPOINTS } from "@/constants/apis";
import axiosInstance from "./config/axios-config";

export const selectItemListService = async (body) => {
  try {
    const response = await axiosInstance.post(API_ENDPOINTS.SELECT_ITEM_LIST, body);
    return response.data;
  } catch (error) {
    console.error("Error fetching item list:", error);
    throw error;
  }
}
