import React, { Component } from "react";
import { InfoConsumer } from "../context";
import StallInfo from "../StallInfo";

class ScienceStall extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="mt-3">Stalls</h3>
                <div className="row mt-3">
                    <InfoConsumer>
                        {value => {
                            return value.scienceStall.map(item => {
                                return (
                                    <StallInfo
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

export default ScienceStall;
