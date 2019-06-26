import React, { Component } from "react";
import { InfoConsumer } from "./context";
import { Link } from "react-router-dom";

class Info2 extends Component {
    render() {
        const {
            id,
            headerTitle,
            headerSubtitle,
            headerText,
            img
        } = this.props.item2;

        return (
            <InfoConsumer>
                {value => (
                    <div className="col-10 col-lg-4 mb-3">
                        <div className="card" syle={{ width: "18rem" }}>
                            <img
                                src={img}
                                alt={headerTitle}
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h3 className="card-title">{headerTitle}</h3>
                                <Link
                                    onClick={() => value.handleDetail2(id)}
                                    to="/stalls2"
                                    className="btn btn-outline-info text-uppercase"
                                >
                                    More Stalls
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </InfoConsumer>
        );
    }
}

export default Info2;
