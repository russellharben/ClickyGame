import React, { Component } from 'react';
import './style.css';
import BoardItems from "../BoardItems/index";
import items from "../../items.json";


export default class Board extends Component {


    render() {
        return <div className="container">
                {items.map(item => (
                    <BoardItems 
                        key={item.id}
                        name={item.name}
                        image={item.image}
                    />
                ))}
        </div>
    }
}
