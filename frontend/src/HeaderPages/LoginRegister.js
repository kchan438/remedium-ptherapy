/*
import React, { Component } from "react";

class LoginRegister extends Component {
  render() {
    return (
      <div>
        <h2> This is our login/Register Page! </h2>
      </div>
    );
  }
}
export default LoginRegister;
*/

import React, { useState } from "react";
import Axios from "axios";

function LoginRegister() {
  const [usernameReg, setUsernameReg] = useState("");
  const [paswordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [pasword, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const register = () => {
    Axios.post("http://localhost3001/register", {
      username: usernameReg,
      password: paswordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost3001/login", {
      username: username,
      password: pasword,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(console.log(response));
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  return (
    <div className="LoginRegister">
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick={register}> Register </button>
      </div>

      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}> Login </button>
      </div>

      <h1>CurrentUser:</h1>
      <h1>{loginStatus}</h1>
    </div>
  );
}
export default LoginRegister;
