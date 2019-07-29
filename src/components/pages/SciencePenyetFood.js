import React, { Component } from "react";
import { InfoConsumer } from "../context";
import { Link } from 'react-router-dom';
import FoodInfo from "../FoodInfo";

class SciencePenyetFood extends Component {

      constructor(props) {
          super(props);

          this.state = {
              stall: ''
          }
      }

      componentDidMount() {
          //const { handle } = this.props.match.params;
          this.setState({
              stall: this.props.match.params.stall
          });
      }

    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <InfoConsumer>
                        {value => {
                          return value.foods
                              .filter(food => food.stall === this.state.stall)
                              .map(item => {
                                return (
                                    <FoodInfo
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
