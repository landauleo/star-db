import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';

import Row from "../row/row";
import ItemDetails, {Record} from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import { PersonDetails, PersonList, PlanetList, StarshipDetails, StarshipList } from "../sw-components";
import './app.css';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    render() {

        return (
          <ErrorBoundry>
            <div className="stardb-app">
              <Header />
              <PersonDetails itemId={11} /> 
              <StarshipDetails itemId={11} /> 
              <PlanetList itemId={11} /> 

              <PersonList>{({ name }) => <span>{name} </span>}</PersonList> 
              <StarshipList>{({ name }) => <span>{name} </span>}</StarshipList> 
              <PlanetList>{({ name }) => <span>{name} </span>}</PlanetList>
            </div>
          </ErrorBoundry>
        );
    }
}
