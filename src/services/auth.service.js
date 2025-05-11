import { API_ENDPOINTS } from "@/constants/apis";
import axios from "axios";

export const loginService = async (phone, password) => {
  if (!phone || !password) {
    throw new Error("Phone and password are required.");
  }
  try {
    const payload = {
      login: phone,
      password: password,
    };
    const response = await axios.post(API_ENDPOINTS.USER_LOGIN, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Save user data and token to localStorage
    const { UserToken, ...userData } = response.data;
    localStorage.setItem("userToken", UserToken);
    localStorage.setItem("user", JSON.stringify(userData));

    return response.data;
  } catch () {
    throw new Error("Login failed. Please check your credentials.");
  }
};

export const forgotPasswordService = async (phone, password) => {
  if (!phone || !password) {
    throw new Error("Phone and password are required.");
  }
  try {
    const payload = {
      jsonrpc: "2.0",
      params: {
        db: "taimba_v17",
        phone_number: phone,
        new_passwd: password,
      },
    };
    const response = await axios.post(
      API_ENDPOINTS.USER_FORGOT_PASSWORD,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          db: "taimba_v17",
          login: import.meta.env.VITE_DB_EMAIL,
          password: import.meta.env.VITE_DB_PASSWORD,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Password reset failed. Please check your credentials.");
  }
};

export const handleLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("userToken");
};
