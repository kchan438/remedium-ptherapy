import React from "react";

import "./PageStyle.css";
import useChat from "../components/useChat";

const ChatRoom = (props) => {
  const { roomId } = props.match.params;
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = React.useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="home-container">
      <aside className="online-list-container">
        <p>
          Online Placeholder - Will List Available Online/Offline Chats Here
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