import React, { Component } from "react";
import { InfoConsumer } from "./context";
import { Link } from "react-router-dom";

export default class StallInfo extends Component {
    render() {
        const { _id, name, image } = this.props.item;

        return (
            <InfoConsumer>
                {value => (
                    <div className="col-10 col-lg-4 mb-3">
                        <div className="card" syle={{ width: "18rem" }}>
                            <img
                                src={image}
                                alt={name}
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h3 className="card-title">{name}</h3>
                                <Link
                                    to={`/stall/${name}`}
                                    className="btn btn-outline-info text-uppercase"
                                >
                                    View Foods
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </InfoConsumer>
        );
    }
}
