import { DataTable } from "@/components/shared/DataTable/SharedTable";
import showToastMessage from "@/components/toast/toast";
import { getUserRequestData } from "@/services/auth.service";
import { selectStockMoveListService } from "@/services/stock/stock.service";
import React, { useEffect, useState } from "react";
import { stockMoveColumns } from "./stock-movement.columns";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";


function StockMovementListPage() {
  const [stockMove, setStockMove] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStockMovement = async () => {
    try {
            const userData = getUserRequestData();
        
      const response = await selectStockMoveListService({
        vendorID: userData?.vendorID || 0,
        vendorKey: userData?.vendorKey || "",
        lastReqDt: "2022-05-12T17:44:44.122Z",
        saveResponseToFile: true,
        saveDataToDatabase: true
        });
      const data = response?.data || {};
      setStockMove(data);
      setItems(data.stockMoveItemList || []);
    } catch (err) {
      showToastMessage({
        type: "error",
        message: "Failed to fetch stock movement data",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStockMovement();
  }, []);

  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="STOCK MOVEMENT" />

      {stockMove && (
        <div className="grid gap-4 text-sm text-gray-700 dark:text-white/80">
          <p><strong>Customer PIN:</strong> {stockMove.custTin}</p>
          <p><strong>Branch ID:</strong> {stockMove.custBhfId}</p>
          <p><strong>Stored & Released ID:</strong> {stockMove.sarNo}</p>
          <p><strong>Date:</strong> {stockMove.ocrnDt}</p>
          <p><strong>Total Items:</strong> {stockMove.totItemCnt}</p>
          <p><strong>Supply Price:</strong> {stockMove.totTaxblAmt}</p>
          <p><strong>VAT:</strong> {stockMove.totTaxAmt}</p>
          <p><strong>Total Amount:</strong> {stockMove.totAmt}</p>
          <p><strong>Remark:</strong> {stockMove.remark}</p>
        </div>
      )}

      <h2 className="text-lg font-semibold mt-4">StockMove (Stock Movement Information)</h2>

      <DataTable columns={stockMoveColumns} data={items} />
    </div>
  );
}

export default StockMovementListPage;
