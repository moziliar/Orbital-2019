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
        ]
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
/*
    getItem2 = id => {
        const item2 = this.state.info2.find(item2 => item2.id === id);
        return item2;
    };

    handleDetail2 = id => {
        const item2 = this.getItem2(id);
        this.setState(() => {
            return {
                detailInfo: item2
            };
        });
    };
    */

    render() {
        console.log(this.state.detailInfo);
        return (
            <InfoContext.Provider
                value={{
                    /*
                    info: this.state.info,
                    info2: this.state.info2,
                    price: this.state.price,
                    maps: this.state.maps,
                    scienceCanteen: this.state.scienceCanteen,
                    scienceStall: this.state.scienceStall,
                    fassStall: this.state.fassStall,
                    fassCanteen: this.state.fassCanteen,
                    headerTitle: this.state.headerTitle,
                    headerSubTitle: this.state.headerSubTitle,
                    headerText: this.state.headerText,
                    name: this.state.name,
                    avatar: this.state.avatar,
                    omment: this.state.comment,
                    handleDetail2: this.handleDetail2,
                    stall: this.state.stall
                    */
                    detailInfo: this.state.detailInfo,
                    handleDetail: this.handleDetail,
                    canteens: this.state.canteens,
                    stalls: this.state.stalls,
                    foods: this.state.foods,
                    news: this.state.news,
                    faculty: this.state.faculty
                }}
            >
                {this.props.children}
            </InfoContext.Provider>
        );
    }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };
