import React, { Component } from "react";
import {
  Button,
  Input,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";

import blankImg from "./blank.gif";

import Modal from "react-bootstrap/Modal";

import "./style.css";

import { InfoConsumer } from "../components/context"
import PopUp from "./components/PopUp";

export default class Search extends Component {

  editShow(show) {
    this.setState({ show: true });
  }

  renderFood = food => {
    const { search, link } = this.state;

    /*if( search !== "" && country.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
    }*/

    if (search != "") {
        return (
          <div className="col-md-3" style={{ marginTop: "20px" }}>
            <Card>
              <CardBody>
                <p className="">
                  <img
                    src={food.image}
                    alt={food.name}
                  />
                </p>
                <CardTitle title={food.name}>
                  {food.name.substring(0, 15)}
                  {food.name.length > 15 && "..."}
                </CardTitle>
                <InfoConsumer>
                  {value =>
                    <Button
                      className="ml-2 btn"
                      variant="info"
                      onClick={() => {
                        value.handleDetail(food._id);
                        this.setState({ show: true })
                      }}
                    >
                      More Info
                    </Button>
                  }
                </InfoConsumer>
              </CardBody>
            </Card>
          </div>
        );
      }
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      search: ""
    };
  }

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  filterFoods(foods, search) {
      return foods.filter(country => {
        return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      })
  }

  handleHide() {
    this.setState({
      show: false
    });
  }

  render() {

    const { search } = this.state;

    return (
      <div className="flyout">
        <main style={{ marginTop: "4rem" }}>
          <div className="container">
            <PopUp show={this.state.show} handleHide={this.handleHide.bind(this)}/>

            <div className="row">
              <div className="col col-sm-10 offset-sm-1 text-center ">
                <Input
                  label="Search Food"
                  icon="search"
                  onChange={this.onchange}
                />
              </div>
              <div className="col" />
            </div>
            <div className="row mb-5">
              <InfoConsumer>
                {value =>
                        this.filterFoods(value.foods, search).map(food => {
                        return this.renderFood(food);
                      })
                }
              </InfoConsumer>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
