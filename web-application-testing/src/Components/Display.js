import React from "react";
import "../App.css"

const Display = props => {
  return (
    <>
    <div className="display-section">
      <h3 data-testid="strikeHeader" >Strike:</h3>
      <h3 className="display-numbers">{props.strikes}</h3>
      </div>
      <div className="display-section">
      <h3 data-testid="ballHeader">Ball:</h3>
      <h3 className="display-numbers">{props.balls}</h3>
      </div>
   </>
  );
};

export default Display;
