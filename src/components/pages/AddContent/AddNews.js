import React, { Component } from 'react';
import Input from './Input';

export default function AddNews(props) {
    return (
        <div>
            <Input name="title" handleChange={props.handleChange} />
            <Input name="text" handleChange={props.handleChange} />
        </div>
    );
}

