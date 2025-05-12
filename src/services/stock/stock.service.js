import { API_ENDPOINTS } from "@/constants/apis";
import axiosInstance from "../config/axios-config";

/**
{
  "vendorID": 0,
  "saveResponseToFile": true,
  "saveDataToDatabase": true
}
 */

export const selectStockMoveListService = async (body) => {
    try {
        const response = await axiosInstance.post(
            API_ENDPOINTS.SELECT_STOCK_MOVE_LIST, body);
        return response.data;
    } catch (error) {
        console.error("Error fetching notice list:", error);
        throw error;
    }
}
