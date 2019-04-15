import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav } from "react-bootstrap";
import BoardItems from "./Components/BoardItems/index";
import items from "./items.json";

class App extends Component {

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

  reload() {
    window.location.reload();
  }

  handleScore = id => {
    console.log("handleScore() running...")
    //   console.log(id)
    this.state.score++;

    if (this.state.clicked.includes(id)) {
      alert(`Congrats! You finished with a score of ${this.state.score - 1}`)
      this.setState({ score: 0 })
      document.getElementById('root').addEventListener("click", this.reload());
    }
    else {
      this.shuffle();
      this.setState({
        clicked: [id, ...this.state.clicked]
      })
      console.log(this.state.score);
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
              <span>Score: {this.state.score}</span>
            </Nav.Link>
          </Nav>
        </Navbar>
        <div className="App">
          <div className="container">
            {items.map(item => (
              <BoardItems
                key={item.id}
                name={item.name}
                image={item.image}
                score={() => this.handleScore(item.id)}
                stateScore={this.state.score}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
