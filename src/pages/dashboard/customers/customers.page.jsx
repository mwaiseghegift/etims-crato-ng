import showToastMessage from "@/components/toast/toast";
import { selectCustomerService } from "@/services/customer/customer.service";
import React, { useEffect, useState } from "react";
import { customerInfoColumns } from "./customers.columns";
import { DataTable } from "@/components/shared/DataTable/SharedTable";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { getUserRequestData } from "@/services/auth.service";

function CustomerInfoPage() {
  const [customerInfo, setCustomerInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customerPiNo, setCustomerPiNo] = useState("");

  const fetchCustomerInfo = async () => {
    try {
      const userData = getUserRequestData();
      const response = await selectCustomerService({
        vendorID: userData?.vendorID || 0,
        customerPiNo: customerPiNo,
        lastReqDt: "2022-05-12T06:48:33.148Z",
        saveResponseToFile: true,
        saveDataToDatabase: true,
        vendorKey: userData?.vendorKey,
      });
      if (response?.data) {
        setCustomerInfo([response.data]); // wrap in array to match DataTable structure
      }
    } catch (error) {
      showToastMessage({
        type: "error",
        message: "Failed to fetch customer info.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomerInfo();
  }, []);

  return (
    <>
      <PageBreadcrumb pageTitle="CUSTOMER INFO" />
      {!loading && (
        <DataTable columns={customerInfoColumns} data={customerInfo} />
      )}
    </>
  );
}

export default CustomerInfoPage;
