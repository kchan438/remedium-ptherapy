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
