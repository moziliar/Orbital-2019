import React, { Component } from "react";
import { InfoConsumer } from "../context";
import FoodInfo from "../FoodInfo";
import FoodInfo2 from "../FoodInfo2";

class Stalls2 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <InfoConsumer>
                        {value => {
                            return value.info2.map(item2 => {
                                return (
                                    <FoodInfo2 key={item2.id} item2={item2} />
                                );
                            });
                        }}
                    </InfoConsumer>
                </div>
            </div>
        );
    }
}

export default Stalls2;
