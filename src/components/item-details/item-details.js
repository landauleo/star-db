import React, {Component} from 'react';

import './item-details.css';
import SwapiService from "../../services/swapi-service";

export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state = {
        item: null,
        image: null
    };

    componentDidMount() {
        this.updateItem();
    }

    //вызываеся сразу после того, как компонент обновился и отрендерился
    componentDidUpdate(prevProps, prevState, snapshot) {
        //любая логика на изменение свойств компонента
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getData, getImageURL} = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({item, image: getImageURL(item)});
            });
    };

    render() {
        if (!this.state.item) {
            return <span>Select an item from a list</span>
        }
        const {item, image} = this.state;

        const { id, name, gender, birth_year, eye_color } = item;
        return (
            <div className="item-details card">
                <img className="item-image"
                     src={image}
                     alt="item"/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birth_year}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eye_color}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}