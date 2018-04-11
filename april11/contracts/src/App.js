import React, { Component } from "react";
import ContractForm from "./ContractForm.js";
import ContractDisplay from "./ContractDisplay.js";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contracts: []
    };
  }

  addContract(contract) {
    let contracts = this.state.contracts;
    contracts.push(contract);
    this.setState({
      contracts: contracts
    });
  }

  render() {
    let contractArray = this.state.contracts.map(con => {
      return <ContractDisplay contract={con} />;
    });

    return (
      <div className="App">
        <ContractForm
          updateContracts={contract => this.addContract(contract)}
        />

        {contractArray}
      </div>
    );
  }
}

export default App;
