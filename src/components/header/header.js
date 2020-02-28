import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {

    render() {
        return (
            <div className="header d-flex mb-3">
                <h1>
                    <a href="#">SW-DB</a>
                </h1>
                <ul className="d-flex">
                    <li className="">
                        <a href="#">People</a>
                    </li>
                    <li className="">
                        <a href="#">Starships</a>
                    </li>
                    <li className="">
                        <a href="#">Planets</a>
                    </li>
                </ul>
            </div>
        );
    }
}