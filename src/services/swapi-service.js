export default class SwapiService {
	_apiBase = 'https://swapi.co/api';

	getResource = async (url) => {
		const resolve = await fetch(`${this._apiBase}${url}`);
		if (!resolve.ok) {
			throw new Error(`Could not fetch ${url}, received ${resolve.status}`)
		}
		return await resolve.json();
	}

	getAllPeople = async () => {
		const res = await this.getResource(`/people/`);
		return res.results.map(this._transformPersone);
	};

	getPersone = async (id)  => {
		const persone = await this.getResource(`/people/${id}/`);
		return this._transformPersone(persone)
	};

	getAllStarships = async () => {
		const res = await this.getResource(`/starships/`);
		return res.results.map(this._transformStarship);
	};

	getStarship = async (id) => {
		const starship = await this.getResource(`/starships/${id}/`);
		return this._transformStarship(starship)
	};

	getAllPlanets = async () => {
		const res = await this.getResource(`/planets/`);
		return res.results.map(this._transformPlanet);
	};

	getPlanet = async (id) => {
		const planet = await this.getResource(`/planets/${id}/`);
		return this._transformPlanet(planet)
	};

	_id = (item) => {
		const regExp = /\/([0-9]*)\/$/;
		return item.url.match(regExp)[1];
	};

	_transformPlanet = (planet) => {
		return {
			id: this._id(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter
		}
	};

	_transformPersone = (persone) => {
		return {
			id: this._id(persone),
			name: persone.name,
			gender: persone.gender,
			birthYear: persone.birth_year,
			eyeColor: persone.eye_color
		}
	};

	_transformStarship = (starship) => {
		return {
			id: this._id(starship),
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			costInCredits: starship.costInCredits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargoCapacity
		}
	};

};