import React, { Component } from "react";
import NavTop from "./NavTop.js";
import ModalButton from "./ModalButton.js";
import Body from "./Body.js";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavTop />
        <Body />
        <ModalButton />
      </div>
    );
  }
}

export default App;
