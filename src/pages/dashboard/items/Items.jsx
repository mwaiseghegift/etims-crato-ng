import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { selectItemListService } from "@/services/items.service";
import React, { useEffect, useState } from "react";

function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = React.useState(true);
  const [requestBody, setRequestBody] = useState({
    vendorID: 0,
    lastReqDt: new Date().toISOString(),
    saveResponseToFile: true,
    saveDataToDatabase: true,
  });

  const fetchItems = async () => {
    try {
      const items = selectItemListService(requestBody);
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
        <PageBreadcrumb pageTitle="ITEMS" />
    </>
  )

}

export default Items;
