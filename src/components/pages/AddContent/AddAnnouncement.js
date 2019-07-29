import React, { Component } from 'react';
import Input from './Input';

export default function AddAnnouncement(props) {
    return (
        <div>
            <Input name="title" handleChange={props.handleChange} />
            <Input name="announcement" handleChange={props.handleChange} />
        </div>
    );
}

