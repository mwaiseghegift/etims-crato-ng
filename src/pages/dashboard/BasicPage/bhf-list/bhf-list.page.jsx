import React, { useEffect, useState } from "react";
import { selectBhfListService } from "@/services/basic/bhf-list";
import { DataTable } from "@/components/shared/DataTable/SharedTable";
import { getUserRequestData } from "@/services/auth.service";
import { bhfListColumns } from "./bhf-list.columns";

function BhfListPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const userData = getUserRequestData();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await selectBhfListService({
          vendorID: userData?.vendorID || 0,
          vendorKey: userData?.vendorKey || "",
          lastReqDt: new Date().toISOString(),
          saveResponseToFile: false,
          saveDataToDatabase: false,
        });
        setData(response.data.itemClsList || []);
      } catch (error) {
        console.error("Error fetching bhf list:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return <DataTable columns={bhfListColumns} data={data} />;
};

export default BhfListPage;
