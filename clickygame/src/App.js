import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav } from "react-bootstrap";
import Board from "./Components/Board/index";
import BoardItems from "./Components/BoardItems/index";
import items from "./items.json";


class App extends Component {

  state = {
    items,
    score: 0,
    clicked: []
  }

  shuffle() {
    for (let i = items.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
  }

  handleScore(id){
    let clicked = this.state.clicked;
    // let score = this.state.score;
    console.log("handleScore running...")
    this.setState({score: true})
    if(clicked.includes(id)){
      alert("You lost")
      this.setState({ score: 0 })
    }
    else {
      this.shuffle();
      this.setState({ 
        score: clicked.length,
        clicked: [id, ...this.state.clicked]
      })
    }
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">New Game</Nav.Link>
            <Nav.Link>
              <span>Score:</span>
            </Nav.Link>
          </Nav>
        </Navbar>
        <div className="App">
          <Board>
              <BoardItems
                key={this.state.items.id}
                image={this.state.items.image}
                name={this.state.items.name}
                handleScore={this.handleScore}
              />
          </Board>
        </div>
      </div>
    );
  }
}

export default App;
