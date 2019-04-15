import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav } from "react-bootstrap";
import Board from "./Components/Board/index";
import BoardItems from "./Components/BoardItems/index";


class App extends Component {


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
              <BoardItems />
          </Board>
        </div>
      </div>
    );
  }
}

export default App;
