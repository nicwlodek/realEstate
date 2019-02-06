import React, { Component } from 'react';

import './App.css';
import topListingOne from "./topListing/topListing11.jpeg";
import topListingTwo from "./topListing/toplisting2.jpeg";
import topListingThree from "./topListing/toplisting3.jpeg";


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      userInput: '',
      list: []
    };
 
  }

  changeUserInput(input){
    this.setState({
      userInput: input
    })
  }
  addToList(input){
    
    let listArray = this.state.list;
    listArray.push(input);
    this.setState({
      list: listArray
    })
  }


  render() {
    var PROPERTIES = [
      {type: 'House', price: '$1,000,000', bedroom: 4, bathroom: 2, region: "Yonge&Eglinton"},
      {type: 'Apartment', price: '$600,000', bedroom: 2, bathroom: 2, region: "Bay&Bloor"}
    ];
    return (
      <div className="flyout">
        <header className="App-header">
          Real-Estate PoT
        </header>   
        <div className = "topListings">
           <h4> Top listings </h4>
           <img src={topListingOne} />
           <img src={topListingTwo} />
           <img src={topListingThree} />
           
        </div> 
      
        <br />
        <br />
        <h4>Find a home</h4>
        <section className="section">
          <form className="form" >
            <input 
              
              type="text"
              className="input"
              onChange={ (e)=>this.changeUserInput(e.target.value)}
         
            />
            <button className="button is-info" >
              Voice icon
            </button>
            <br>
            </br>
            <button className="button is-info" onClick={ ()=> this.addToList(this.state.userInput) }>
              Search
            </button>
            <ul>
              {this.state.list.map( (val) => <li>{val}</li>)}
            </ul>
          </form>
        </section>     
      </div>

    );
  }
}

export default App;
