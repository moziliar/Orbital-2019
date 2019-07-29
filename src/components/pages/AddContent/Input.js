import React, { Component } from 'react';

export default function Input(props) {
    return (
        <div>
            <label name={props.name} style={{'text-transform': 'capitalize'}}>
                {props.name}
            </label>
            <input
                class="form-control"
                type="text"
                data-aos="fade"
                value={props.value}
                name={props.name}
                onChange={props.handleChange.bind(this)}
            />
        </div>
    );
}
