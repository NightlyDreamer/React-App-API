import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spiner from '../spiner';
import ErrorIndicator from '../error-indicator';

import './item-list.css';

export default class ItemList extends Component {

    swapiService = new SwapiService

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
        const { loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spiner /> : null;
        const content = hasData ? <ItemListView /> : null;

        return(
            <div className="item-list">
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}

const ItemListView = () => {
    return (
        <ul className="list-group mb-3">
            <li className="list-group-item">Luke Sktwalker</li>
            <li className="list-group-item">R2-D2</li>
            <li className="list-group-item">C3-PO</li>
        </ul>
    );
}