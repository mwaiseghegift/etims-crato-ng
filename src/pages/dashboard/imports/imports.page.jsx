import React, { useEffect, useState } from "react";
import showToastMessage from "@/components/toast/toast";
import { getUserRequestData } from "@/services/auth.service";
import { selectImportItemListService } from "@/services/imports/import-items.service";
import { importItemColumns } from "./imports.columns";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { DataTable } from "@/components/shared/DataTable/SharedTable";

function ImportItemListPage() {
  const [importItems, setImportItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchImportItems = async () => {
    try {
      const userData = getUserRequestData();

      const response = await selectImportItemListService({
        vendorID: userData?.vendorID || 0,
        lastReqDt: "2022-05-12T06:48:33.148Z",
        saveResponseToFile: true,
        saveDataToDatabase: true,
      });
      setImportItems(response?.data || []);
    } catch (error) {
      showToastMessage({
        type: "error",
        message: "Failed to fetch import items.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImportItems();
  }, []);

  return (
    <>
      <PageBreadcrumb pageTitle="IMPORT ITEMS" />
      {!loading && <DataTable columns={importItemColumns} data={importItems} />}
    </>
  );
}

export default ImportItemListPage;
