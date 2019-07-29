import React, { Component } from 'react';
import axios from 'axios';
import AddCanteen from './AddContent/AddCanteen';
import AddStall from './AddContent/AddStall';
import AddFood from './AddContent/AddFood';
import AddNews from './AddContent/AddNews';
import AddAnnouncement from './AddContent/AddAnnouncement';


export default class AddContent extends Component {

    constructor(props) {
        super(props);

        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            type: 'canteens',
            title: '',
            canteen: '',
            stall: '',
            description: '',
            price: '',
            image: '',
            location: '',
            announcement: '',
            text: ''
        }
    }

    componentDidMount() {
        this.setState({
            type: 'canteens',
            title: '',
            canteen: '',
            stall: '',
            description: '',
            price: '',
            image: '',
            location: '',
            announcement: '',
            text: ''
        });
    }

    handleTypeChange(e) {
        this.setState({type: e.target.value});
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value});
    };

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted`);
        console.log(this.state.title);
        console.log(this.state.description);

        const newSubmit = {
            name: this.state.name,
            faculty: this.state.faculty,
            canteen: this.state.canteen,
            stall: this.state.stall,
            description: this.state.description,
            price: this.state.price,
            image: this.state.image,
            location: this.state.location,
            announcement: this.state.announcement,
            text: this.state.text
        };

        console.log(newSubmit);

        axios.post(`http://localhost:4000/${this.state.type}/add`, newSubmit)
            .then(res => console.log(res.data));


        this.setState({
            type: 'canteens',
            name: '',
            faculty: '',
            canteen: '',
            stall: '',
            description: '',
            price: '',
            image: '',
            location: '',
            announcement: '',
            text: ''
        })

        window.location = '/';
    };

    generateForm(type) {
        switch(type) {
            case 'canteens':
                return <AddCanteen handleChange={this.handleChange.bind(this)} />;
                break;
            case 'stalls':
                return <AddStall handleChange={this.handleChange.bind(this)} />;
                break;
            case 'foods':
                return <AddFood handleChange={this.handleChange.bind(this)} />;
                break;
            case 'news':
                return <AddNews handleChange={this.handleChange.bind(this)} />;
                break;
            case 'announcements':
                return <AddAnnouncement handleChange={this.handleChange.bind(this)} />;
                break;
            default:
                return null;
        }
    }

    render() {
        return (
            <div class="contact-clean">
                <form 
                    method="post" 
                    onSubmit={this.onSubmit} 
                    style={{margin: ' 10em 25em'}}
                >
                    <h1 class="text-uppercase text-center">Add Content</h1>
                        <label>Type</label>
                        <select 
                            required
                            class="form-control" 
                            name="Type" 
                            value={this.state.value} 
                            onChange={this.handleTypeChange}
                        >
                            <optgroup label="Type of content">
                                <option value="canteens">Canteen</option>
                                <option value="stalls">Stall</option>
                                <option value="foods">Food</option>
                                <option value="news">News</option>
                                <option value="announcements">Announcement</option>
                            </optgroup>
                        </select>
                
                    {this.generateForm(this.state.type)} {/* generate form */}

                    <div class="form-group" style={{margin: '9px 0px'}}>
                        <button class="btn btn-primary" type="submit">
                            send 
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
