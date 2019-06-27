import React, { Component } from "react";

class Modal extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            scienceShow: false,
            fassShow: false
        };
    }
    render() {
        let scienceClose = () => this.setState({ scienceShow: false });
        let fassClose = () => this.setState({ fassShow: false });
        return (
            <div>
                <Modal
                    size="lg"
                    show={this.state.scienceShow}
                    onHide={scienceClose}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Location
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5691.965642731867!2d103.77773491402935!3d1.2958058252296165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a50d2a84f95%3A0x10368845ce4e2bb0!2sNUS+Science+Canteen+(Frontier)!5e0!3m2!1sen!2ssg!4v1561537467347!5m2!1sen!2ssg"
                            width="770"
                            height="450"
                        />
                    </Modal.Body>
                </Modal>

                <Modal
                    size="lg"
                    show={this.state.fassShow}
                    onHide={fassClose}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Location
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7997364514954!2d103.77027041744384!3d1.2946987000000207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1af925555555%3A0xfbff55e2017b1965!2sThe+Deck!5e0!3m2!1sen!2ssg!4v1561538570067!5m2!1sen!2ssg"
                            width="770"
                            height="450"
                        />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default Modal;
