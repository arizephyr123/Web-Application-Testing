import React, { useState } from "react";

const Display = props => {
  return (
    <div className="displays">
      <h3>Strikes: {strikes}</h3>
      <h3>Balls: {balls}</h3>
    </div>
  );
};

export default Display;
