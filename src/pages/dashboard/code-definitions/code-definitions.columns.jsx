import { Badge } from "@/components/ui/badge";
import { Column } from 'primereact/column';

export const codeDefinitionColumns = [
  {
    accessorKey: "CodeClassificationName",
    header: "Classification",
    cell: ({ getValue }) => (
      <span className="font-semibold text-blue-600 dark:text-blue-400">
        {getValue()}
      </span>
    ),
  },
  {
    accessorKey: "Code",
    header: "Code",
    cell: ({ getValue }) => (
      <span className="text-gray-800 dark:text-gray-200 font-medium">
        {getValue()}
      </span>
    ),
  },
  {
    accessorKey: "CodeName",
    header: "Code Name",
    cell: ({ getValue }) =>
      getValue() ? (
        <span className="text-gray-900 dark:text-gray-100">{getValue()}</span>
      ) : (
        <span className="text-gray-400 italic">N/A</span>
      ),
  },
  {
    accessorKey: "CodeDescription",
    header: "Description",
    cell: ({ getValue }) =>
      getValue() ? (
        <span className="text-gray-600 dark:text-gray-400 text-sm">
          {getValue()}
        </span>
      ) : (
        <span className="text-gray-400 italic">N/A</span>
      ),
  },
  {
    accessorKey: "SortOrder",
    header: "Sort Order",
    cell: ({ getValue }) => (
      <Badge size="sm" color="blue">
        {getValue()}
      </Badge>
    ),
  },
];
