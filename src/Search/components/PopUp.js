import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import FoodDetails from "../.././components/pages/FoodDetails"

class PopUp extends Component {

    render() {
        return (
            <Modal
                size="lg"
                show={this.props.show}
                onHide={this.props.handleHide}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        More Info
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FoodDetails />
                </Modal.Body>
            </Modal>
        );
    }
}

export default PopUp;
