import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import './random-planet.css';

export default class RandomPlanet extends Component {

	swapiService = new SwapiService();
	
	state = { 
		planet: {}
	}

	constructor() {
		super();
		this.updatePlanet()
	}

	onPlanetLoaded = (planet) => {
		this.setState({planet})
	};

	updatePlanet(){
		const id = Math.floor(Math.random()*25) + 2;
		this.swapiService
			.getPlanet(id)
			.then(this.onPlanetLoaded);
	};

	render() {
		const { planet: {id, name, population, rotationPeriod, diameter} } = this.state;

		return ( 
			<div className="random-planet d-flex mb-3">
				<img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet"/> 
				<div className="ml-3">
					<h2>{name}</h2>
					<ul className="list-group">
						<li className="list-group-item">Population: {population}</li>
						<li className="list-group-item">Rotation Period: {rotationPeriod}</li>
						<li className="list-group-item">Diameter: {diameter} km</li>
					</ul>
				</div>
			</div>
		);
	};
};