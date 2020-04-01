import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import './random-planet.css';
import Spiner from '../spiner';

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
				<Spiner />
			</div>
		);
	};
};