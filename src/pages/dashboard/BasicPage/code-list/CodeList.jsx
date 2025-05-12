import showToastMessage from '@/components/toast/toast';
import { selectCodeListService } from '@/services/basic/code-list';
import React, { useEffect, useState } from 'react'
import { codeListColumns } from './code-list.column';
import PageBreadcrumb from '@/components/common/PageBreadCrumb';
import { DataTable } from '@/components/shared/DataTable/SharedTable';
import { getUserRequestData } from '@/services/auth.service';

function CodeList() {
  const [codeList, setCodeList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCodeList = async () => {
    try {

      const userData = getUserRequestData();
      
      const body = {
        vendorID: userData?.vendorID || 0,
        vendorKey: userData?.vendorKey || "",
        lastReqDt: new Date().toISOString(),
        saveResponseToFile: false,
        saveDataToDatabase: false,
      };
      const res = await selectCodeListService(body);

      if (res.resultCd === "000") {
        const flattened = res.data.clsList.flatMap((cls) =>
          (cls.dtlList || []).map((dtl) => ({
            ...dtl,
            cdClsNm: cls.cdClsNm,
            cdCls: cls.cdCls,
          }))
        );
        setCodeList(flattened);
      } else {
        throw new Error(res.resultMsg || "Unknown error from server");
      }
    } catch (error) {
      console.error("Error fetching code list:", error);
      showToastMessage({
        type: "error",
        message: "Failed to load code list.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCodeList();
  }, []);

  return (
    <div className="p-4 space-y-4">
      <PageBreadcrumb pageTitle="CODE LIST" />
      {loading ? (
        <div className="text-center text-muted-foreground">Loading...</div>
      ) : (
        <DataTable columns={codeListColumns} data={codeList} />
      )}
    </div>
  );
}

export default CodeList
