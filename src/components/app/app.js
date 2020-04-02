import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page/people-page';

import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import './app.css';

export default class App extends Component {

	state = {
		showRandomPlanet: true,
		hasError: false,
	}

	componentDidCatch() {
		this.setState({ hasError: true })
	}

	toggleRandomPlanet = () => {
		this.setState({
			showRandomPlanet: !this.state.showRandomPlanet,
		})
	}

	render() {
		if (this.state.hasError) {
			return <ErrorIndicator />
		}
		const randomPlanet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

		return (
			<div className="app">
				<Header />
				{randomPlanet}

				<button
					className="btn btn-warning btn-lg mb-3"
					onClick={this.toggleRandomPlanet}>
					Toggle Random Planet
				</button>
				<ErrorButton />

				<PeoplePage /> 

			</div>
		);
	};
};