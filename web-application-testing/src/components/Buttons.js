import React from 'react';
import '../App.css';

const Buttons = props => {
//console.log(props);
return(
    <div className='buttons-container'>
        <button 
        data-testid="ballButton"
        onClick={props.addStrike}>Strike</button>
        <button onClick={props.addBall}>Ball</button>
        <button onClick={props.addFoul}>Foul</button>
        <button onClick={props.clearBoard}>Hit</button>
    </div>
);
};

export default Buttons;