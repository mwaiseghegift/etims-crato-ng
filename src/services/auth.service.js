import { API_ENDPOINTS } from "@/constants/apis";
import axios from "axios";

export const loginService = async (phone, password) => {
  if (!phone || !password) {
    throw new Error("Phone and password are required.");
  }
  try {
    const payload = {
      phoneNumber: phone,
      password: password,
    };
    const response = await axios.post(API_ENDPOINTS.USER_LOGIN, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.data.Error) {
      // Save user data and token to localStorage
      const { UserToken, ...userData } = response.data;
      localStorage.setItem("userToken", UserToken);
      localStorage.setItem("user", JSON.stringify(userData));

      return response.data;
    }
    throw new Error("Login failed. Please check your credentials.");
  } catch (error) {
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

  // navigate to the login page
  window.location.href = "/auth/sign-in";
};

/**
{
    "UserID": 1,
    "VendorUserID": 0,
    "FirstName": "Hillarie",
    "LastName": "Hillarie",
    "PhoneNumber": "0720968729",
    "Email": "kalyahillary@gmail.com",
    "StatusID": 1,
    "HasResetPassword": 1,
    "UserImageID": "0",
    "CountryCode": "254",
    "VendorImageID": "0",
    "Error": false,
    "Message": "Successfully Logged in as Hillarie",
    "TokenID": "Hilla",
    "ImageURL": null,
    "AppVersion": null,
    "VendorID": 1,
    "VendorStatusID": 1,
    "VendorName": "Esque Energy",
    "VendorKey": "FK0234H1!",
    "TwoFA": 0,
    "TwoFACode": "TE1WVw==",
    "VendorTypeID": 5,
    "VendorParentID": 1,
 */
export const getUserRequestData = () => {
  const user = localStorage.getItem("user");

  const userData = user ? JSON.parse(user) : null;

  if (!userData) {
    throw new Error("User data not found in localStorage.");
  }

  if (userData) {
    return {
      userID: userData.UserID,
      vendorUserID: userData.VendorUserID,
      firstName: userData.FirstName,
      lastName: userData.LastName,
      phoneNumber: userData.PhoneNumber,
      email: userData.Email,
      statusID: userData.StatusID,
      hasResetPassword: userData.HasResetPassword,
      countryCode: userData.CountryCode,
      vendorImageID: userData.VendorImageID,
      tokenID: userData.TokenID,
      vendorID: userData.VendorID,
      vendorStatusID: userData.VendorStatusID,
      vendorName: userData.VendorName,
      vendorKey: userData.VendorKey,
    };
  }
}
