import React, { Component } from "react";
import { InfoConsumer } from "../context";
import FoodInfo from "../FoodInfo";

class Stalls extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <InfoConsumer>
                        {value => {
                            return value.info.map(item => {
                                return <FoodInfo key={item.id} item={item} />;
                            });
                        }}
                    </InfoConsumer>
                </div>
            </div>
        );
    }
}

export default Stalls;
