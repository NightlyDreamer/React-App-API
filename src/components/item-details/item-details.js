import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator';
import Spiner from '../spiner';
import ErrorButton from '../error-button';
import './item-details.css';

const Record = ({ item, fild, label }) => {
	return (
		<li className="list-group-item">
						<span className="term">{label}:</span>
						<span>{item[fild]}</span>
					</li>
	);
}
export {
	Record
};

export default class ItemDetails extends Component {
	swapiServes = new SwapiService();

	state = {
		item: null,
		img: null,
		loading: true,
		error: false,
	}

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId) {
			this.updateItem();
		}
	}

	updateItem = () => {
		const { itemId, getData } = this.props;
		if (!itemId) {
			return;
		}
		this.setState({loading:true})
		getData(itemId)
			.then(this.onLoaded)
			.catch(this.onError)
	}

	onLoaded = (item) => {
		const { imgUrl } =this.props
		this.setState({
			loading: false,
			item,
			img: imgUrl(item)
		})
	};

	onError = (err) => {
		this.setState({
			loading: false,
			error: true,
		})
	};

	render() {
		const { item, img, loading, error } = this.state;
		
		// const children = this.props.children;

		// const hasData = !(loading || error);
		// const errorMessage = error ? <ErrorIndicator /> : null;
		// const spinner = loading ? <Spiner /> : null;

		if (!item) {
			return <span>Select a person from a person list</span>
		}
		const { name } = item;
		return (
			<div className="item-details d-flex">
				<img
				alt="person"
				src={img} />

				<div className="ml-3">
					<h2>{name}</h2>
					<ul
						className="list-group list-group-flush mb-3">
						{
							React.Children.map(this.props.children, (child) => {
								return React.cloneElement(child, {item})
							})
						}
					</ul>
					<ErrorButton/>
				</div>
			</div>
		)
	}
}

const ItemDetailsView = ( img, children, {item: { id, name, gender, birthYear, eyeColor }}) => {
	
	return (
		<React.Fragment>
			
		</React.Fragment>
	)
}