class SwapiService {
	_apiBase = 'https://swapi.co/api';

	async getResource(url) {
		const resolve = await fetch(`${this._apiBase}${url}`);
		if(!resolve.ok){
			throw new Error(`Could not fetch ${url}, received ${resolve.status}`)
		}
		return await resolve.json();
	}

	async getAllPeople() {
		const res = await this.getResource(`/people/`);
		return res.results;
	};
	 getPersone(id) {
		return this.getResource(`/people/${id}/`);
	};

	async getAllStarships() {
		const res = await this.getResource(`/starships/`);
		return res.results;
	};
	getStarship(id) {
		return this.getResource(`/starships/${id}/`);
	};

	async getAllPlanets() {
		const res = await this.getResource(`/planets/`);
		return res.results;
	};
	getPlanet(id) {
		return this.getResource(`/planets/${id}/`);
	};
};

const swapi = new SwapiService();

swapi.getPersone(4).then((people) => {
	console.log(people.name);
});