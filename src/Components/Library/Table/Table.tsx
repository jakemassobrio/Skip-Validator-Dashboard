import React, { useMemo, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";

import { NoData, TableTitle, TableBase } from "./Table.styles";
import SearchBar from "../SearchBar";
import Box from "../Box";

export default function Table({
  title,
  tableData,
  columns,
}: {
  title: string;
  tableData: any[];
  columns: any[];
}) {
  const data: any[] = useMemo(() => tableData, [tableData]);
  const [filter, setFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filter,
    },
    onGlobalFilterChange: setFilter,
  });

  const handleSetFilter = (value: string) => {
    setFilter(value);
  };

  return (
    <Box width="100%">
      <Box display="flex" justify="space-between" alignItems="center">
        <TableTitle>{title}</TableTitle>
        <SearchBar
          placeholder="Filter"
          value={filter}
          onChange={handleSetFilter}
        />
      </Box>

      <TableBase>
        {data.length > 0 ? (
          <>
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
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
          </>
        ) : (
          <NoData>API Data Unavailable</NoData>
        )}
      </TableBase>
    </Box>
  );
}
