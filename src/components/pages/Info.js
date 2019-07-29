import React, { Component } from "react";
import InfoSnippet from "../InfoSnippet";
import Button from "react-bootstrap/Button";
import Location from "./Location";
import { InfoConsumer } from "../context.js";

export default class Info extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: this.props.item,
            faculty: this.props.faculty,
            show: false
        }
    }

    handleOnClose() {
        this.setState({
            show: false
        })
    }
    
    render() {
        return (
            <div>
                <Location
                    onClose={this.handleOnClose.bind(this)}
                    location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.788883119356!2d103.76914796214271!3d1.3015784291927135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1af9c632576f%3A0xe6585222346ab1b2!2sTechno+Edge!5e0!3m2!1sen!2ssg!4v1564255061959!5m2!1sen!2ssg"
                    show={this.state.show}
                />

                <h4 className="mt-5">
                    {this.state.faculty} Canteen
                        <Button
                            className="ml-2"
                            variant="info"
                            onClick={() => this.setState({ show: true })}
                        >
                            Location
                        </Button>
                </h4>
                <div className="row mt-3">
                    <InfoConsumer>
                        {value => {
                            return value.canteens
                                .filter(canteen => canteen.faculty === this.state.faculty)
                                .map(item => {
                                    return(
                                        <InfoSnippet 
                                            key={item._id} 
                                            item={item} 
                                        />);
                                });
                        }}
                    </InfoConsumer>
                </div>
            </div>
        );
    }
}
