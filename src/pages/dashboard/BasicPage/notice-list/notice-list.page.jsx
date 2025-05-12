import showToastMessage from "@/components/toast/toast";
import { selectNoticeListService } from "@/services/basic/notice-list";
import React, { useEffect, useState } from "react";
import { noticeColumns } from "./notice-list.columns";
import { getUserRequestData } from "@/services/auth.service";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { DataTable } from "@/components/shared/DataTable/SharedTable";

function NoticeListComponent() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotices = async () => {
    const userData = getUserRequestData();

    try {
      const response = await selectNoticeListService({
        vendorID: userData?.vendorID || 0,
        saveResponseToFile: false,
        saveDataToDatabase: false,
        lastReqDt: "2022-05-12T06:48:33.148Z",
      });

      setNotices(response?.data?.noticeList ?? []);
    } catch (error) {
      console.error("Failed to fetch notices", error);
      showToastMessage({
        type: "error",
        message: "Unable to load notice list.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  return (
    <>
      <PageBreadcrumb pageTitle="Notices" />
      {!loading && <DataTable columns={noticeColumns} data={notices} />}
    </>
  );
}

export default NoticeListComponent;
