import React, { Component } from "react";
import CarouselPage from "../layouts/CarouselPage";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="container">
                <CarouselPage />
                <div className="row mt-5">
                    <div className="col-10 col-lg-4 mb-5 mx-auto">
                        <div className="card" syle={{ width: "18rem" }}>
                            <img
                                src=".././images/800x400.png"
                                alt="testing"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h4 className="card-title">Annoucement</h4>
                                <p className="card-text">
                                    "Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Odit laboriosam cum
                                    recusandae quas? Natus, alias architecto
                                    error, sunt quae non placeat a eius minus
                                    maiores libero laborum perferendis, nobis
                                    qui?"
                                </p>
                                <Link className="btn btn-outline-info text-uppercase">
                                    More Info
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-10 col-lg-4 mb-5 mx-auto">
                        <div className="card" syle={{ width: "18rem" }}>
                            <img
                                src=".././images/800x400.png"
                                alt="testing"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h4 className="card-title">
                                    Top food of the Month
                                </h4>
                                <p className="card-text">
                                    "Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Odit laboriosam cum
                                    recusandae quas? Natus, alias architecto
                                    error, sunt quae non placeat a eius minus
                                    maiores libero laborum perferendis, nobis
                                    qui?"
                                </p>
                                <Link className="btn btn-outline-info text-uppercase">
                                    More Info
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
