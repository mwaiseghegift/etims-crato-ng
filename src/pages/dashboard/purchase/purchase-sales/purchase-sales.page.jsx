import showToastMessage from "@/components/toast/toast";
import { selectPurchaseSalesListService } from "@/services/purchase/purchase.service";
import React, { useEffect, useState } from "react";
import { trnsPurchaseSalesColumns } from "./purchase-sales.columns";
import { DataTable } from "@/components/shared/DataTable/SharedTable";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { getUserRequestData } from "@/services/auth.service";

function TrnsPurchaseSalesPage() {
  const [items, setItems] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPurchaseSales = async () => {
    try {
      const userData = getUserRequestData();

      const res = await selectPurchaseSalesListService({
        vendorID: userData?.vendorID || 0,
        vendorKey: userData?.vendorKey || "",
        lastReqDt: "2020-05-12T17:25:30.348Z",
        saveResponseToFile: true,
        saveDataToDatabase: true,
      });
      const { resultCd, resultMsg, data } = res;

      if (resultCd === "000" && data) {
        setSummary(data.trnsPurchaseSales);
        setItems(data.trnsPurchaseSalesItemList || []);
      } else {
        showToastMessage({
          type: "error",
          message: resultMsg || "Failed to fetch data",
        });
      }
    } catch (error) {
      console.error("Error loading purchase/sales data:", error);
      showToastMessage({
        type: "error",
        message: "Error loading purchase/sales data",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPurchaseSales();
  }, []);

  return (
    <>
      <PageBreadcrumb pageTitle="PURCHASE/SALES TRANSACTIONS" />

      {summary && (
        <div className="mb-6 space-y-2 bg-gray-50 p-4 rounded-md border">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <p>
              <strong>Supplier:</strong> {summary.spplrNm}
            </p>
            <p>
              <strong>Invoice No:</strong> {summary.spplrInvcNo}
            </p>
            <p>
              <strong>Sale Date:</strong> {summary.salesDt}
            </p>
            <p>
              <strong>Total Items:</strong> {summary.totItemCnt}
            </p>
            <p>
              <strong>Total Tax:</strong> {summary.totTaxAmt}
            </p>
            <p>
              <strong>Total Amount:</strong> {summary.totAmt}
            </p>
          </div>
        </div>
      )}

      <DataTable columns={trnsPurchaseSalesColumns} data={items} />
    </>
  );
}

export default TrnsPurchaseSalesPage;
