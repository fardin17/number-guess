import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
            <h1>Number guessing game</h1>
            <p>We have selected a random number between 1 and 100. 
            See if you can guess it in 10 turns or fewer. 
            We'll tell you if your guess was too high or too low.</p>
    
            <div >
              <p> Guesses: </p>
              <p> LastResult </p>
              <p> LowOrHi </p>
            </div>
            </div>
        );
    }
}

export default Form;