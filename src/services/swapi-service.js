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
        return res.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}/`);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    getPlanet(id) {
        return this.getResource(`/planets/${id}/`);
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    getStarship(id) {
        return this.getResource(`/starships/${id}/`);
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