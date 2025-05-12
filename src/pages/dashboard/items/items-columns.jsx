export const itemsColumns = [
  {
    accessorKey: "itemCd",
    header: "Item Code",
  },
  {
    accessorKey: "itemNm",
    header: "Item Name",
  },
  {
    accessorKey: "itemStdNm",
    header: "Standard Name",
    cell: ({ getValue }) =>
      getValue() || <span className="italic text-gray-400">N/A</span>,
  },
  {
    accessorKey: "itemClsCd",
    header: "Class Code",
  },
  {
    accessorKey: "pkgUnitCd",
    header: "Package Unit",
  },
  {
    accessorKey: "qtyUnitCd",
    header: "Qty Unit",
  },
  {
    accessorKey: "taxTyCd",
    header: "Tax Type",
  },
  {
    accessorKey: "dftPrc",
    header: "Default Price",
    cell: ({ getValue }) => `KES ${getValue().toFixed(2)}`,
  },
  {
    accessorKey: "useYn",
    header: "Active",
    cell: ({ getValue }) => (
      <span
        className={`text-xs font-medium px-2 py-1 rounded ${
          getValue() === "Y" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}
      >
        {getValue() === "Y" ? "Yes" : "No"}
      </span>
    ),
  },
];
