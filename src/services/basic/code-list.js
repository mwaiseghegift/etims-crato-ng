import { API_ENDPOINTS } from "@/constants/apis";
import axiosInstance from "./config/axios-config";

/*
{
  "vendorID": 1,
  "lastReqDt": "2020",
  "saveResponseToFile": true,
  "saveDataToDatabase": true
}
*/
export const selectCodeListService = async (body) => {
    try {
        const response = await axiosInstance.post(
            API_ENDPOINTS.SELECT_CODE_LIST, body);
        return response.data;
    } catch (error) {
        console.error("Error fetching notice list:", error);
        throw error;
    }
}
