import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselPage = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src=".././images/home/slide1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="text-light">Welcome to Foodastic</h3>
                    <p className="text-light">
                        Where we showcase the foods in NUS.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src=".././images/home/slide2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className="text-light">Food</h3>
                    <p className="text-light">
                        You can find the best food in NUS.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src=".././images/home/slide3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className="text-light">Community</h3>
                    <p className="text-light">
                        And all the foodies gathered together.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselPage;
