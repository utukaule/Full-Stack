import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      // Work of render
      // JSX to HTML copmilation
      // Then show HTML which is developed in JSX
      <div>
        <Navbar />
        <News />
      </div>
    );
  }
}
