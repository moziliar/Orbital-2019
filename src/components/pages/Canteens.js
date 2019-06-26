import React, { Component } from "react";
import { InfoConsumer } from "../context";
import Info from "../Info";
import Info2 from "../Info2";
import Button from "react-bootstrap/Button";

class Canteens extends Component {
    render() {
        return (
            <div className="container">
                <h4 className="mt-5">
                    Science Canteen
                    <Button className="ml-2" variant="info">
                        Location
                    </Button>
                </h4>
                <div className="row mt-3">
                    <InfoConsumer>
                        {value => {
                            return value.scienceCanteen.map(item => {
                                return <Info key={item.id} item={item} />;
                            });
                        }}
                    </InfoConsumer>
                </div>

                <h4 className="mt-5">
                    Fass Canteen
                    <Button className="ml-2" variant="info">
                        Location
                    </Button>
                </h4>
                <div className="row mt-3">
                    <InfoConsumer>
                        {value => {
                            return value.fassCanteen.map(item2 => {
                                return <Info2 key={item2.id} item2={item2} />;
                            });
                        }}
                    </InfoConsumer>
                </div>
            </div>
        );
    }
}

export default Canteens;
