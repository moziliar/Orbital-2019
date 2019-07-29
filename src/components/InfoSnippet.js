import React, { Component } from "react";
import { InfoConsumer } from "./context";
import { Route, Link } from "react-router-dom";
import Stalls from "./pages/Stalls";

export default class InfoSnippet extends Component {
    render() {
        const { name, image } = this.props.item;

        return (
            <div>
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
                                className="btn btn-outline-info text-uppercase"
                                to={`/stalls/${name}/`}
                            >
                                View Stalls
                            </Link>
                        </div>
                    </div>
                </div>
                <Route path={'/canteens/:handle'} component={ Stalls } />
            </div>
        );
    }
}
