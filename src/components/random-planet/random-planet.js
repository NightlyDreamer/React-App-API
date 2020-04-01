import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import './random-planet.css';
import Spiner from '../spiner';

export default class RandomPlanet extends Component {

	swapiService = new SwapiService();

	state = {
		planet: {},
		loading: true,
	};

	constructor() {
		super();
		this.updatePlanet()
	}

	onPlanetLoaded = (planet) => {
		this.setState({
			planet,
			loading: false,
		})

	};

	updatePlanet() {
		const id = Math.floor(Math.random() * 25) + 2;
		this.swapiService
			.getPlanet(id)
			.then(this.onPlanetLoaded);
	};

	render() {
		const { planet, loading } = this.state;

		const spinner = loading ? <Spiner /> : null;
		const content = !loading ? <PlanetView planet={planet} /> : null;

		return (
			<div className="random-planet d-flex mb-3">
				{spinner}
				{content}
			</div>
		);
	};
};

const PlanetView = ({ planet }) => {

	const { id, name, population, rotationPeriod, diameter } = planet;

	return (
		<React.Fragment>
			<img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet" />
			<div className="ml-3">
				<h2>{name}</h2>
				<ul className="list-group">
					<li className="list-group-item">Population: {population}</li>
					<li className="list-group-item">Rotation Period: {rotationPeriod}</li>
					<li className="list-group-item">Diameter: {diameter} km</li>
				</ul>
			</div>
		</React.Fragment>
	);
};