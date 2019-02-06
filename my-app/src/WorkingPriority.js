import React, { Component } from 'react';

import './App.css';
import topListingOne from "./topListing/topListing11.jpeg";
import topListingTwo from "./topListing/toplisting2.jpeg";
import topListingThree from "./topListing/toplisting3.jpeg";
import twoBedAp from './properties/2bedap.jpg';
import fourBedHouse from './properties/4BedHouse.jpeg';
import sixBedHouse from './properties/6BedHouse.jpeg';
import Priorities from './Priorities'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      search: '',
      buttonSubmit: false,
      cart: [],
      properties: [
        {type: 'House', price: '$1,000,000', bedroom: 4, bathroom: 2, region: "Yonge&Eglinton", image: "fourBedHouse"},
        {type: 'Apartment', price: '$600,000', bedroom: 2, bathroom: 2, region: "Bay&Bloor", image: "twoBedAp"},
        {type: 'House', price: '$1,500,000', bedroom: 6, bathroom: 3, region: "Yonge&Finch", image: "sixBedHouse"}
      ]
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  search(e){
    e.preventDefault();
    //var search = this.search;
    console.log(this.search);
    
  }
  updateInput(event){
   
    event.preventDefault();
    this.setState({search: event.target.value})
    this.submit = true
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('input:  ' + this.state.search)
  }


  render() {


    // propertiesForSale[1].type is equal to 'Apartment'
    var propertiesForSale =[
        {type: 'House', price: '$1,000,000', bedroom: 4, bathroom: 2, region: "Yonge&Eglinton", image: "fourBedHouse"},
        {type: 'Apartment', price: '$600,000', bedroom: 2, bathroom: 2, region: "Bay&Bloor", image: "twoBedAp"},
        {type: 'House', price: '$1,500,000', bedroom: 6, bathroom: 3, region: "Yonge&Finch", image: "sixBedHouse"}
      ];
    var newPropertiesForSale = [
      ['House', '$1,000,000', '4 bedrooms','2 bathrooms', 'Yonge&Eglinton', 'fourBedHouse'],
      ['Apartment', '$600,000', '4 bedrooms', '2 bathrooms', 'Bay&Bloor', 'twoBedAp'],
      ['House', '$1,500,000', '6 bedrooms', '3 bathrooms','Yonge&Finch','sixBedHouse']
    ];

    //var elements=[];
    //var searchOuputList = [];
    //var searchList = "";
    //searchList = this.state.search
    //if(searchList == "MADE IT"){
      // need to find out how to turn this into a list to iterate through
      //console.log('HERE hell ya!' + searchList)
      //console.log('Length of searchList' + searchList.length)
    //}
    var search123 = ['House', '6 bedrooms', '3 bathrooms', '$1,000,000','Bay&Bloor'];
    var priority = [];
    //console.log("Length of search123: "+search123.length)
    console.log("TESTING")
    console.log(""+newPropertiesForSale[0][0])
    console.log(""+newPropertiesForSale[0][1])
    console.log(""+newPropertiesForSale[0][2])
    console.log(""+newPropertiesForSale[0][3])
    console.log(""+newPropertiesForSale[0][4])
    console.log(""+newPropertiesForSale[0][5])
    
    console.log("END TESTING")

    // FINDS SIMILARITIES
    // -------------------------------------------------------
    // search through userInput
    for (var k=0; k<search123.length; k++){
      //console.log(search123[k])
      console.log(newPropertiesForSale.length)
      // iterate through properties
      for (var i =0; i< newPropertiesForSale.length; i++){
        
        //iterate through individual properties
        for (var j=0; j<5; j++){
          //console.log("MADE IT HERE"+newPropertiesForSale[i][j])
          if(search123[k] == newPropertiesForSale[i][j]){
            console.log("THIS IS THE SAME for list"+i)
            priority.push(i);
            console.log("search123[k]: "+search123[k])
            console.log("Price"+newPropertiesForSale[i][1])
          }
        }
      }
    }

    console.log("priority length: " + priority.length)
    console.log("priority"+priority)
    // ---------------------------------------------------------
    // FIND WHICH ONES MATCH THE MOST OFTEN
    var priority1 = 0;
    var priority2 = 0;
    var priority3 = 0;
    // sort priorities
    for(var w=0; w<priority.length; w++){
      console.log(priority[w])
      if(priority[w] === 0){
        priority1++;
      }else if(priority[w] === 1){
        priority2++;
      }else{
        priority3++;
      }
    }
    console.log("priority1: "+priority1)
    console.log("priority2: "+priority2)
    console.log("priority3: "+priority3)
    // ---------------------------------------------------------


    return (
      <div>
        <header className="header">
          Real-Estate PoT
        </header>   
        <div className="topListings" >
           <h4> Top listings </h4>
           <img src={topListingOne} />
           <img src={topListingTwo} />
           <img src={topListingThree} />
           
        </div> 
      
        <br />
        <br />
        <h4>Find a home</h4>
        <section>
          <form>
            <input 
              
              type="text"
              className="input"
              onChange={this.updateInput}
              placeholder="City, Neighbourhood, price"
            />
            <button>
              Voice icon
            </button>
            <br>
            </br>
            <button onClick={this.handleSubmit}>
              Search
            </button>
           
          </form>
        </section>     
      </div>

    );
  }
}

export default App;
