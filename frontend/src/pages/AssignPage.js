import React, { useMemo, useState, useEffect } from "react";
// import '../AssignPage/AssignPage.css';
import { Row, Col, Button, Dropdown /*,Form*/ } from "react-bootstrap";

//Components
//import { Box } from "../components/Box/Box.js";
//import { DescriptionBox } from "../components/DescriptionBox/DescriptionBox.js";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
import PEOPLE_MOCK_DATA from "../components/PEOPLE_MOCK_DATA";

import { Formik, Field, Form } from "formik";
import VIDEOS_MOCK_DATA from "../components/Formik/VIDEOS_MOCK_DATA";
import ReactPlayer from "react-player";
import * as Yup from "yup";
import FormikControl from "../components/Formik/FormikControl";
import PATIENT_PROGRESS from "../components/PATIENT_PROGRESS.json";
import axios from "axios";

import { DateRange, DateRangePicker } from "react-date-range";
import "../pages/PageStyle.css"; //for background and some text

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

//var data = PEOPLE_MOCK_DATA;
//const writeJsonFile = require("write-json-file");

const getPatientById = (id, patients) => {
  console.log("999CHECKING patients: ", patients);
  return patients.filter((patient) => {
    return patient.User_ID.toString() === id;
  });
};

function AssignPage(props) {
  console.log("props from assignPage: ", props);
  //const patient = getPatientById(props.match.params.id);

  //console.log("checking stored patient: ", patient);

  const videos = VIDEOS_MOCK_DATA;

  const [search, setSearch] = useState("");
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [currentPatients, setCurrentPatients] = useState([]);
  /*
  const [selectedPatients, setSelectedPatients] = getPatientById(
    this.props.match.params.id,
    this.state.currentPatients
  );
  const [selectedBio, setSelectedBio] = useState("");
  const [selectedFirstName, setSelectedFirstName] = useState("");
  const [selectedLastName, setSelectedLastName] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedRegistration_Date, setSelectedRegistration_Date] = useState("");
  const [selectedID, setSelectedID] = useState("");
  /*
    useEffect(() => {
      axios
        .get("/getAssignedPlans")
        .then((res) => {
          setCountries(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    */
  useEffect(() => {
    axios.get("/getCurrentPatients").then((res) => {
      console.log("/getCurrentPatients res:", res);
      console.log(
        "/getCurrentPatients  res.data.data.currentPatients:",
        res.data.data.currentPatients
      );
      setCurrentPatients(res.data.data.currentPatients);
      console.log(
        "CONTINUED/getCurrentPatients  currentPatients:",
        currentPatients
      );
    });
  }, []);
  useEffect(() => {
    setFilteredVideos(
      videos.filter((video) =>
        video.exercise.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, videos]);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const initialValues = {
    description: "",
    title: "",
    Patient_ID: props.match.params.id,
    assignstartdate: state[0].startDate,
    activitytimestamp: new Date(),
    assignenddate: state[0].endDate,
    checked: [],
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    //checked: Yup.string().required("Required"),
    //assignstartdate: Yup.date().required("Required").nullable(),
    //assignenddate: Yup.date().required("Required").nullable(),
  });

  console.log("state: ", state);
  console.log("state.startDate: ", state[0].startDate);
  console.log("state.endDate: ", state[0].endDate);

  const onSubmit = async (values) => {
    let myJSON = JSON.stringify(values);
    await sleep(500);
    console.log("onSubmit values: ", values);
    console.log("onSubmit values.description: ", values.description);

    console.log("onSubmit JSON values: ", JSON.stringify(values));
    console.log("var myJSON: ", myJSON);

    alert(JSON.stringify(values, null, 2));
    axios
      .post("/exercisePlanAssignment", {
        description: values.description,
        title: values.title,
        Patient_ID: values.Patient_ID,
        assignstartdate: values.assignstartdate,
        assignenddate: values.assignenddate,
        checked: values.checked,
        activitytimestamp: values.activitytimestamp,
      })
      .then((response) => {
        console.log("onSubmit response: ", response);
      })
      .catch((error) => {
        console.log("onSubmit error: ", error);
      });
  };

  return (
    <div className="page-background">
      <h1 style={{ textAlign: "center", color: "Silver" }}>
        Video Assignment Page for Patient {props.match.params.id}
      </h1>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values }) => (
          <Form style={{ display: "flex" }}>
            <Col></Col>

            <Grid
              container
              spacing={0}
              justify="center"
              alignItems="center"
              style={{
                width: "400px",
                paddingTop: "5px",
                //backgroundColor: "#cfe8fc",
                height: "50vh",
                border: "2px solid grey",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <h2>Choose Date</h2>
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
              />
            </Grid>
            <Col></Col>

            <Grid
              container
              spacing={0}
              justify="center"
              alignItems="center"
              style={{
                width: "500px",
                paddingTop: "5px",
                //backgroundColor: "#cfe8fc",
                height: "50vh",
                border: "2px solid grey",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <FormikControl control="input" label="Title" name="title" />
              <FormikControl
                control="textarea"
                label="Description"
                name="description"
              />
              <button type="submit">Submit</button>
            </Grid>
            <Col></Col>

            {/*<DateRangePicker
                onChange={(item) => setState([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={state}
                direction="horizontal"
              />
              */}
            {/*
            <DatePickerRange />
          
            <FormikControl control="date" label="Start Date" name="startDate" />
            <FormikControl control="date" label="End Date" name="endDate" />
            
            */}

            <Grid
              container
              spacing={0}
              justify="center"
              alignItems="center"
              style={{
                width: "600px",
                minWidth: "500px",

                paddingTop: "5px",
                //backgroundColor: "#cfe8fc",
                height: "800px",
                border: "2px solid grey",
                borderRadius: "5px",
                overflow: "auto",
                backgroundColor: "white",
              }}
            >
              <h1>Videos</h1>
              <p></p>
              <input
                type="text"
                placeholder="Search video"
                onChange={(e) => setSearch(e.target.value)}
              />

              {filteredVideos.map((value, idx) => (
                <label>
                  <Field type="checkbox" name="checked" value={value.video} />
                  {value.exercise}
                  {
                    <ReactPlayer
                      controls={true}
                      url={value.video}
                      width="400px"
                      height="200px"
                    />
                  }
                </label>
              ))}
            </Grid>
            <Col></Col>

            {/*
              <div id="checkbox-group">Checked</div>
              <div role="group" aria-labelledby="checkbox-group">
                <ul>
                  {VIDEOS_MOCK_DATA.map((value, index) => {
                    return (
                      <label>
                        <Field
                          type="checkbox"
                          name="checked"
                          value={value.video}
                        />
                        {value.exercise}
                        <>
                          <ReactPlayer url={value.video} />
                        </>
                      </label>
                    );
                  })}
                </ul>
              </div>
              */}
          </Form>
        )}
      </Formik>
    </div>
  );
}
/*
  
const addButton = () => {
  return <Button variant="success">test</Button>;
};

const AssignPage = () => {
  return (
    <>

     
      <Row>
        
        <Col></Col>
        <Col>
          <Dropdown className="mt-2">
            <Dropdown.Toggle variant="info" id="dropdown-basic">
              Search Filter
            </Dropdown.Toggle>

            <Dropdown.Menu className="mt-2">
              <Dropdown.Item href="#/action-1">User</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Therapist</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Content</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="mt-1">
          <Form style={{ width: "750px", paddingTop: "5px" }}>
            <Form.Control
              type="text"
              placeholder="Search Bar"
              style={{ textAlign: "center" }}
            />
          </Form>
        </Col>
        <Col className="mt-2">
          <Button variant="success" style={{ paddingBottom: "10px" }}>
            Search
          </Button>
        </Col>
          
      </Row>
      <br></br>
      <Row>
        <Col>
          <Box
            style={{ width: "100%" }}
            text="List of Selected Videos For Assignment"
          />
        </Col>
        <Col>
          <Box style={{ width: "100%" }} text="List Of Videos To Assign" />
        </Col>
        <Col>
          <DescriptionBox
            style={{ height: "100%" }}
            text="Small Preview Video Selected"
          />
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col>
          <br></br>
          <div style={{ marginLeft: "26%" }}>
            <Button variant="danger" className="ml-5" size="md">
              Back To Profile
            </Button>
            <Button variant="success" className="ml-2" size="md">
              Assign
            </Button>
          </div>
        </Col>
      </Row>
      
    </>
  );
};
*/

export default withRouter(AssignPage);
