import React, { Component } from 'react';

import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import './people-page.css';
import SwapiService from '../../services/swapi-service';



export default class PeoplePage extends Component {

	swapiService= new SwapiService();

  state = {
		itemSelectedId: null,
	}
	
  onItemSelected = (id) => {
		this.setState({
			itemSelectedId: id,
		});
	}

  render() {
		const itemList = (
			<ItemList 
							getData={this.swapiService.getAllPeople}
							onItemSelected={this.onItemSelected}>
				{(i) => (
					`${i.name} (${i.birthYear})`
				)}
			</ItemList>
		);

		const { getPersone, getStarship, getPersoneImage, getStarshipImage } = this.swapiService;

		const peopleDetails = (
			<ItemDetails 
				getData={getPersone}
				imgUrl={getPersoneImage}
				itemId={3} >
					<Record fild='birthYear' label='Year' />
					<Record fild='eyeColor' label='Eye Color' />
					<Record fild='gender' label='Gender' />
			</ItemDetails>
		);
		const starshipsDetails = (
			<ItemDetails 
				getData={getStarship}
				imgUrl={getStarshipImage}
				itemId={4} >
					<Record fild='model' label='Model' />
					<Record fild='lebgth' label='Lebgth' />
			</ItemDetails>
		);

		return(
			<ErrorBoundry>
				<Row left={peopleDetails} right={starshipsDetails} />
			</ErrorBoundry>
		);
  }
}