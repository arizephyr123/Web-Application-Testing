import React from 'react';
import '../App.css';

const Buttons = props => {
//console.log(props);
return(
    <div className='buttons-container'>
        <button onClick={props.addStrike}>Strike</button>
        <button onClick={props.addBall}>Ball</button>
        <button onClick={props.addFoul}>Foul</button>
    </div>
);
};

export default Buttons;