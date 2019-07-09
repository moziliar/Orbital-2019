import React, { Component } from "react";
import {
    placeInfo,
    placeInfo2,
    scienceCanteen,
    fassCanteen,
    detailInfo,
    scienceStall,
    fassStall
} from "../data";

const InfoContext = React.createContext();

class InfoProvider extends Component {
    state = {
        info: placeInfo,
        info2: placeInfo2,
        detailInfo: detailInfo,
        scienceCanteen: scienceCanteen,
        scienceStall: scienceStall,
        fassStall: fassStall,
        fassCanteen: fassCanteen
    };

    getItem = id => {
        const item = this.state.info.find(item => item.id === id);
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

    render() {
        return (
            <InfoContext.Provider
                value={{
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
                    detailInfo: this.state.detailInfo,
                    name: this.state.name,
                    avatar: this.state.avatar,
                    comment: this.state.comment,
                    handleDetail: this.handleDetail,
                    handleDetail2: this.handleDetail2,
                    stall: this.state.stall
                }}
            >
                {this.props.children}
            </InfoContext.Provider>
        );
    }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };
