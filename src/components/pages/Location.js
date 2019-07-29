import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

export default function Location(props) {
    return (
        <div>
            <Modal
                size="lg"
                show={props.show}
                onHide={props.onClose}
                aria-labelledby="example-modal-sizes-title-lg"
            >   
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Location
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe
                        src={props.location}
                        width="770"
                        height="450"
                    />
                </Modal.Body>
            </Modal>
        </div>
    );
}
