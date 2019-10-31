import React from 'react';

const Buttons = props => {
console.log(props);
return(
    <div>
        <button onClick={props.addStrike}>Strike</button>
        <button onClick={props.addBall}>Ball</button>
        <button onClick={props.addFoul}>Foul</button>
    </div>
);
};

export default Buttons;