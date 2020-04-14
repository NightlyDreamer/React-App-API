import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import Row from '../row';
import './people-page.css';
import SwapiService from '../../services/swapi-service';

export default class PeoplePage extends Component {

	swapiService= new SwapiService();

  state = {
		itemSelectedId: null,
		error: false,
	}
	
	componentDidCatch() {
		this.setState({error: true})
	}

  onItemSelected = (id) => {
		this.setState({
			itemSelectedId: id,
		});
	}

  render() {
		if (this.state.error) {
			return <ErrorIndicator />
		}
		
		const itemList = (
			<ItemList 
							getData={this.swapiService.getAllPeople}
							onItemSelected={this.onItemSelected}
							renderItem={({ name, birthYear }) => (`${name} (${birthYear})`)} />
		);
		
		const personDetails = (
			<PersonDetails personId={this.state.itemSelectedId} />
		);

		return(
			<Row left={itemList} right={personDetails} />
		);
  }
}