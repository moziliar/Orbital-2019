import React, { Component } from "react";
import axios from 'axios';

const InfoContext = React.createContext();

class InfoProvider extends Component {
    state = {
        canteens: [],
        stalls: [],
        foods: [],
        news: [],
        faculty: [
            "Science",
            "FASS",
            "Engineering",
            "Computing"
        ],
        bestFood: {
            _id : "5d3dcc98bed9ee1463405ec6",
            name : "Ayam Penyet",
            stall : "Uncle Penyet",
            description : "Smashed Fried Chicken + Rice",
            price : "$3.50",
            image : ".././images/canteens/frontier/unclepenyet/frontierayampenyet.jpg",
            location : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.18633311381..."
        }
    };

    componentDidMount() {
        console.log(this.state);
        axios.get('http://localhost:4000/canteens')
            .then(res => {
                console.log("breakpoint");
                console.log(res.data);
                this.setState({
                    canteens: res.data
                });
                console.log(this.state);
            })
            .catch(function (err) {
                console.log(err);
            });
        axios.get('http://localhost:4000/stalls')
            .then(res => {
                this.setState({
                    stalls: res.data
                });
            })
            .catch(function (err) {
                console.log(err);
            });
        axios.get('http://localhost:4000/foods')
            .then(res => {
                this.setState({
                    foods: res.data
                });
            })
            .catch(function (err) {
                console.log(err);
            });
        axios.get('http://localhost:4000/news')
            .then(res => {
                this.setState({
                    news: res.data
                });
                console.log(this.state);
            })
            .catch(function (err) {
                console.log(err);
            });
        console.log(this.state);
    }

    getItem = id => {
        const item = this.state.foods.find(item => item._id === id);
        return item;
    };

    handleDetail = id => {
        const item = this.getItem(id);
        this.setState(() => {
            return {
                detailInfo: item
            };
        });
    };

    render() {
        console.log(this.state.detailInfo);
        return (
            <InfoContext.Provider
                value={{
                    detailInfo: this.state.detailInfo,
                    handleDetail: this.handleDetail,
                    canteens: this.state.canteens,
                    stalls: this.state.stalls,
                    foods: this.state.foods,
                    news: this.state.news,
                    faculty: this.state.faculty,
                    bestFood: this.state.bestFood
                }}
            >
                {this.props.children}
            </InfoContext.Provider>
        );
    }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };
