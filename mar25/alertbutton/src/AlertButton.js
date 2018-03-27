import React, { Component } from "react";

/* PROPS
  displayText: string
*/

/* STATE
  numClicks: int
*/

export default class AlertButton extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      numClicks: 0
    };
  }

  // other metohds
  handleClick() {
    alert("I was here!");
    this.setState({
      numClicks: this.state.numClicks + 1
    });
  }

  // render method
  render() {
    return (
      <div>
        <button onClick={event => this.handleClick()}>
          {" "}
          {this.props.displayText} ( {this.state.numClicks} ){" "}
        </button>
      </div>
    );
  }
}
