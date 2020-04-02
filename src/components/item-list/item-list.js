import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spiner from '../spiner';
import ErrorIndicator from '../error-indicator';

import './item-list.css';

export default class ItemList extends Component {

	swapiService = new SwapiService();

	state = {
		peopleList: null,
		error: false,
		loading: true,
	}

	onError = (err) => {
		this.setState({
			error: true,
			loading: false,
		});
	}

	onListLoaded = (peopleList) => {
		this.setState({
			peopleList,
			loading: false
		})
	}

	componentDidMount() {
		this.swapiService
			.getAllPeople()
			.then(this.onListLoaded)
			.catch(this.onError);
	}

	render() {
		const { loading, error, peopleList } = this.state;
		const { onItemSelected } = this.props;

		const hasData = !(loading || error);

		const errorMessage = error ? <ErrorIndicator /> : null;
		const spinner = loading ? <Spiner /> : null;
		const content = hasData ? <ItemListView onItemSelected={onItemSelected} peopleList={peopleList} /> : null;

		return (
			<div className="item-list">
				{errorMessage}
				{spinner}
				{content}
			</div>
		)
	}
}

const ItemListView = ({ peopleList, onItemSelected }) => {

	const items = peopleList.map(({ id, name }) => {
		return (
			<li className="list-group-item"
				key={id}
				onClick={() => onItemSelected(id)}>
				{name}
			</li>
		);
	})

	return (
		<ul className="list-group mb-3">
			{items}
		</ul>
	);
}