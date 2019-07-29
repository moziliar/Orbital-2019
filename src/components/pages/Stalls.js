import React, { Component } from "react";
import { InfoConsumer } from "../context";
import StallInfo from "../StallInfo";

class Stalls extends Component {
    constructor(props) {
        super(props);

        this.state = {
            canteen: ''
        }
    }

    componentDidMount() {
        //const { handle } = this.props.match.params;
        this.setState({
            canteen: this.props.match.params.handle
        });
    }


    render() {
        return (
            <div className="container">
                <h3 className="mt-3">Stalls</h3>
                <div className="row mt-3">
                    <InfoConsumer>
                        {value => {
                            return value.stalls.filter(
                                    item => item.canteen === this.state.canteen
                                ).map(item => {
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

export default Stalls;
