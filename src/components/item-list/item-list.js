import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spiner from '../spiner';
import ErrorIndicator from '../error-indicator';

import './item-list.css';

export default class ItemList extends Component {

	swapiService = new SwapiService();

	state = {
		itemList: null,
		error: false,
		loading: true,
	}

	onError = (err) => {
		this.setState({
			error: true,
			loading: false,
		});
	}

	onListLoaded = (itemList) => {
		this.setState({
			itemList,
			loading: false
		})
	}

	componentDidMount() {
		this.props.getData()
			.then(this.onListLoaded)
			.catch(this.onError);
	}

	render() {
		const { loading, error, itemList } = this.state;
		const { onItemSelected } = this.props;
		const renderItem = this.props.children;
		
		const hasData = !(loading || error);

		const errorMessage = error ? <ErrorIndicator /> : null;
		const spinner = loading ? <Spiner /> : null;
		const content = hasData ? <ItemListView onItemSelected={onItemSelected} itemList={itemList} renderItem={renderItem} /> : null;

		return (
			<div className="item-list">
				{errorMessage}
				{spinner}
				{content}
			</div>
		)
	}
}

const ItemListView = ({ itemList, onItemSelected, renderItem }) => {
	const items = itemList.map((item) => {
		const label = renderItem(item);
		const {id} = item;

		return (
			<li className="list-group-item"
				key={id}
				onClick={() => onItemSelected(id)}>
				{label}
			</li>
		);
	})

	return (
		<ul className="list-group mb-3">
			{items}
		</ul>
	);
}