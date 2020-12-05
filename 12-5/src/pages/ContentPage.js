import React, { useMemo, useState, useEffect } from "react";
import { Row, Col, Form, Button, Dropdown } from "react-bootstrap";

import style from "./PageStyle.css";
import Card from "../components/ContentCard";
import Carousel from "../components/ContentCardHolder";
import SearchBar from "../components/ContentSearchBar";

import VIDEOS_MOCK_DATA from "../components/Formik/VIDEOS_MOCK_DATA";
import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";
/*
  Resource: https://www.youtube.com/playlist?list=PLQSMS0J6JbrKdSOSbyJXaQ_zN_HSSp7zZ
*/

function ContentPage(props) {
  const videos = VIDEOS_MOCK_DATA;
  const [search, setSearch] = useState("");
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    setFilteredVideos(
      videos.filter((video) =>
        video.exercise.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, videos]);
  return (
    <div className="page-background">
      <h1 className="title-text">My Content</h1>
      <Grid container spacing={0} justify="center" alignItems="center">
        <input
          type="text"
          placeholder="Search Content"
          onChange={(e) => setSearch(e.target.value)}
        />

        {filteredVideos.map((value, idx) => (
          <Grid>
            {value.exercise}
            <ReactPlayer
              controls={true}
              url={value.video}
              width="400px"
              height="200px"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
/*
function ContentPage(props){

    return(
        <div>
            <div>
                <center>
                <SearchBar />
                <p className="header-text">My Content</p>
                </center>
            </div>
            <div>
                <Carousel />
            </div>
        </div>
    );
}
*/

export default ContentPage;
