import React from "react";
import style from "./PageStyle.css";
import Card from "../components/PatientCard";
import Carousel from "../components/PatientCardholder";
import SearchBar from "../components/PatientSearchBar";

function PatientsPage(props) {
  return (
    <div className="page-background">
      <div>
        <center>
          <SearchBar />
          <p className="header-text">My Patients</p>
        </center>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
}

export default PatientsPage;
