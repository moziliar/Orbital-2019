import React, { Component } from "react";
import { InfoConsumer } from "../context";
import ScienceFoodInfo from "../ScienceFoodInfo";

class SciencePenyetFood extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <InfoConsumer>
                        {value => {
                            return value.info.map(item => {
                                return (
                                    <ScienceFoodInfo
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

export default SciencePenyetFood;
