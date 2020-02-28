import React, { Component } from 'react';

import './item-list.css';

export default class ItemList extends Component {

    render() {
        return(
            <ul className="item-list list-group mb-3">
                <li className="list-group-item">Luke Sktwalker</li>
                <li className="list-group-item">R2-D2</li>
                <li className="list-group-item">C3-PO</li>
            </ul>
        );
    }
}