import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { getUserRequestData } from "@/services/auth.service";
import { selectItemListService } from "@/services/items.service";
import React, { useEffect, useState } from "react";

function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = React.useState(true);
  const [requestBody, setRequestBody] = useState({
    vendorID: 0,
    vendorKey: "",
    lastReqDt: new Date().toISOString(),
    saveResponseToFile: true,
    saveDataToDatabase: true,
  });

  const userData = getUserRequestData();
  if (userData) {
    requestBody.vendorID = userData.vendorID;
    requestBody.vendorKey = userData.vendorKey;
  }

  const fetchItems = async () => {
    try {
      const items = await selectItemListService(requestBody);
      setItems(items);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <PageBreadcrumb pageTitle="Items" />
    </>
  )                                                                              
}

export default Items;
