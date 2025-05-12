export const noticeColumns = [
  {
    accessorKey: "noticeNo",
    header: "Notice No",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "cont",
    header: "Content",
  },
  {
    accessorKey: "dtlUrl",
    header: "URL",
    cell: ({ getValue }) => (
      <a
        href={getValue()}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View Notice
      </a>
    ),
  },
  {
    accessorKey: "regrNm",
    header: "Registered By",
  },
  {
    accessorKey: "regDt",
    header: "Registered Date",
    cell: ({ getValue }) => {
      const raw = getValue();
      const formatted = `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(
        6,
        8
      )} ${raw.slice(8, 10)}:${raw.slice(10, 12)}`;
      return <span>{formatted}</span>;
    },
  },
];
