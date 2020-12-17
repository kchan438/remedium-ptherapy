import React, { useMemo, useState, useEffect } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

import axios from "axios";

import { Link } from "react-router-dom";

const Join = () => {
  //const [name, setName] = useState("");
  const [roomName, setRoomName] = React.useState("");
  const [currentPatients, setCurrentPatients] = useState([]);

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };
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

  // in practice, these two variables need to be queried from database on login auth
  //'name' is for checking the user sending the message
  //'room' is used to determine a specific chatroom between two users
  return (
    <div
      className="home-container"
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        height: "25vh",

        whiteSpace: "pre-wrap",
      }}
    >
      {/*
      <input
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
      />
      */}

      <h1>Hello PropTypes.node,, who do you like to speak with?</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          whiteSpace: "pre-wrap",
        }}
      >
        {console.log("currentPatients", currentPatients)}

        {currentPatients.map((patient, idx) => (
          <div>
            <Button
              href={"/home:" + patient.first_Name + " " + patient.last_Name}
            >
              {idx} {patient.first_Name} {patient.last_Name}
            </Button>
            <br />
            {/*
              <button onClick={handleChangeChat(idx)}>
                {idx} {patient.first_Name} {patient.last_Name}
              </button>
              */}
            {console.log("patient.first_Name", patient.first_Name)}
            {console.log("patient.last_Name", patient.last_Name)}
          </div>
        ))}
      </div>

      {/*
          <Link to={`/home:${roomName}`} className="enter-room-button">
            Join room
          </Link>
          */}
    </div>
  );
};

export default Join;
