import React, { Component } from 'react';
import Input from './Input';

export default function AddStall(props) {
    return (
        <div>
            <Input name="name" handleChange={props.handleChange} />
            <Input name="canteen" handleChange={props.handleChange} />
            <Input name="image" handleChange={props.handleChange} />
        </div>
    );
}

