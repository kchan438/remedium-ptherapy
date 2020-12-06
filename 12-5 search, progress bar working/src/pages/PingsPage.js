import React from "react";
import style from "./PageStyle.css";
import Card from "../components/PatientCard";
import Carousel from "../components/PingsCardHolder";
import SearchBar from "../components/PingsSearchBar";

function ContentPage(props) {
  return (
    <div className="page-background">
      <div>
        <center>
          <SearchBar />
          <p className="header-text">My Pings</p>
        </center>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
}

export default ContentPage;
