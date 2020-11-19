import React, { useMemo, useState, useEffect } from "react";
import { useTable, useGlobalFilter, useFilters } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { exerciseCOLUMNS } from "./columns";
import FetchData from "./columns";
import "./table.css";
import { GlobalFilter } from "./GlobalFilter";
import axios from "axios";

export const FTexercisePlan = () => {
  //using memo to save calculation on data OR performance boost (other wise every render will be recognize as new data)
  const [data, setData] = useState([]);
  const columns = useMemo(() => exerciseCOLUMNS, []);
  //const data = useMemo(() => posts, []);

  useEffect(() => {
    axios
      .get("/getExercisePlan")
      .then((res) => {
        setData(res.data.data.exercisePlan);
        console.log(res.data.data.exercisePlan);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);
  //console.log(MOCK_DATA);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    //footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter
  );

  const { globalFilter } = state;

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
          {rows.map((row) => {
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
        {/*
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
              */}
      </table>
    </>
  );
};
