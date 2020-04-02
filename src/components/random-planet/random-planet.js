import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import './random-planet.css';
import Spiner from '../spiner';
import ErrorIndicator from '../error-indicator';

export default class RandomPlanet extends Component {

	swapiService = new SwapiService();

	state = {
		planet: {},
		loading: true,
		error: false,
	};

	componentDidMount(){
		this.updatePlanet()
		this.interval = setInterval(this.updatePlanet, 8000)
	};

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	onPlanetLoaded = (planet) => {
		this.setState({
			planet,
			loading: false,
		})
	};

	onError = (err) => {
		this.setState({
			error: true,
			loading: false,
		});
	}

	updatePlanet = () => {
		const id = Math.floor(Math.random() * 25) + 3;
		this.swapiService
			.getPlanet(id)
			.then(this.onPlanetLoaded)
			.catch(this.onError);
	};

	render() {
		const { planet, loading, error } = this.state;

		const hasData = !(loading || error);

		const errorMessage = error ? <ErrorIndicator /> : null;
		const spinner = loading ? <Spiner /> : null;
		const content = hasData ? <PlanetView planet={planet} /> : null;
		

		return (
			<div className="random-planet d-flex mb-3">
				{errorMessage}
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
}