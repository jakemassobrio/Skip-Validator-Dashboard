import React, { useMemo, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";

import { NoData, TableTitle, TableBase } from "./Table.styles";
import SearchBar from "../SearchBar";
import Box from "../Box";
import Icon from "../Icon";
import { useTheme } from "@emotion/react";

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
  const [sorting, setSorting] = useState<SortingState>([]);

  const theme = useTheme();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filter,
    },
    onGlobalFilterChange: setFilter,
    onSortingChange: setSorting,
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
          testId="filter"
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
                  {headerGroup.headers.map((header) => {
                    console.log(header.column.getIsSorted());
                    return (
                      <th
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <Box
                          display="flex"
                          alignItems="center"
                          justify="center"
                          width="100%"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                          <Box height="24px">
                            {header.column.getIsSorted() === "asc" ? (
                              <Icon
                                icon={"arrow_drop_up"}
                                color={theme.text.primary}
                                width={"24px"}
                              />
                            ) : header.column.getIsSorted() === "desc" ? (
                              <Icon
                                icon={"arrow_drop_down"}
                                color={theme.text.primary}
                                width={"24px"}
                              />
                            ) : header.column.getIsSorted() === false ? (
                              <Icon
                                icon={"sort"}
                                color={theme.text.primary}
                                width={"14px"}
                              />
                            ) : null}
                          </Box>
                        </Box>
                      </th>
                    );
                  })}
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
