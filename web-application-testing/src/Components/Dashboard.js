import React, { useState } from "react";
import Display from "./Display";

const Dashboard = () => {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const reset = () => {
    setBalls(0);
    setStrikes(0);
  };

  //button click adds one to strikes up to 3 then calls reset fn
  const addStrike = () => {
    setStrikes(strikes + 1);
    if (strikes >= 3) {
      reset();
    }
  };

  //button click adds one to balls up to 4 then calls reset fn
  const addBall = () => {
    setBalls(balls + 1);
    if (balls >= 4) {
      reset();
    }
  };

  //the following function replaced with reset above
  //   const hit = () => {
  //     setBalls(0);
  //     setStrikes(0);
  //   };

  //a foul increases strikes up to 2.
  // With no strikes, a foul makes it 1 strike.
  // With 1 strike, a foul makes it 2 strikes.
  // With two strikes a foul has no effect, count stays at 2 strikes
  const foul = () => {
    if (strikes <= 1) {
      setStrikes(strikes + 1);
    } else {
      setStrikes(2);
    }
  };

  return (
    <>
      <div className="displays">
        <Display strikes={strikes} balls={balls} />
      </div>
      <div className="buttons">
        <button data-testid="strikeButton" onClick={addStrike}>
          Strike
        </button>
        <button data-testid="ballButton" onClick={addBall}>
          Ball
        </button>
        <button onClick={foul}>Foul</button>
        <button onClick={reset}>Hit</button>
      </div>
    </>
  );
};

export default Dashboard;
