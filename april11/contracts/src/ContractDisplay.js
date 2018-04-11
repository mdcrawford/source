import React, { Component } from "react";

/* PROPS
  contract: obj, has fields "name", "details", and "company"
*/

export default class ContractDisplay extends Component {
  render() {
    let { contract } = this.props;
    return (
      <div>
        <h6> Name: </h6>
        <p> {contract.name} </p>

        <h6> Company: </h6>
        <p> {contract.company} </p>

        <h6> Details: </h6>
        <p> {contract.details} </p>
      </div>
    );
  }
}
