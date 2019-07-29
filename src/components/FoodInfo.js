import React, { Component } from "react";
import { InfoConsumer } from "./context";
import { Link } from "react-router-dom";

export default class FoodInfo extends Component {
    render() {
        const {
            _id,
            name,
            stall,
            description,
            image
        } = this.props.item;

        return (
            <InfoConsumer>
                {value => (
                    <div className="col-10 col-lg-4 mx-auto mb-5">
                        <div className="card" style={{ width: "18rem" }}>
                            <img
                                src={image}
                                alt={name}
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h3 className="card-title">{name}</h3>
                                <Link
                                    onClick={() => value.handleDetail(_id)}
                                    to={`/food/${name}`}
                                    className="btn btn-outline-info text-uppercase"
                                >
                                    More Info
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </InfoConsumer>
        );
    }
}
