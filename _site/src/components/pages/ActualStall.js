import React, { Component } from "react";
import { InfoConsumer } from "../context";
import Info from "../Info";
import InfoActualStall from "../InfoActualStall";
import Info2 from "../Info2";
import Button from "react-bootstrap/Button";

class ActualStall extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="mt-3">Stalls</h3>
                <div className="row mt-3">
                    <InfoConsumer>
                        {value => {
                            return value.scienceStall.map(item => {
                                return (
                                    <InfoActualStall
                                        key={item.id}
                                        item={item}
                                    />
                                );
                            });
                        }}
                    </InfoConsumer>
                </div>
            </div>
        );
    }
}

export default ActualStall;
