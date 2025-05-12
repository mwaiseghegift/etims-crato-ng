import showToastMessage from "@/components/toast/toast";
import { selectClsListService } from "@/services/basic/items-cls-list";
import React, { useEffect, useState } from "react";
import { itemClsColumns } from "./items-cls.columns";
import { DataTable } from "@/components/shared/DataTable/SharedTable";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { getUserRequestData } from "@/services/auth.service";

function ItemsClsPageComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItemClsList = async () => {
    const userData = getUserRequestData();
    try {
      const response = await selectClsListService({
        vendorID: userData?.vendorID || 0,
        vendorKey: userData?.vendorKey || "",
        saveResponseToFile: false,
        saveDataToDatabase: false,
        lastReqDt: "2022-05-12T06:27:30.348Z",
      });

      setData(response?.data?.itemClsList ?? []);
    } catch (error) {
      console.error("Failed to load item classes", error);
      showToastMessage({
        type: "error",
        message: "Failed to fetch item class list.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItemClsList();
  }, []);

  return (
    <>
      <PageBreadcrumb pageTitle="Item Classification List" />
      {!loading && <DataTable columns={itemClsColumns} data={data} />}
    </>
  );
}

export default ItemsClsPageComponent;
