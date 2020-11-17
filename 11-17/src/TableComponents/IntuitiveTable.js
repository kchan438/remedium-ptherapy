import React from "react";
import ReactPlayer from "react-player";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import profile from "../HeaderPages/Profile";

import styled from "styled-components";
import {
  useTable,
  useExpanded,
  useGlobalFilter,
  useFilters,
} from "react-table";
import { GlobalFilter } from "./GlobalFilter";

import axios from "axios";
import { useMemo, useState, useEffect } from "react";
import MOCK_DATA from "./MOCK_DATA";
import { INTUITIVECOLUMNS } from "./columns";
import CircularProgress from "../MaterialUIcomponents/CircularProgress";
import { useParams } from "react-router";

//import makeData from "./components/makeData";

import { Styles } from "./TEtable";
import Table from "./TEtable";
import { FTprogressReport } from "./FTprogressReport";

export const IntuitiveTable = () => {
  /* 
  const [data, setData] = useState([]);
  //const columns = useMemo(() => columns, []);

  useEffect(() => {
    axios
      .get("/getCurrentPatients")
      .then((res) => {
        setData(res.data.data.currentPatients);
        console.log(res.data.data.currentPatients);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  */
  const data = useMemo(() => MOCK_DATA, []);
  //const columns = useMemo(() => columns, []);

  //only can used inside a function
  const columns = useMemo(() => INTUITIVECOLUMNS, []);

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

  // Create a function that will render our row sub components
  const renderRowSubComponent = React.useCallback(
    ({ row }) => (
      <pre
        style={{
          fontSize: "20px",
        }}
      >
        <code>
          Progress Bar
          <div>
            {" "}
            <CircularProgress />
          </div>
          Video
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
          </div>
          <Router>
            <div>
              <a href="/profile/:id">Profile</a>
            </div>
            <div>
              <Switch>
                <Route exact path="/profile/:id" component={profile} />
              </Switch>
            </div>
          </Router>
          {JSON.stringify({ values: row.values.id }, null, 2)}
        </code>
      </pre>
    ),
    []
  );
  /*
<>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()} renderRowSubComponent={renderRowSubComponent}>
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
      </table>
    </>
    */
  return (
    <Styles>
      <Table
        columns={columns}
        data={data}
        // We added this as a prop for our table component
        // Remember, this is not part of the React Table API,
        // it's merely a rendering option we created for
        // ourselves
        renderRowSubComponent={renderRowSubComponent}
      />
    </Styles>
  );
};
