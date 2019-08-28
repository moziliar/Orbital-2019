import React, { Component } from "react";
import CarouselPage from "../layouts/CarouselPage";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { InfoConsumer } from "../context";
import { Button } from "mdbreact";
import PopUp from "../../Search/components/PopUp";

class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            annouceShow: false,
            bestFoodShow: false
        };
    }

    handleHide() {
        this.setState({
            bestFoodShow: false
        });
    }

    render() {
        let annouceClose = () => this.setState({ annouceShow: false });
        return (
            <div className="container">
                <Modal
                    size="lg"
                    show={this.state.annouceShow}
                    onHide={annouceClose}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Annoucement
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        The Terrace will be under renovatation until 2020
                        December. The nearest canteen to go to will be Deck
                        which is located..
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7997364514954!2d103.77027041744384!3d1.2946987000000207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1af925555555%3A0xfbff55e2017b1965!2sThe+Deck!5e0!3m2!1sen!2ssg!4v1561538570067!5m2!1sen!2ssg"
                            width="770"
                            height="450"
                        />
                    </Modal.Body>
                </Modal>

                <CarouselPage />
                <div className="row mt-5">
                    <div className="col-10 col-lg-4 mb-5 mx-auto">
                        <div className="card" syle={{ width: "18rem" }}>
                            <img
                                src=".././images/home/terrace.jpg"
                                alt="testing"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h4 className="card-title">Annoucement</h4>
                                <p className="card-text">
                                    The Terrace will be under renovatation until
                                    2020 December...
                                </p>
                                <Link
                                    onClick={() =>
                                        this.setState({ annouceShow: true })
                                    }
                                    className="btn btn-outline-info text-uppercase"
                                >
                                    More Info
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-10 col-lg-4 mb-5 mx-auto">
                        <div className="card" syle={{ width: "18rem" }}>
                            <img
                                src=".././images/home/ayampenyet.jpg"
                                alt="testing"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h4 className="card-title">
                                    Top Food of the Month
                                </h4>
                                <p className="card-text">
                                    The famous Ayam Penyet has crowned top food
                                    again this month. Do drop by at Frontier to
                                    enjoy this delicious Indonesian cuisine when
                                    you are near Science.
                                </p>
                                <PopUp show={this.state.bestFoodShow} handleHide={this.handleHide.bind(this)}/>
                                <InfoConsumer>
                                    {value =>
                                        <Button
                                            className="btn btn-outline-info text-uppercase"
                                             onClick={() => {
                                            value.handleDetail(value.bestFood._id);
                                            this.setState({ bestFoodShow: true })
                                            }}
                                        >
                                            More Info
                                        </Button>
                                    }
                                </InfoConsumer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
