import React, { Component } from 'react';

import './person-details.css';

export default class PersonDetails extends Component {

    render() {
        return (
            <div className="person-details d-flex">
				<img alt="person" src="https://images.ru.prom.st/236444108_w640_h640_droid-r2d2-figurka.jpg"/> 
				<div className="ml-4">
					<h2>R2-D2</h2>
					<ul className="list-group">
						<li className="list-group-item">Gender: male</li>
						<li className="list-group-item">Birth Year: 42</li>
						<li className="list-group-item">Eye Color: red</li>
					</ul>
				</div>
			</div>
        )
    }
}