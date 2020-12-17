import React, { useMemo, useState, useEffect } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

import axios from "axios";

import "./PageStyle.css";
import useChat from "../components/useChat";

const ChatRoom = (props) => {
  const { roomId } = props.match.params;
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = React.useState("");
  const [currentPatients, setCurrentPatients] = useState([]);

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
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

  const handleChangeChat = (idx) => {};

  return (
    <div className="home-container">
      <aside className="online-list-container">
        <p>
          Online Placeholder - Will List Available Online/Offline Chats Here
          {console.log("inside placeholder", currentPatients)}
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
        </p>
      </aside>
      <div className="chat-room-container">
        <h1 className="partner-name">Speaking With: {roomId}</h1>
        <div className="messages-container">
          <ol className="messages-list">
            {messages.map((message, i) => (
              <li
                key={i}
                className={`message-item ${
                  message.ownedByCurrentUser ? "my-message" : "received-message"
                }`}
              >
                {message.body}
              </li>
            ))}
          </ol>
        </div>
        <textarea
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder="Write message..."
          className="new-message-input-field"
        />
        <button onClick={handleSendMessage} className="send-message-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
