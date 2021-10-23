import React from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";
import {withData} from "../hoc-helpers";

//эта часть компонента отвечает только за отрисовку, логика в компоненте-обёртке ниже
const ItemList = (props) => {
    const {data, onItemSelected, children: renderLabel} = this.props;

    const items = data.map((item) => {
        const {id} = item;
        const label = renderLabel(item);

        return (
            <li className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}>
                {label}
            </li>
        );
    });


    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

const f = () => {//экспортируем класс из функции
    return ItemList;
}

const {getAllPeople} = new SwapiService();

export default withData(ItemList, getAllPeople);