import React, { useMemo, useState, useEffect } from "react";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
  useRowSelect,
} from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import FetchData from "./columns";
import "./table.css";
import { GlobalFilter } from "./GlobalFilter";
import { Checkbox } from "./Checkbox";

import axios from "axios";
import AssignmentFormTabled from "../FormComponents/AssignmentFormTabled";

export const FTmockData = () => {
  const [selectData, setselectData] = useState([]);
  const [selectDatas, setselectDatas] = useState([]);

  //using memo to save calculation on data OR performance boost (other wise every render will be recognize as new data)
  const data = useMemo(() => MOCK_DATA, []);
  const columns = useMemo(() => COLUMNS, []);
  //const data = useMemo(() => posts, []);

  useEffect(() => {
    /*
    setselectData(
      JSON.stringify(
        {
          selectedFlatRows: selectedFlatRows.map((row) => row.original.email),
        },
        null,
        2
      )
    );
    */
    setselectData(
      JSON.stringify(selectedFlatRows.map((row) => row.original.email))
    );
    /*
    setselectDatas(
      JSON.stringify(selectedFlatRows.map((row) => row.original.gender))
    );
    */
  });

  console.log(data);
  //console.log(MOCK_DATA);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    //footerGroups,
    //rows,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
    selectedFlatRows,
    selectedFlatCells,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );

  const { globalFilter } = state;
  const { pageIndex, pageSize } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/*I want to return selectedFlatRows as data */}
      <pre>
        <code>
          {}
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2
          )}
        </code>
      </pre>
      <div>
        <span>
          page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>
      {console.log("check selectData:", selectData)}
      {console.log("check selectDatas:", selectDatas)}

      {/*
        <AssignmentForm check={selectData} />
        
      <button type="submit" check={selectData}>
        Submit
      </button>
      */}
    </>
  );
};
