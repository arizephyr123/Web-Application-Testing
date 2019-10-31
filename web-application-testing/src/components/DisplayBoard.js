import React from "react";

class DisplayBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0
    };
  };
  render(){
      return(
          <div className='display-container'>
              <div>
                  <div>

                  </div>
              </div>
              <Buttons data={this.state}/>

          </div>
      )
  }
}

export default DisplayBoard;
