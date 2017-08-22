import React, { Component } from 'react';
import './App.css';
import {Motion, spring} from 'react-motion';

export default class Player extends Component {
  render() {
    return (
    	<div>
          <div className="App-racer-name">
            {this.props.name}
          </div>
          <Motion style={{x: spring(this.props.val, this.props.config)}}>
            {({x}) =>
              <div className="App-track">
                <div className="App-racer-block" style={{
                  backgroundColor: this.props.color,
                  WebkitTransform: `translate3d(${x}px, 0, 0)`,
                  transform: `translate3d(${x}px, 0, 0)`,
                }} />
              </div>
            }
          </Motion>
        </div>
    );
  }
}

Player.defaultProps = {
  color: 'rgb(130, 181, 198)',
  name: 'Player X'
}