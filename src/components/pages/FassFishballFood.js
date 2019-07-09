import React, { Component } from "react";
import { InfoConsumer } from "../context";
import FassFoodInfo from "../FassFoodInfo";

class FassFishballFood extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <InfoConsumer>
                        {value => {
                            return value.info2.map(item2 => {
                                return (
                                    <FassFoodInfo
                                        key={item2.id}
                                        item2={item2}
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

export default FassFishballFood;