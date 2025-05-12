export const bhfListColumns = [
    {
        accessorKey: "itemClsCd",
        header: "Item Code",
        cell: ({ getValue }) => <span>{getValue()}</span>,
    },
    {
        accessorKey: "itemClsNm",
        header: "Item Name",
        cell: ({ getValue }) => <span>{getValue()}</span>,
    },
    {
        accessorKey: "itemClsLvl",
        header: "Item Level",
        cell: ({ getValue }) => <span>{getValue()}</span>,
    },
    {
        accessorKey: "taxTyCd",
        header: "Tax Type",
        cell: ({ getValue }) => <span>{getValue()}</span>,
    },
    {
        accessorKey: "mjrTgYn",
        header: "Major Target",
        cell: ({ getValue }) => (
            <span>{getValue() === "Y" ? "Yes" : "No"}</span>
        ),
    },
    {
        accessorKey: "useYn",
        header: "Usage",
        cell: ({ getValue }) => (
            <span
                className={`text-sm font-medium ${
                    getValue() === "Y" ? "text-green-600" : "text-red-500"
                }`}
            >
                {getValue() === "Y" ? "Active" : "Inactive"}
            </span>
        ),
    },
];
