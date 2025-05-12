/**
{
  "vendorID": 0,
  "lastReqDt": "2025-05-11T15:20:09.060Z",
  "saveResponseToFile": true,
  "saveDataToDatabase": true
}
 */
import { API_ENDPOINTS } from "@/constants/apis";
import axiosInstance from "../config/axios-config";

export const selectBhfListService = async (body) => {
    try {
        const response = await axiosInstance.post(
            API_ENDPOINTS.SELECT_BHF_LIST, body);
        return response.data;
    } catch (error) {
        console.error("Error fetching notice list:", error);
        throw error;
    }
}
