import React from "react";

import Buttons from "./Buttons";

class DisplayBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0
    };
  }

  clearBoard = () => {
      this.setState({
        balls: 0,
        strikes: 0
      })
  };

  addStrike = () => {
    // let newStrikes = this.state.balls;
    this.setState({
      strikes: this.state.strikes + 1
    });
    if (this.state.strikes >= 2){
        this.clearBoard();
    }
  };

  addBall = () => {
      this.setState({
          balls: this.state.balls + 1
      });
      if (this.state.balls >= 3){
          this.clearBoard();
      };
  };

  addFoul = () => {
    if(this.state.strikes <=1){
      this.setState({
          strikes: this.state.strikes +1
      })} else{
        return this.state
      }
  };

  render() {
    return (
      <div className="display-container">
        <div>
          <div>
            <h2>Strike</h2>
            <h2>{this.state.strikes}</h2>
          </div>
          <div>
            <h2>Ball</h2>
            <h2>{this.state.balls}</h2>
          </div>
        </div>
        <Buttons data={this.state} addStrike={this.addStrike} addBall={this.addBall}
        addFoul={this.addFoul}/>
      </div>
    );
  }
}

export default DisplayBoard;
