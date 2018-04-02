import React, { Component } from "react";
import Pictures from "./Pictures";
import logo from "./logo.svg";
import "./App.css";

let pics1 = [
  {
    url: "https://i.imgur.com/E1S0xAC.jpg",
    title: "Excited Dog"
  },
  {
    url: "https://i.redd.it/ks4vuhowecp01.png",
    title: "Real Talk Though"
  },
  {
    url: "https://i.redd.it/4skcofasa1p01.png",
    title: "JavaScript Is Weird"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Pictures pictures={pics1} />
      </div>
    );
  }
}

export default App;
