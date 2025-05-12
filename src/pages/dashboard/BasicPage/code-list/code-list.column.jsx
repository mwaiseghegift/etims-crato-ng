export const codeListColumns = [
  {
    accessorKey: "cdClsNm",
    header: "Classification",
    cell: ({ getValue }) => (
      <span className="font-medium text-gray-900 dark:text-white">{getValue()}</span>
    ),
  },
  {
    accessorKey: "cd",
    header: "Code",
  },
  {
    accessorKey: "cdNm",
    header: "Code Name",
  },
  {
    accessorKey: "cdDesc",
    header: "Description",
    cell: ({ getValue }) =>
      getValue() ? getValue() : <span className="text-gray-400 italic">N/A</span>,
  },
  {
    accessorKey: "useYn",
    header: "Active",
    cell: ({ getValue }) => (
      <span
        className={`text-sm font-medium ${
          getValue() === "Y" ? "text-green-600" : "text-red-500"
        }`}
      >
        {getValue() === "Y" ? "Yes" : "No"}
      </span>
    ),
  },
  {
    accessorKey: "srtOrd",
    header: "Sort Order",
  },
];
