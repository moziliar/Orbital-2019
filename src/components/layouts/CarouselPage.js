import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselPage = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="{{site.url}}/images/800x400.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="text-dark">First slide label</h3>
                    <p className="text-dark">
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="{{site.url}}/images/800x400.png"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className="text-dark">Second slide label</h3>
                    <p className="text-dark">
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="{{site.url}}/images/800x400.png"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className="text-dark">Third slide label</h3>
                    <p className="text-dark">
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselPage;
