import React, { Component } from "react";
import { InfoConsumer } from "../context";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Stalls from "./Stalls";
import Info from "./Info";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Location from "./Location";

class Canteens extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <InfoConsumer>
                        {value => {
                            return value.faculty.map(fac => {
                                return (
                                    <Info faculty={fac} />
                                );
                            });
                        }}
                    </InfoConsumer>
                </div>
            </div>
        );
    }
}

export default Canteens;
