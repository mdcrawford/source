import React, { Component } from "react";

/* PROPS
  updateContracts: function, adds the current contract data to the array of contracts managed in parent
*/

export default class ContractForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contractName: "",
      contractDetails: "",
      contractCompany: ""
    };
  }

  updateField(field, val) {
    this.setState({
      [field]: val
    });
  }

  onClickSubmit() {
    // first, we check if any of the fields are empty
    if (
      this.state.contractName &&
      this.state.contractCompany &&
      this.state.contractDetails
    ) {
      this.props.updateContracts({
        name: this.state.contractName,
        details: this.state.contractDetails,
        company: this.state.contractCompany
      });
    } else {
      alert("Please fill out all the fields.");
    }
  }

  render() {
    return (
      <div>
        <p> Name: </p>
        <input
          value={this.state.contractName}
          onChange={e => this.updateField("contractName", e.target.value)}
        />

        <p> Company: </p>
        <input
          value={this.state.contractCompany}
          onChange={e => this.updateField("contractCompany", e.target.value)}
        />

        <p> Details: </p>
        <input
          value={this.state.contractDetails}
          onChange={e => this.updateField("contractDetails", e.target.value)}
        />

        <button onClick={() => this.onClickSubmit()}> Add Contract </button>
      </div>
    );
  }
}
