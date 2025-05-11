import { CRATO_ETIMS_API } from "@/constants/apis";
import axios from "axios";

const instance = axios.create({
  baseURL: CRATO_ETIMS_API,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("userToken");
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
});

export default instance;
