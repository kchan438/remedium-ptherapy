import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { useRefresh } from "react-tidy";

//import { FTmockData } from "../TableComponents/FTmockData";

import React, { useMemo, useState, useEffect } from "react";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
  useRowSelect,
} from "react-table";
import MOCK_DATA from "../TableComponents/MOCK_DATA.json";
import { COLUMNS } from "../TableComponents/columns";
import "../TableComponents/table.css";
import { GlobalFilter } from "../TableComponents/GlobalFilter";
import { Checkbox } from "../TableComponents/Checkbox";

function AssignmentForm() {
  const handleAdd = (newInput) => {
    setCount(newInput);
  };

  const [count, setCount] = useState();
  /*
  useEffect(() => {
    console.log("FTmockData.selectData:", FTmockData.selectData);
    setCount(FTmockData.selectData);
  });
  */

  //const videoOptions = <FTmockData />;
  const initialValues = {
    title: "",
    description: "",
    chosenVideo: count,
    startDate: null,
    endDate: null,
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    //chosenVideo: Yup.string().required("Required"),
    startDate: Yup.date().required("Required").nullable(),
    endDate: Yup.date().required("Required").nullable(),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FTmockData handleAdd={handleAdd} />
            <div>Video Added: {count}</div>
            <FormikControl control="input" label="Title" name="title" />
            <FormikControl
              control="textarea"
              label="Description"
              name="description"
            />
            <FormikControl control="date" label="Start Date" name="startDate" />
            <FormikControl control="date" label="End Date" name="endDate" />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

const FTmockData = ({ handleAdd }) => {
  const refresh = useRefresh();
  const [selectData, setselectData] = useState([]);
  console.log("uh below selectData", selectData);

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
    )
    //works and remove the [] at the bottom
    setselectData(
        JSON.stringify(selectedFlatRows.map((row) => row.original.email))
    );
    
    //I need to get this to work every rende

    setselectData(selectedFlatRows.map((row) => row.original.email));
*/
    /*
    
     JSON.parse(
      JSON.stringify(
        setselectData(selectedFlatRows.map((row) => row.original.email))
      )
    );
    /*
    setselectDatas(
      JSON.stringify(selectedFlatRows.map((row) => row.original.gender))
    )
    */
  }, []);

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
    state: { selectedRowIds },
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
          {JSON.stringify(
            {
              selectedRowIds: selectedRowIds,
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
      <button
        onClick={() =>
          setselectData(
            selectedFlatRows.map(
              (selectedFlatRow) => selectedFlatRow.original.email
            )
          )
        }
      >
        submit to add current checklisted Video
      </button>

      {console.log("check after setselectData:", selectData)}
      {handleAdd(selectData)}
      {/*
        <AssignmentForm check={selectData} />
        
      <button type="submit" check={selectData}>
        Submit
      </button>
      */}
    </>
  );
};

export default AssignmentForm;
