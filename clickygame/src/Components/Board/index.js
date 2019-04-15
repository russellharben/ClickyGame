import React, { Component } from 'react';
import './style.css';
import BoardItems from "../BoardItems/index";
import items from "../../items.json";


export default class Board extends Component {

    state = {
        items,
        score: 0,
        clicked: []
      }
    
      shuffle = () => {
        for (let i = items.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [items[i], items[j]] = [items[j], items[i]];
        }
      }
    
      handleScore = id => {
          console.log("handleScore() running...")
        //   console.log(id)
        // let score = this.state.score;
        console.log("handleScore running...")
        this.setState({score: true})
        if(this.state.clicked.includes(id)){
          alert("You lost")
          this.setState({ score: 0 })
        }
        else {
          this.shuffle();
          this.setState({ 
            score: this.state.clicked.length,
            clicked: [id, ...this.state.clicked]
          })
        }
      }

    render() {
        
        return <div className="container">
                {items.map(item => (
                    <BoardItems 
                        key={item.id}
                        name={item.name}
                        image={item.image}
                        score={() => this.handleScore(item.id)}
                    />
                ))}
        </div>
    }
}
