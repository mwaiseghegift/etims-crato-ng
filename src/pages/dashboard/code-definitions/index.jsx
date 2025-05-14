import React, { useEffect, useState } from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import showToastMessage from "@/components/toast/toast";
import { getAllCodeDefinitions } from "@/services/code-definition/code-definition.service";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function CodeDefinitionsPage() {
  const [codeDefinitions, setCodeDefinitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedRows, setExpandedRows] = useState(null);

  const fetchCodeDefinitions = async () => {
    try {
      const data = await getAllCodeDefinitions();
      const flattened = data.flatMap((classification) =>
        classification.Definitions.map((def) => ({
          ...def,
          CodeClassificationName: classification.CodeClassificationName,
        }))
      );

      setCodeDefinitions(flattened);
    } catch (error) {
      console.error("Error fetching code definitions:", error);
      showToastMessage({
        type: "error",
        message: "Error fetching code definitions",
      });
    } finally {
      setLoading(false);
    }
  };

  const rowExpansionTemplate = (data) => {
    // show the definition details here: description
    return (
      <span className="text-gray-600 dark:text-gray-400 text-sm">
        {data.CodeDescription}
      </span>
    );
  };

  useEffect(() => {
    fetchCodeDefinitions();
  }, []);

  return (
    <div className="p-4 space-y-4">
      <PageBreadcrumb pageTitle="CODE DEFINITIONS" />

      {loading ? (
        <div className="text-muted-foreground text-center py-12">
          Loading code definitions...
        </div>
      ) : (
        <DataTable
          value={codeDefinitions}
          paginator
          rows={10}
          rowsPerPageOptions={[10, 20, 50]}
          className="p-datatable-striped"
          dataKey="Code"
          emptyMessage="No code definitions found."
          showGridlines
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          scrollable
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={rowExpansionTemplate}
          expandedRows={expandedRows}
        >
          <Column expander style={{ width: "5rem" }} />
          <Column
            field="CodeClassificationName"
            header="Classification"
            sortable
            style={{ width: "15rem" }}
          />
          <Column
            field="Code"
            header="Code"
            body={(rowData) => (
              <span className="text-gray-800 dark:text-gray-200 font-medium">
                {rowData.Code}
              </span>
            )}
            sortable
            style={{ width: "10rem" }}
          />
          <Column
            field="CodeName"
            header="Code Name"
            body={(rowData) =>
              rowData.CodeName ? (
                <span className="text-gray-900 dark:text-gray-100">
                  {rowData.CodeName}
                </span>
              ) : (
                <span className="text-gray-400 italic">N/A</span>
              )
            }
            sortable
            style={{ width: "15rem" }}
          />

          <Column
            field="SortOrder"
            header="Sort Order"
            body={(rowData) => (
              <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-200">
                {rowData.SortOrder}
              </span>
            )}
            sortable
            style={{ width: "10rem" }}
          />
        </DataTable>
      )}
    </div>
  );
}

export default CodeDefinitionsPage;
