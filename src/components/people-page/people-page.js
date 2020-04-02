import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

import './people-page.css';

export default class PeoplePage extends Component {
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

    return (	
      <div className="row mb-2">
					<div className="col-md-6">
						<ItemList onItemSelected={this.onItemSelected} />
					</div>
					<div className="col-md-6">
						<PersonDetails personId={this.state.itemSelectedId} />
					</div>
				</div>

    )
  }
}