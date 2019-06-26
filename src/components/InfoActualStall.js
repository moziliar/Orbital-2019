import React, { Component } from "react";
import { InfoConsumer } from "./context";
import { Link } from "react-router-dom";

class Info extends Component {
    render() {
        const { id, headerTitle, stall, img } = this.props.item;

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
                                <h3 className="card-title">{stall}</h3>
                                <Link
                                    onClick={() => value.handleDetail(id)}
                                    to="/stalls"
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

export default Info;