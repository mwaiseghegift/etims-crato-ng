import React, { useEffect, useState } from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import showToastMessage from "@/components/toast/toast";
import { getAllCodeDefinitions } from "@/services/code-definition/code-definition.service";
import { DataTable } from "@/components/shared/DataTable/SharedTable";
import { codeDefinitionColumns } from "./code-definitions.columns";

function CodeDefinitionsPage() {
  const [codeDefinitions, setCodeDefinitions] = useState([]);
  const [loading, setLoading] = useState(true);

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
          columns={codeDefinitionColumns}
          data={codeDefinitions}
          options={{
            pagination: true,
            sorting: true,
            filtering: true,
          }}
        />
      )}
    </div>
  );
}

export default CodeDefinitionsPage;
