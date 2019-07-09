import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

class Contacts extends Component {
    render() {
        return (
            <div className="container">
                <Card className="text-center mt-5 border-info">
                    <Card.Header className="bg-info text-light font-weight-bold">
                        About Us
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                            Where are the Foodies come together.
                        </Card.Title>
                        <Card.Text>
                            To make NUS a food heaven for the public
                        </Card.Text>
                    </Card.Body>
                </Card>

                <img
                    className="d-block w-80 mt-5 image-center mx-auto"
                    src=".././images/about/nus.jpg"
                    alt="NUS"
                />

                <Card className="mt-5 mb-5">
                    <Card.Header className="bg-info text-light font-weight-bold">
                        What we hope to achieve..
                    </Card.Header>
                    <CardGroup>
                        <Card className="border-info">
                            <Card.Img
                                className="border"
                                variant="top"
                                src=".././images/about/location.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Locations</Card.Title>
                                <Card.Text>
                                    To allow freshies and the public who are new
                                    to NUS to be able to track the nearest
                                    canteen or find the canteen they desire to
                                    go.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted" />
                            </Card.Footer>
                        </Card>
                        <Card className="border-info">
                            <Card.Img
                                className="border"
                                variant="top"
                                src=".././images/about/review.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Reviews</Card.Title>
                                <Card.Text>
                                    To allow the stall owners to improve on
                                    their food by looking at the constructives
                                    reviews given the the foodies community.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted" />
                            </Card.Footer>
                        </Card>
                        <Card className="border-info">
                            <Card.Img
                                className="border"
                                variant="top"
                                src=".././images/about/community.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Foodies Community</Card.Title>
                                <Card.Text>
                                    To build a foodies heaven for all food
                                    lovers who like to improve the food quality
                                    in NUS.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted" />
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Card>
            </div>
        );
    }
}

export default Contacts;
