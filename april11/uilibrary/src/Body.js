import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";

export default class Body extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Hello, Source!</h1>
        <p>
          I'm making use of the react-bootstrap library to show off some (kinda)
          stylish things!!
        </p>
        <p>
          <Button bsStyle="primary">Does Nothing!!</Button>
        </p>
      </Jumbotron>
    );
  }
}
