import React, { Component } from "react";

/* STATE:
    index: int, 0
*/

/* PROPS:
    quotes: [str]
*/

export default class QuoteGenerator extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  // other methods
  handleClick() {
    let newState = {};

    if (this.state.index < this.props.quotes.length - 1) {
      newState = {
        index: this.state.index + 1
      };
    } else {
      newState = {
        index: 0
      };
    }

    this.setState(newState);
  }

  // render
  render() {
    return (
      <p onClick={event => this.handleClick()}>
        {" "}
        {this.props.quotes[this.state.index]}{" "}
      </p>
    );
  }
}
