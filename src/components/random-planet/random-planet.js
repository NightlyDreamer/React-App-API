import React, { Component } from 'react';

import './random-planet.css';

export default class RandomPlanet extends Component {

	render() {
		return ( 
			<div className="random-planet d-flex mb-3">
				<img src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"/> 
				<div className="ml-3">
					<h2>Planet Name</h2>
					<ul className="list-group">
						<li className="list-group-item">Population: 10000</li>
						<li className="list-group-item">Rotation Period: 24 S.H</li>
						<li className="list-group-item">Diameter: 24000 km</li>
					</ul>
				</div>
			</div>
		);
	};
};