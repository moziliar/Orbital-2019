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
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to
                            additional content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <img
                    className="d-block w-80 mt-5 image-center mx-auto"
                    src=".././images/800x400.png"
                    alt="First slide"
                />

                <Card className="mt-5 mb-5">
                    <Card.Header className="bg-info text-light font-weight-bold">
                        What we hope to achieve..
                    </Card.Header>
                    <CardGroup>
                        <Card className="border-info">
                            <Card.Img
                                variant="top"
                                src=".././images/800x400.png"
                            />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </Card.Footer>
                        </Card>
                        <Card className="border-info">
                            <Card.Img
                                variant="top"
                                src=".././images/800x400.png"
                            />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a
                                    natural lead-in to additional content.{" "}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </Card.Footer>
                        </Card>
                        <Card className="border-info">
                            <Card.Img
                                variant="top"
                                src=".././images/800x400.png"
                            />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This card has even longer content
                                    than the first to show that equal height
                                    action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Card>
            </div>
        );
    }
}

export default Contacts;
