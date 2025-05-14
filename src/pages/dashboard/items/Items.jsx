import showToastMessage from "@/components/toast/toast";
import { selectItemListService } from "@/services/items.service";
import React, { useEffect, useState, useRef } from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { getUserRequestData } from "@/services/auth.service";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";

function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
const [expandedRows, setExpandedRows] = useState(null);
  const toast = useRef(null);

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

  // Template for the expanded row content
  const rowExpansionTemplate = (data) => {
    // Prepare key-value pairs for details
    const detailFields = [
      { label: "Class Code", value: data.itemClsCd },
      { label: "Package Unit", value: data.pkgUnitCd },
      { label: "Quantity Unit", value: data.qtyUnitCd },
      { label: "Tax Type", value: data.taxTyCd },
      { label: "Default Price", value: `KES ${data.dftPrc.toFixed(2)}` },
      { label: "Active", value: data.useYn === "Y" ? "Yes" : "No" },
    ];

    return (
      <div className="p-3">
        <h5>Details for {data.itemNm}</h5>
        <DataTable
          value={detailFields}
          size="small"
          showGridlines
          className="p-datatable-sm"
          header="Item Details"
        >
          <Column field="label" header="Field" style={{ width: "30%" }} />
          <Column field="value" header="Value" />
        </DataTable>
      </div>
    );
  };

  return (
    <>
      <Toast ref={toast} />
      <PageBreadcrumb pageTitle="ITEMS" />
      <div className="card">
        <DataTable
          value={items}
          paginator
          rows={15}
          dataKey="itemCd"
          size="small"
          stripedRows
          loading={loading}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={rowExpansionTemplate}
        >
          <Column expander style={{ width: "3rem" }} />
          <Column field="itemCd" header="Item Code" sortable />
          <Column field="itemNm" header="Item Name" sortable />
          <Column field="itemStdNm" header="Standard Name" sortable />
          <Column field="taxTyCd" header="Tax Type" sortable />
          <Column
            field="dftPrc"
            header="Default Price"
            sortable
            body={(rowData) => `KES ${rowData.dftPrc.toFixed(2)}`}
          />
          <Column
            field="useYn"
            header="Active"
            sortable
            body={(rowData) => (
              <span
                className={`text-xs font-medium px-2 py-1 rounded ${
                  rowData.useYn === "Y"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {rowData.useYn === "Y" ? "Yes" : "No"}
              </span>
            )}
          />
        </DataTable>
      </div>
    </>
  );
}

export default ItemsPage;
