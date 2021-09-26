import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
// import ErrorButton from '../error-button';
// import PeoplePage from '../people-page';
import ErrorBoundry from "../error-boundry";

import './app.css';
import ItemDetails from '../item-details/item-details';
import Row from '../row';
import SwapiService from "../../services/swapi-service";

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

        const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        const personDetails = (
            <ItemDetails itemId={4} getData={getPerson} getImageURL={getPersonImage}/>
        )

        const starshipDetails = (
            <ItemDetails itemId={11} getData={getStarship} getImageURL={getStarshipImage}/>
        )
        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header />
                    <Row
                    left={starshipDetails}
                    right={personDetails}/>
                    {/* { planet } */}

                    {/* <div className="row mb2 button-row">
                        <button
                            className="toggle-planet btn btn-warning btn-lg"
                            onClick={this.toggleRandomPlanet}>
                            Toggle Random Planet
                        </button>
                        <ErrorButton />
                    </div>

                    <PeoplePage /> */}

                </div>
            </ErrorBoundry>
        );
    }
}
