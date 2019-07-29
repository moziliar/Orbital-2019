import React, { Component } from 'react';
import Input from './Input';

export default function AddFood(props) {
    return (
        <div>
            <Input name="name" handleChange={props.handleChange} />
            <Input name="price" handleChange={props.handleChange} />
            <Input name="description" handleChange={props.handleChange} />
            <Input name="stall" handleChange={props.handleChange} />
            <Input name="image" handleChange={props.handleChange} />
        </div>
    );
}

