import React, { Component } from 'react';
import Input from './Input';

export default function AddCanteen(props) {
    return (
        <div>
            <Input name="name" handleChange={props.handleChange} />
            <Input name="faculty" handleChange={props.handleChange} />
            <Input name="image" handleChange={props.handleChange} />
            <Input name="location" handleChange={props.handleChange} />
        </div>
    );
}

