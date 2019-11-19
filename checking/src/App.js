import React, { Component } from "react";
import "./Loading.css";
import Welcome from "./logo/Welcome";
import Design from "./logo/Design";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: true
    };
    setTimeout(() => {
      this.setState({ check: !this.state.check });
    }, 4000);
  }

  render() {
    const checked = this.state.check ? (
      <div className="loading">
        {/* <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div> */}
        <Design />
        {/* <span>Loading</span> */}
      </div>
    ) : (
      <Welcome />
    );

    return <div>{checked}</div>;
  }
}
