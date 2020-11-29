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

import { DateRange, DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

var data = PEOPLE_MOCK_DATA;

const getPatientById = (id) => {
  return data.filter((patient) => {
    return patient.id.toString() === id;
  });
};

function AssignPage(props) {
  console.log("props from assignPage: ", props);
  const patient = getPatientById(props.match.params.id);

  console.log("checking stored patient: ", patient);

  const videos = VIDEOS_MOCK_DATA;
  //const [countries, setCountries] = useState([]);
  //const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredVideos, setFilteredVideos] = useState([]);

  /*
    useEffect(() => {
      setLoading(true);
      axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((res) => {
          setCountries(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    */

  useEffect(() => {
    setFilteredVideos(
      videos.filter((video) =>
        video.exercise.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, videos]);

  /*
    if (loading) {
      return <p>Loading countries...</p>;
    }
    */

  const videoDetail = (props) => {
    const { name, flag } = props;
    return (
      <>
        <p>
          <img
            src={flag}
            alt={name}
            style={{ width: "20px", height: "20px" }}
          />
        </p>
        <p>{name}</p>
      </>
    );
  };

  /*
    const [state, setState] = useState([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: "selection",
      },
    ]);
    */
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const initialValues = {
    title: "",
    description: "",
    checked: [],
    start_Date: state[0].startDate,
    end_Date: state[0].endDate,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    //checked: Yup.string().required("Required"),
    //start_Date: Yup.date().required("Required").nullable(),
    //end_Date: Yup.date().required("Required").nullable(),
  });

  console.log("state: ", state);
  console.log("state.startDate: ", state[0].startDate);
  console.log("state.endDate: ", state[0].endDate);

  const onSubmit = async (values) => {
    await sleep(500);
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>
        Video Assignment Page for{" "}
        {patient[0].first_name + " " + patient[0].last_name}
      </h1> */}
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
                paddingTop: "5px",
                //backgroundColor: "#cfe8fc",
                height: "800px",
                border: "2px solid grey",
                borderRadius: "5px",
                overflow: "auto",
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
                  <ReactPlayer
                    url={value.video}
                    width="400px"
                    height="200px
"
                  />
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
    </>
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
