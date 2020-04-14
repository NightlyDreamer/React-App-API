import React, { Component }  from 'react';

import Spiner from '../spiner';
import ErrorIndicator from '../error-indicator';
import '../item-list/item-list.css'

const  withData = (View, getData) => {
	return class extends Component {

		state = {
			data: null,
			error: false,
			loading: true,
		}

		onError = (err) => {
			this.setState({
				error: true,
				loading: false,
			});
		}

		onListLoaded = (data) => {
			this.setState({
				data,
				loading: false
			})
		}

		componentDidMount() {
			getData()
				.then(this.onListLoaded)
				.catch(this.onError);
		}

		render() {
			const { data, loading, error, } = this.state;
			const hasData = !(loading || error);

			const spinner = loading ? <Spiner /> : null;
			const errorMessage = error ? <ErrorIndicator /> : null;
			const content = hasData ? <View {...this.props} data={data} /> : null;

			return (
				<div className="item-list">
					{errorMessage}
					{spinner}
					{content}
				</div>
			);
		};
	};
};

export default withData;