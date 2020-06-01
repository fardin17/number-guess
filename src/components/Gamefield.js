import React, { Component } from 'react';

class Gamefield extends Component {
        constructor(){
            super();
            this.state={
                inputValue:null,
                ranNum:null,
                
            }
        }
        submitHandler=(e)=>{
            e.preventDefault();
            var randNum=Math.floor(Math.random()*100)+1;
            this.setState({ranNum:randNum})
           
        
        }
        
        
    render() {
    
     
        return (
            
            <div>
            <form>
            <label>Enter a guess: </label>
            <input type="text" onChange={(e)=>{this.setState({inputValue:e.target.value})}} ></input>
            <input type="submit" value="Submit guess" onClick={this.submitHandler} ></input>
            </form>
            {
                (this.state.ranNum===this.state.inputValue)?
                <h2>Match</h2>:<h2>Don't Match</h2>
            }
             <h2>{this.state.ranNum}</h2>
             
            </div>
        );
    }
}

export default Gamefield;