/*
import React from "react";
import styled from "styled-components";
import { useTable, useExpanded } from "react-table";
import axios from "axios";
import { useMemo, useState, useEffect } from "react";

import makeData from "./components/makeData";

import { Styles } from "./TEtable";
import Table from "./TEtable";

function App() {
  const [data, setData] = useState([]);
  //const columns = useMemo(() => COLUMNS, []);

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

  //only can used inside a function
  const COLUMNS = React.useMemo(
    () => [
      {
        // Make an expander cell
        Header: () => null, // No header
        id: "expander", // It needs an ID
        Cell: ({ row }) => (
          // Use Cell to render an expander for each row.
          // We can use the getToggleRowExpandedProps prop-getter
          // to build the expander.
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? "[Close]" : "-View-"}
          </span>
        ),
      },
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
          },
          {
            Header: "Bio",
            accessor: "bio",
          },
          {
            Header: "Email",
            accessor: "email",
          },
          {
            Header: "ptID",
            accessor: "ptID",
          },
        ],
      },
    ],
    []
  );

  // Create a function that will render our row sub components
  const renderRowSubComponent = React.useCallback(
    ({ row }) => (
      <pre
        style={{
          fontSize: "20px",
        }}
      >
        <code>{JSON.stringify({ values: row.values }, null, 2)}</code>
      </pre>
    ),
    []
  );

  return (
    <Styles>
      <Table
        columns={COLUMNS}
        data={data}
        // We added this as a prop for our table component
        // Remember, this is not part of the React Table API,
        // it's merely a rendering option we created for
        // ourselves
        renderRowSubComponent={renderRowSubComponent}
      />
    </Styles>
  );
}

export default App;
*/

import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./HeaderPages/Home";
import MyPatients from "./HeaderPages/MyPatients";
import UploadContent from "./HeaderPages/UploadContent";
import Notifications from "./HeaderPages/Notifications";
import LoginRegister from "./HeaderPages/LoginRegister";
import Profile from "./HeaderPages/Profile";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mypatients" component={MyPatients} />
        <Route exact path="/uploadcontent" component={UploadContent} />
        <Route exact path="/notifications" component={Notifications} />
        <Route exact path="/loginregister" component={LoginRegister} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/profile/:id" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
