import React, { Component } from 'react';
import './App.css';
import Player from './Player';

const speed = {
  tortoise: {stiffness: 20, damping: 35},
  elephant: {stiffness: 30, damping: 30},
  cheetah: {stiffness: 60, damping: 20},
  hummingbird: {stiffness: 100, damping: 20},
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  };

  handleMouseDown = () => {
    this.setState({open: !this.state.open});
  };

  handleTouchStart = (e) => {
    e.preventDefault();
    this.handleMouseDown();
  };

  render() {
    const springVal = this.state.open ? 600 : 0;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Speed Racer</h2>
        </div>
        <div>
          <button
            className="App-button"
            onMouseDown={this.handleMouseDown}
            onTouchStart={this.handleTouchStart}>
            Start Game
          </button>
          <Player
            val={springVal}
            config={speed.cheetah}
          />
          <Player
            val={springVal}
            config={speed.tortoise}
            color="red"
          />
          <Player
            val={springVal}
            config={speed.hummingbird}
            color="black"
          />
          <Player
            val={springVal}
            config={speed.elephant}
            name="Lightning"
          />
        </div>
      </div>
    );
  }
}

export default App;
