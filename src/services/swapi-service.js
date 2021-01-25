export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`); //ждём пока результат промиса не будет доступен

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url} recieved ${res.status}`);
        }
        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson(res));
    }

    async getPerson(id) {
        const res = await this.getResource(`/people/${id}/`);
        return this._transformPerson(res);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet(res));
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet)
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship(res));
    }

    async getStarship(id) {
        const res = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(res);
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }

    _transformStarship(starship) {
        return {
            id: this._extractId(starship),
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
}

const swapi = new SwapiService();

swapi.getPerson(3).then((p) => {
    console.log(p.name);
});

swapi.getAllPeople().then((people) => {
    people.forEach((p) => {
        console.log(p.name);
    })
});


// fetch('https://swapi.dev/api/people/1/')
//     .then((res) => {
//         return res.json() //тут тело ответа может быть ещё не получено
//     })
//     .then((body) => {
//         console.log(body);
//     });