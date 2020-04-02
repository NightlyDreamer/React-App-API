export default class SwapiService {
	_apiBase = 'https://swapi.co/api';

	async getResource(url) {
		const resolve = await fetch(`${this._apiBase}${url}`);
		if (!resolve.ok) {
			throw new Error(`Could not fetch ${url}, received ${resolve.status}`)
		}
		return await resolve.json();
	}

	async getAllPeople() {
		const res = await this.getResource(`/people/`);
		return res.results.map(this._transformPersone);
	};
	async getPersone(id) {
		const persone = await this.getResource(`/people/${id}/`);
		return this._transformPersone(persone)
	};

	async getAllStarships() {
		const res = await this.getResource(`/starships/`);
		return res.results.map(this._transformStarship);
	};
	async getStarship(id) {
		const starship = await this.getResource(`/starships/${id}/`);
		return this._transformStarship(starship)
	};

	async getAllPlanets() {
		const res = await this.getResource(`/planets/`);
		return res.results.map(this._transformPlanet);
	};
	async getPlanet(id) {
		const planet = await this.getResource(`/planets/${id}/`);
		return this._transformPlanet(planet)
	};

	_id = (item) => {
		const regExp = /\/([0-9]*)\/$/;
		return item.url.match(regExp)[1];
	}

	_transformPlanet = (planet) => {
		return {
			id: this._id(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter
		}
	}

	_transformPersone = (persone) => {
		return {
			id: this._id(persone),
			name: persone.name,
			gender: persone.gender,
			birthYear: persone.birth_year,
			eyeColor: persone.eye_color
		}
	}

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
	}

};