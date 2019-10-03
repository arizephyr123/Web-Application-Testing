import React from "react";

const Display = props => {
  return (
    <>
      <h3 data-testid="strikeHeader" >Strike: {props.strikes}</h3>
      <h3 data-testid="ballHeader">Ball: {props.balls}</h3>
   </>
  );
};

export default Display;
