import React, { useState } from "react";


const Dashboard = () => {
const [strikes, setStrikes] = useState(0);
const [balls, setBalls] = useState(0);

//balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
const addStrike = () => {
    setStrikes(strikes+ 1)
 if(strikes >= 3){
    setStrikes(0)
 }
};

const addBall = () => {
    setBalls(balls+ 1)
 if(balls >= 4){
    setBalls(0)
 }
};

//balls and strikes reset to 0 when a hit is recorded
const hit = () => {
        setBalls(0);
        setStrikes(0)
     
};




//a foul increases strikes up to 2. 
// With no strikes, a foul makes it 1 strike. 
// With 1 strike, a foul makes it 2 strikes. 
// With two strikes a foul has no effect, count stays at 2 strikes
const foul = () => {
if(strikes <= 1){
    setStrikes(strikes + 1)
} else {setStrikes(2)}
}

return(
    <>
    <div className="displays">
<h3>Strikes: {strikes}</h3>
<h3>Balls: {balls}</h3>
    </div>
    <div className="buttons">
        <button onClick={addStrike} >Strike</button>
        <button onClick={addBall}>Ball</button>
        <button onClick={foul}>Foul</button>
        <button onClick={hit}>Hit</button>
    </div>
    </>
)

}

export default Dashboard;