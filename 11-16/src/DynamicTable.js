import React, { Component } from "react";
import axios from "axios";
import { isThisHour } from "date-fns";

class DynamicTable extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      students: [
        { id: 1, name: "Wasif", age: 21, email: "wasif@email.com" },
        { id: 2, name: "Ali", age: 19, email: "ali@email.com" },
        { id: 3, name: "Saad", age: 16, email: "saad@email.com" },
        { id: 4, name: "Asad", age: 25, email: "asad@email.com" },
      ],
      posts: [],
      firstPostElement: [],
    };
    //this.posts = this.posts.bind(this);
  }
  componentDidMount() {
    axios
      .get("/getCurrentPatients")
      .then((response) => {
        console.log(response.data.data.currentPatients);
        this.setState({ posts: response.data.data.currentPatients });
        this.setState({
          firstPostElement: response.data.data.currentPatients[0],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  /*
  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, name, age, email } = student; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{email}</td>
        </tr>
      );
    });
  }
  */
  renderTableData() {
    return this.state.posts.map((student, index) => {
      const { id, firstName, lastName, age, email, bio, ptID } = student; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{age}</td>
          <td>{email}</td>
          <td>{bio}</td>
          <td>{ptID}</td>
        </tr>
      );
    });
  }
  renderTableHeader() {
    let header = Object.keys(this.state.firstPostElement);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return this.state.posts ? (
      <div>
        <h1 id="title">React Dynamic Table</h1>
        <table id="posts">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default DynamicTable; //exporting a component make it reusable and this is the beauty of react
