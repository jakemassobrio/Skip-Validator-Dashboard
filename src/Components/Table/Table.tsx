import React, { useMemo } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  TableTitle,
  TableBase,
  TableNumber,
  TableName,
  TableNameHeader,
  TableNumberHeader,
} from "./Table.styles";
import SearchBar from "../SearchBar";
import Box from "../Box";

export default function Table({
  title,
  tableData,
}: {
  title: string;
  tableData: any[];
}) {
  const columnHelper = createColumnHelper<any>();

  const columns = [
    columnHelper.accessor((row) => row.rowId, {
      id: "rowId",
      header: () => <TableNumberHeader>#</TableNumberHeader>,
      cell: (info) => <TableNumber>{info.getValue()}</TableNumber>,
    }),
    columnHelper.accessor((row) => row.name, {
      id: "name",
      header: () => <TableNameHeader>Validator</TableNameHeader>,
      cell: (info) => <TableName>{info.getValue()}</TableName>,
    }),
    columnHelper.accessor((row) => row.totalMEVRevenue, {
      id: "totalMEVRevenue",
      header: () => <TableNumberHeader>MEV Rev. - Total</TableNumberHeader>,
      cell: (info) => <TableNumber>{info.getValue()}</TableNumber>,
    }),
    columnHelper.accessor((row) => row.totalMEVShared, {
      id: "totalMEVShared",
      header: () => <TableNumberHeader>MEV Rev - Kept</TableNumberHeader>,
      cell: (info) => <TableNumber>{info.getValue()}</TableNumber>,
    }),
    columnHelper.accessor((row) => row.bundles, {
      id: "bundles",
      header: () => <TableNumberHeader>Bundles</TableNumberHeader>,
      cell: (info) => <TableNumber>{info.getValue()}</TableNumber>,
    }),
  ];

  const data: any[] = useMemo(() => [...tableData], [tableData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Box width="100%">
      <Box display="flex" justify="space-between" alignItems="center">
        <TableTitle>{title}</TableTitle>
        <SearchBar placeholder="Filter" onSubmit={() => {}} />
      </Box>
      <TableBase>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </TableBase>
    </Box>
  );
}
