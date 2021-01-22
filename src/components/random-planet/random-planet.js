import React, {Component} from "react";

import './random-planet.css'

//0 разметка компонентов
export default class RandomPlanet extends Component {
    //определение стэйта
    state = {
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    };

    render() {

        const {name, population, rotationPeriod, diameter} = this.state;

        return (
            <div className="p=random-planet jumbotron rounded">
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/planets/5.jpg`}/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};