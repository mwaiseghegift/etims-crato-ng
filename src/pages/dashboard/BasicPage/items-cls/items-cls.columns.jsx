export const itemClsColumns = [
  {
    accessorKey: "itemClsCd",
    header: "Class Code",
  },
  {
    accessorKey: "itemClsNm",
    header: "Class Name",
    cell: ({ getValue }) => (
      <span className="text-gray-800 dark:text-gray-200 font-medium">
        {getValue()}
      </span>
    ),
  },
  {
    accessorKey: "taxTyCd",
    header: "Tax Type",
  },
  {
    accessorKey: "mjrTgYn",
    header: "Major Target",
    cell: ({ getValue }) => (
      <span className={getValue() === "Y" ? "text-green-600" : "text-gray-400"}>
        {getValue() === "Y" ? "Yes" : "No"}
      </span>
    ),
  },
  {
    accessorKey: "useYn",
    header: "Active",
    cell: ({ getValue }) => (
      <span className={getValue() === "Y" ? "text-green-600" : "text-red-500"}>
        {getValue() === "Y" ? "Yes" : "No"}
      </span>
    ),
  },
];
