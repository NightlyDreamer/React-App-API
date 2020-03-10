import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import './random-planet.css';

export default class RandomPlanet extends Component {

	swapiService = new SwapiService();

	constructor() {
		super();
		this.updatePlanet()
	}

	updatePlanet(){
		const id = Math.floor(Math.random()*25) + 2;
		this.swapiService
			.getPlanet(id)
			.then(planet => {
				this.setState({
					id,
					name: planet.name,
					population: planet.population,
					rotationPeriod: planet.rotation_period,
					diameter: planet.diameter
				});
			});
	};

	state = { 
		id: null,
		name: null,
		population: null,
		rotationPeriod: null,
		diameter: null
	}
	

	render() {
		const { id, name, population, rotationPeriod, diameter } = this.state;

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