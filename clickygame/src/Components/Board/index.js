import React, { Component } from 'react';
import './style.css';
import BoardItems from "../BoardItems/index";
import items from "../../items.json";



export default class Board extends Component {

    state = {
        items
    }

    componentWillMount() {
        console.log(this.props.key);
    }

    handleScore(event) {
        const {state} = this.state;
        console.log("target = ", event.target);
    }

    render() {
        return <div className="container">
            {items.map(item => (
                <BoardItems
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    componentWillMount={this.componentWillMount.bind(this)}
                    score={this.handleScore.bind(this)} 
                />
            ))}
        </div>
    }
}
