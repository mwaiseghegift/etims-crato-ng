import axiosInstance from "../config/axios-config";
import { API_ENDPOINTS } from "@/constants/apis";

export const getAllCodeDefinitions = async () => {
    try {
        const response = await axiosInstance.get(
            API_ENDPOINTS.GET_ALL_CODE_DEFINITION);
        return response.data;
    } catch (error) {
        console.error("Error fetching notice list:", error);
        throw error;
    }
}
