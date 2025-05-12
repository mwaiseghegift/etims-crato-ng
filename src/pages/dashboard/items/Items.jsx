// src/pages/items/ItemsPage.jsx
import showToastMessage from "@/components/toast/toast";
import { selectItemListService } from "@/services/items.service";
import React, { useEffect, useState } from "react";
import { itemsColumns } from "./items-columns";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { DataTable } from "@/components/shared/DataTable/SharedTable";
import { getUserRequestData } from "@/services/auth.service";


function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    const userData = getUserRequestData();
    try {
      const res = await selectItemListService({
        vendorID: userData?.vendorID || 0,
        lastReqDt: "2022-05-12T06:48:33.148Z",
        saveResponseToFile: true,
        saveDataToDatabase: true,
      });
      if (res?.data?.itemList) {
        setItems(res.data.itemList);
      } else {
        showToastMessage({
          type: "error",
          message: "No item data received.",
        });
      }
    } catch (err) {
      console.error("Error loading items:", err);
      showToastMessage({
        type: "error",
        message: "Failed to load items.",
      });
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
      {!loading && <DataTable columns={itemsColumns} data={items} />}
    </>
  );
}

export default ItemsPage;
