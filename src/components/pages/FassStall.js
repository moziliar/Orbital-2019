import React, { Component } from "react";
import { InfoConsumer } from "../context";
import FassFishballInfo from "../FassFishballInfo";

class FassStall extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="mt-3">Stalls</h3>
                <div className="row mt-3">
                    <InfoConsumer>
                        {value => {
                            return value.fassStall.map(item => {
                                return (
                                    <FassFishballInfo
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

export default FassStall;
