import React from 'react';

import withData from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';
import './item-list.css';

const ItemList = (props) => {
	const { data, onItemSelected, children: renderLabel  } = props;

	const items = data.map((item) => {
		const label = renderLabel(item);
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
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);