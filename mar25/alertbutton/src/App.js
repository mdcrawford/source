import React, { Component } from "react";
import logo from "./logo.svg";
import AlertButton from "./AlertButton.js";
import QuoteGenerator from "./QuoteGenerator.js";
import "./App.css";

class App extends Component {
  render() {
    let display = "Fuck Dat Sheeeeet";
    let quoteArray = ["first", "second", "third"];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <AlertButton displayText={display} />
        <QuoteGenerator quotes={quoteArray} />
      </div>
    );
  }
}

export default App;
