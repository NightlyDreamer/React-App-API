import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import './app.css';

export default class App extends Component {

	state = {
		itemSelectedId: null,
		showRandomPlanet: true,
	}

	onItemSelected = (id) => {
		this.setState({
			itemSelectedId: id,
		});
		console.log(id, `item id `);
	}

	toggleRandomPlanet = () => {
		this.setState({
			showRandomPlanet: !this.state.showRandomPlanet,
		})
	}

	render() {

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

				<div className="row mb-2">
					<div className="col-md-6">
						<ItemList onItemSelected={this.onItemSelected} />
					</div>
					<div className="col-md-6">
						<PersonDetails personId={this.state.itemSelectedId} />
					</div>
				</div>
			</div>
		);
	};
};