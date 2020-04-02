import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './people-page.css';

export default class PeoplePage extends Component {
  state = {
    itemSelectedId: null,
  }

  onItemSelected = (id) => {
		this.setState({
			itemSelectedId: id,
		});
	}

  render() {
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