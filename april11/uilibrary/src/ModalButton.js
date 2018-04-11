import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class ModalButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  updateVisibility() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.updateVisibility()}> Show Modal! </Button>
        <Modal show={this.state.showModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h4>Welcome to my Modal</h4>
            <p>Hello there!</p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={() => this.updateVisibility()}> Close </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
