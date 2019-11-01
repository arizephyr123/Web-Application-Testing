import React from "react";
import "../App.css";

import Buttons from "./Buttons";

class DisplayBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0
    };
  }

  reset = current => {
return current * 0
  };

  clearBoard = () => {
    this.setState({
      balls: this.reset(this.state.balls),
      strikes: this.reset(this.state.strikes)
    });
  };

addOne = current => {
return current + 1
};

  addStrike = () => {
    this.setState({
      strikes: this.addOne(this.state.strikes)
    });
    if (this.state.strikes >= 2) {
      this.clearBoard();
    }
  };

  addBall = () => {
    this.setState({
      balls: this.addOne(this.state.balls)
    });
    if (this.state.balls >= 3) {
      this.clearBoard();
    }
  };

  addFoul = () => {
    if (this.state.strikes <= 1) {
      this.setState({
        strikes: this.addOne(this.state.strikes)
      });
    } else {
      return this.state;
    }
  };

  render() {
    return (
      <div className="display-container">
        <div>
          <div>
            <h2>Strikes</h2>
            <h2>{this.state.strikes}</h2>
          </div>
          <div>
            <h2 data-testid='ballsHeader'>Balls</h2>
            <h2>{this.state.balls}</h2>
          </div>
        </div>
        <Buttons
          data={this.state}
          addStrike={this.addStrike}
          addBall={this.addBall}
          addFoul={this.addFoul}
          clearBoard={this.clearBoard}
        />
      </div>
    );
  }
}

export default DisplayBoard;
