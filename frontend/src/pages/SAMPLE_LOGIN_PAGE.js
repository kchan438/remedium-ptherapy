import React from 'react';
import {Link} from 'react-router-dom';

const Join = () => {
    //const [name, setName] = useState("");
    const [roomName, setRoomName] = React.useState("");

    const handleRoomNameChange = (event) => {
        setRoomName(event.target.value);
    };

    // in practice, these two variables need to be queried from database on login auth
    //'name' is for checking the user sending the message
    //'room' is used to determine a specific chatroom between two users
    return (
        <div className="home-container">
          <input
            type="text"
            placeholder="Room"
            value={roomName}
            onChange={handleRoomNameChange}
            className="text-input-field"
          />
          <Link to={`/home:${roomName}`} className="enter-room-button">
            Join room
          </Link>
        </div>
      );
    };

export default Join;