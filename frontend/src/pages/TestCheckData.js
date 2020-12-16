import React, { Component } from "react";
import axios from "axios";

class TestCheckData extends Component {
  state = {
    progressData: [],
  };
  componentDidMount() {
    axios.get("/getAssignedPlans").then((res) => {
      console.log(res);

      this.setState({ progressData: res.data.data.getVideos });
    });
  }
  /*
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      this.setState({ data: res.data });
    });
  }
  */

  render() {
    return (
      <ul>
        {" "}
        {this.state.progressData.map((value) => (
          <li>
            {"Patient_ID: " + value.Patient_ID}
            <br />
            {"description: " + value.description}
            <br />
            {"title: " + value.title}
            <br />
            {"assignstartdate: " + value.assignstartdate}
            <br />
            {"assignedenddate: " + value.assignedenddate}
            <br />
            {"checked: " + value.checked}
            <br />
          </li>
        ))}
      </ul>
    );
    /*
        {this.state.data.map((value) => {
          console.log(value);
        })}
        */
  }
}

export default TestCheckData;
