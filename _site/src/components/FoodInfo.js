import React, { Component } from "react";
import { InfoConsumer } from "./context";
import { Link } from "react-router-dom";

class FoodInfo extends Component {
    render() {
        const {
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            img
        } = this.props.item;

        return (
            <InfoConsumer>
                {value => (
                    <div className="col-10 col-lg-4 mx-auto mb-5">
                        <div className="card" style={{ width: "18rem" }}>
                            <img
                                src={img}
                                alt={headerTitle}
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h3 className="card-title">{headerTitle}</h3>
                                <Link
                                    onClick={() => value.handleDetail(id)}
                                    to="/fooddetails"
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

export default FoodInfo;
