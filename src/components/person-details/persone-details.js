import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator';
import Spiner from '../spiner';
import ErrorButton from '../error-button';
import './person-details.css';

export default class PersonDetails extends Component {
	swapiServes = new SwapiService();

	state = {
		person: null,
		loading: true,
		error: false,
	}

	componentDidMount() {
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if (this.props.personId !== prevProps.personId) {
			this.updatePerson();
		}
	}

	componentDidCatch() {
		this.setState({error: true})
	}

	updatePerson = () => {
		const { personId } = this.props;
		if (!personId) {
			return;
		}
		this.setState({loading:true, error: false})

		this.swapiServes
			.getPersone(personId)
			.then(this.onLoaded)
			.catch(this.onError)
	}

	onLoaded = (person) => {
		this.setState({
			loading: false,
			person,
		})
	};

	onError = (err) => {
		this.setState({
			loading: false,
			error: true,
		})
	};

	render() {
		const { person, loading, error } = this.state;

		const hasData = !(loading || error);
		const errorMessage = error ? <ErrorIndicator /> : null;
		const spinner = loading ? <Spiner /> : null;
		const content = hasData ? <PersonDetailsView person={person} /> : null;

		if (!this.state.person) {
			return <span>Select a person from a person list</span>
		}
		
		return (
			<div className="person-details d-flex">
				{spinner}
				{content}
				{errorMessage}
			</div>
		)
	}
}

const PersonDetailsView = ({person: { id, name, gender, birthYear, eyeColor }}) => {
	
	return (
		<React.Fragment>
			<img
				alt="person"
				src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

			<div className="ml-3">
				<h2>{name}</h2>
				<ul
					className="list-group list-group-flush mb-3">
					<li className="list-group-item">
						<span className="term">Gender:</span>
						<span>{gender}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Birth Year:</span>
						<span>{birthYear}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Eye Color:</span>
						<span>{eyeColor}</span>
					</li>
				</ul>
				<ErrorButton/>
			</div>
		</React.Fragment>
	)
}