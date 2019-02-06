import React, { Component } from 'react';
import companyName from "./companyName.png";
import './App.css';


import topListingOne from "./topListing/topListing11.jpeg";
import topListingTwo from "./topListing/toplisting2.jpeg";
import topListingThree from "./topListing/toplisting3.jpeg";

import apartment1 from "./apartments/apartment1.jpeg";
import apartment2 from "./apartments/apartment2.jpeg";
import apartment3 from "./apartments/apartment3.jpeg";
import apartment4 from "./apartments/apartment4.jpeg";
import apartment5 from "./apartments/apartment5.jpeg";
import apartment6 from "./apartments/apartment6.jpeg";
import apartment7 from "./apartments/apartment7.jpeg";
import apartment8 from "./apartments/apartment8.jpeg";
import apartment9 from "./apartments/apartment9.jpeg";
import apartment10 from "./apartments/apartment10.jpeg";
import apartment11 from "./apartments/apartment11.jpeg";
import apartment12 from "./apartments/apartment12.jpeg";

import Apart1 from "./apartments/Apart1.jpg";
import Apart2 from "./apartments/Apart2.jpg";
import Apart3 from "./apartments/Apart3.jpg";

import Apart5 from "./apartments/Apart5.jpg";
import Apart6 from "./apartments/Apart6.jpg";
import Apart7 from "./apartments/Apart7.jpg";
import Apart8 from "./apartments/Apart8.jpg";
import Apart9 from "./apartments/Apart9.jpg";
import Apart10 from "./apartments/Apart10.jpg";
import Apart11 from "./apartments/Apart11.jpg";
import Apart12 from "./apartments/Apart12.jpg";

import queenstreet1 from "./queenstreet/queenstreet1.jpeg"
import queenstreet2 from "./queenstreet/queenstreet2.jpeg"
import queenstreet6 from "./queenstreet/queenstreet6.jpeg"
import queenstreet3 from "./queenstreet/queenstreet3.jpeg"
import queenstreet4 from "./queenstreet/queenstreet4.jpeg"
import queenstreet5 from "./queenstreet/queenstreet.jpeg"
import kingstreet1 from "./kingstreet/kingstreet1.jpeg"
import kingstreet2 from "./kingstreet/kingstreet2.jpeg"
import kingstreet3 from "./kingstreet/kingstreet3.jpeg"
import kingstreet4 from "./kingstreet/kingstreet4.jpeg"
import kingstreet5 from "./kingstreet/kingstreet5.jpeg"

import apartments1 from "./Apartments1/apartments1.jpeg";
import apartments2 from "./Apartments1/apartments2.jpeg";
import apartments3 from "./Apartments1/apartments3.jpeg";
import apartments4 from "./Apartments1/apartments4.jpeg";
import apartments5 from "./Apartments1/apartment-5.jpeg";
import apartments6 from "./Apartments1/apartment-6.jpeg";
import apartments7 from "./Apartments1/apartment-7.jpeg";
import apartments8 from "./Apartments1/apartment-8.jpeg";
import apartments9 from "./Apartments1/apartment-9.jpeg";
import apartments10 from "./Apartments1/apartment-10.jpeg";



import cottage1 from "./cottage/cottage1.jpeg";
import cottage2 from "./cottage/cottage2.jpeg";
import cottage3 from "./cottage/cottage3.jpeg";
import cottage4 from "./cottage/cottage4.jpeg";
import cottage5 from "./cottage/cottage5.jpeg";
import cottage6 from "./cottage/cottage6.jpeg";

import house1 from "./house/house1.jpeg";
import house2 from "./house/house2.jpeg";
import house3 from "./house/house3.jpeg";
import house4 from "./house/house4.jpeg";
import house5 from "./house/house5.jpeg";
import house6 from "./house/house6.jpeg";

import House1 from "./house/House1.jpg";
import House2 from "./house/House2.jpg";
import House3 from "./house/House3.jpg";
import House4 from "./house/House4.jpg";
import House5 from "./house/House5.jpg";
import House6 from "./house/House6.jpg";

import House7 from "./house/House7.jpg";
import House8 from "./house/House8.jpg";
import House9 from "./house/House9.jpg";
import House10 from "./house/House10.jpg";
import House11 from "./house/House11.jpg";
import House12 from "./house/House12.jpg";



import One from "./One.js";
import twoBedAp from './properties/2bedap.jpg';
import fourBedHouse from './properties/4BedHouse.jpeg';
import sixBedHouse from './properties/6BedHouse.jpeg';

import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Grid, Image, Segment } from 'semantic-ui-react'
import logoHere from "./logoHere.png";


import topListingComponent from "./topListingComponent.js";

import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';
import recognizeMicrophone from 'watson-speech/speech-to-text/recognize-microphone';



class App extends Component {
constructor(props) {
    super(props);
    this.state = {text: '', inputText: '', mode:'edit'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.KingStreet = this.KingStreet.bind(this);
    this.QueenStreet = this.QueenStreet.bind(this);
    this.Yorkmills = this.Yorkmills.bind(this);
    this.CondoSearch = this.CondoSearch.bind(this);
    this.CottagesSearch = this.CottagesSearch.bind(this);
    this.MoreThan500K = this.MoreThan500K.bind(this);
    this.LessThan500K = this.LessThan500K.bind(this);
    this.HouseSearch = this.HouseSearch.bind(this);
    this.RentalSearch = this.RentalSearch.bind(this);
    this.TwoBed = this.TwoBed.bind(this);
    this.ThreeBed = this.ThreeBed.bind(this);
    this.FourBed = this.FourBed.bind(this);

  }
  

  handleChange(e) {
    this.setState({ inputText: e.target.value });
  }

  handleSave() {
    this.setState({text: this.state.inputText, mode: 'view'});
    console.log(this.state.inputText)
  }

  KingStreet() {
    this.setState({text: this.state.inputText, mode: 'king'});
    console.log(this.state.inputText)

  }

  QueenStreet() {
    this.setState({text: this.state.inputText, mode: 'queen'});
    console.log(this.state.inputText)

  }

  CondoSearch() {
    this.setState({text: this.state.inputText, mode: 'condo'});
    console.log(this.state.inputText)

  }
  HouseSearch() {
    this.setState({text: this.state.inputText, mode: 'house'});
    console.log(this.state.inputText)

  }

  CottagesSearch() {
    this.setState({text: this.state.inputText, mode: 'cottage'});
    console.log(this.state.inputText)

  }
  Yorkmills() {
    this.setState({text: this.state.inputText, mode: 'york mills'});
    console.log(this.state.inputText)

  }
  RentalSearch() {
    this.setState({text: this.state.inputText, mode: 'rent'});
    console.log(this.state.inputText)

  }

  MoreThan500K() {
    this.setState({text: this.state.inputText, mode: 'more500000'});
    console.log(this.state.inputText)
  }

  LessThan500K() {
    this.setState({text: this.state.inputText, mode: 'less500000'});
    console.log(this.state.inputText)
  }
  TwoBed() {
    this.setState({text: this.state.inputText, mode: '2bed'});
    console.log(this.state.inputText)
  }
  ThreeBed() {
    this.setState({text: this.state.inputText, mode: '3bed'});
    console.log(this.state.inputText)
  }
  FourBed() {
    this.setState({text: this.state.inputText, mode: '4bed'});
    console.log(this.state.inputText)
  }








  onListenClick() {

    fetch('http:/api/credentials')
    .then(function(response) {
        return response.text();
    }).then((accessToken) => {
      console.log('token is', accessToken)


      var stream = recognizeMic({
          access_token: accessToken,
          objectMode: true, // send objects instead of text
          extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
          smart_formatting: true,
          format: true // optional - performs basic formatting on the results such as capitals an periods
      });


      //console.log(stream);
      //prints out speech on to screen
      stream.on('data', (data) => {
        
        if (data.final === true) {
        this.setState({
         
         text: data.alternatives[0].transcript
            //text: data.
            
        })
        console.log(data);
      }
        console.log(data);


       
        

        //This seperates all words in buffer array by space
        var res = data.alternatives[0].transcript.split(" ");
        // final == true or false 
        var result = data.final;
        var i;
        

        var buff = data.alternatives[0].transcript;

        console.log(buff);


        for(var x= 0; x < res.length; x++) {

         // flag = 0;
          if(((res[x] === 'bedroom') || (res[x] === 'bedrooms') || (res[x] === 'bedrooms.')) && result === true) {
            //flag = 1;
          
          
          for(var y= 0; y < res.length; y++) {

            if((res[y] === '2') && result === true) {
              //flag = 1;

              // 2 bedroom function
              this.TwoBed();

            }else if ((res[y] === '3') && result === true) {

            // 3 bedroom function
              this.ThreeBed();

            }else if ((res[y] === '4') && result === true) {
              //4 bedroom  function
              this.FourBed();


          }else {

            console.log("No listings with bedrooms found");
          }

          }// end of second for loop

        } // END OF BEDROOM IF STATEMENT
  
        } //end of 1st for loop

       
        //Scenerio for listings worth more than $50000
        if (((buff === "Listings that are more than $500000. ") || (buff === "Listings more than $500000. ")) && (result === true )){

          console.log('Here is a list of properities listed for more than $500000');
          this.MoreThan500K();
      
        } else if (((buff === "Listings that are less than $500000. ") || (buff === "Listings less than $500000. ")) && (result === true )){

          console.log('Here is a list of properities listed for less than $500000');
          this.LessThan500K();
        
        } else if (((buff === "Looking for a 2 bedroom condo. ") || (buff === "2 bedroom condo. ")) && (result === true )){

        console.log('Here is a list of condos with 2 bedrooms');
        this.LessThan500K();
      } 

      


        //loop through the length of the sepated buffer array
        for (i = 0; i< res.length; i++) {
          //goes through each word to find a match and to see if the array buffer is true (Watson understnads the sentence)
        
          if (((res[i] === 'king') || (res[i] === 'King')) && result === true) {
      
          console.log('Here are listings available on King street');
        //Prints out result function
         this.KingStreet();

        }else if (((res[i] === 'queen') || (res[i] === 'Queen')) && result === true) {


          console.log('Here are listings available on Queen street');
          this.QueenStreet();

        }else if (res[i] === 'York mills' && result === true) {


          console.log('Here are listings available on Yorkmills');
          this.Yorkmills();
       
        }else if (((res[i] === 'Condo') ||(res[i] === 'Condos') ||(res[i] === 'condo') || (res[i] === 'condos') || (res[i] === 'condos.') || (res[i] === 'condo.')) && result === true) {


          console.log('Here is a list of all the apatments');
          this.CondoSearch();

        }else if (((res[i] === 'House') ||(res[i] === 'Houses') ||(res[i] === 'house') || (res[i] === 'Houses') || (res[i] === 'house.')|| (res[i] === 'houses.')) && result === true) {


          console.log('Here is a list of all the Houses');
          this.HouseSearch();

          
        
       }else if (((res[i] === 'Cottages') ||(res[i] === 'Cottage') ||(res[i] === 'cottage') || (res[i] === 'cottages') || (res[i] === 'cottage.')) && result === true) {


        console.log('Here is a list of all the cottages');
        this.CottagesSearch();

      }else if (((res[i] === 'Rent') ||(res[i] === 'rent') ||(res[i] === 'Rental') || (res[i] === 'rent.') || (res[i] === 'Rent.')|| (res[i] === 'rental.')|| (res[i] === 'rentals.')) && result === true) {


        console.log('Here is a list of all Rentals');
        this.RentalSearch();

      }else if ( res[i] === 'more than $500000.' && result === true) {


        console.log('Here is a list of properities listed for more than $500000');
        this.MoreThan500K();

      }else if ( res[i] === 'less' && res[i] === 'than' && result === true) {


        console.log('Here is a list of of properities for less than $500000');
        this.LessThan500K();



      }else {
            console.log("No listings found");
        };
      }
    }) 
    stream.on('error', function(err) {
          console.log(err);
      });
      
    
    
    //click new button (stop) to stop the stream

    

      document.querySelector('#stop').onclick = function() {
        stream.stop();
      };
      
    }).catch(function(error) {
        console.log(error);
    });
  }




  handleEdit() {
    this.setState({mode: 'edit'});
  }
  renderInputField() {
    if(this.state.mode === 'view') {
      return <div></div>;
    } else {
      return (
          <p>
            <input
              onChange={this.handleChange}
              value={this.state.inputText}
            />
          </p>
      );
    }
  }

  render () {


    var variable = "";
    variable= this.state.text

////////////////////////////////
////////// "King" ////////////
////////////////////////////////


    if(this.state.mode === 'king') {

      return(
        <div>

        <div>

<div>

<div>
<div class="ui massive menu">
  <div class="item">
    <img src={logoHere} />
    <p> CompanyName</p>
  </div>
  <a class="active item">
    Buy
  </a>
  <a class="item">
    Sell
  </a>
  <a class="item">
    Rent
  </a>
  <a class="item">
    Mortgage
  </a>
  <div class="right menu">
    <div class="ui dropdown item">
      Language <i class="dropdown icon"></i>
      <div class="menu">
        <a class="item">English</a>
        <a class="item">French</a>
        <a class="item">Russian</a>
        <a class="item">Spanish</a>
      </div>
    </div>
    <div class="item">
      <div class="ui primary button">Log In</div>
    </div>
    <div class="item">
      <div class="ui primary button">Sign Up</div>
    </div>
  </div>
</div>

<div class="ui relaxed container grid">
  <div class="one column row">
    <div class="column">

      <header className="header">
        <h2>Top listings</h2>
      </header>
    </div>
  </div>                      
  
  <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingOne} />

                        </div>
                          <div class="content">
                            <div class="header">
                              House for Sale
                              <div class="right floated">
                                <i class="circular heart icon link" style={{color: 'red'}} ></i>
                              </div>
                            </div>
                            
                            <div class="meta" >
                              <a style={{color: 'red'}}>$700,000</a>
                            </div>
                            <div class="description">
                              <b>4</b> Bedroom <b>2</b> Bathroom <b>3,000</b> sq ft
                            </div>
                          </div>

                          <div class="extra content">
                            <span class="right floated">
                              <a style={{color:'blue'}}>
                              50 Alexander Crossing, Ajax  
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                              
                            </span>
                            <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              
                            </div>

                          

                          
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingTwo} />

                        </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                            <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$630,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          Eagle Rock Road, Vaughan
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>

                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button" >View Details</div>
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                      <div class="ui fluid image">
                        <div class="ui red ribbon label">
                          Top Pick
                        </div>
                        <img src={topListingThree} />

                      </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$599,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          2161 Yonge Street, Toronto
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        </div>
                      </div>

                        </div>
                      </div>


  <div class="three column row">
    <div class="one wide column">
      <button onClick={this.onListenClick.bind(this)} class ="ui animated blue big icon button">
            <div class="visible content">
             <i class="microphone icon"></i>
            </div>
            <div class = "hidden content">
             <i class = "pause icon"></i>
            </div>
      </button>
      <button id="stop" class ="ui animated red big icon button">
           
           <div class="visible content">
            <i class="microphone icon"></i>
           </div>
           <div class = "hidden content">
            <i class = "pause icon"></i>
           </div>
          </button> 
    </div>
    <div class="twelve wide column">
      <div class="ui fluid big blue icon input">
        <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
        <i class="inverted circular search link icon">
        </i>
      </div>
    </div>
    <div class="three wide column">
      <button class="ui animated big blue button" onClick={this.handleSave}>
        <div class="visible content">
          Search
        </div>
        <div class="hidden content">
          <i class = "search icon"></i>
        </div>
      </button>

    </div>
</div>
    <div class="one column row">
      <div class="column">
        <h2>Your search: {this.state.text}</h2>
        <h2>Top properties based on your search: Near King Street </h2>

      </div>
    </div>

    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">

          <img src={kingstreet1} />
        </div>
        <div class="content">
          <div class="header">
            Condo/Townhome
            
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$449,000</a>
          </div>
          <div class="description">
            <b>3</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
            548 King St W, Toronto 
            </a>
            <i class="map marker alternate icon" style={{color:'blue'}}></i>
          </span>
          <br></br>
          <br></br>
          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              

        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
          From MLSListings
        </div>
        <img src={kingstreet2} />
        </div>
        <div class="content">
        <div class="header">
          Condo/Townhome
          
        </div>
        <div class="meta">
          <a style={{color: 'red'}}>$449,000</a>
        </div>
        <div class="description">
          <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
        678 King St W, Toronto 
        </a>
        <i class="map marker alternate icon" style={{color:'blue'}}></i>
        </span>
        <br></br>
        <br></br>
        <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              

      </div>
    </div>

    </div>
    <div class="column">

    <div class="ui link card">
      <div class="image">

        <img src={kingstreet4} />
      </div>
      <div class="content">
        <div class="header">
        Condo/Townhome
        </div>
        <div class="meta">
          <a style={{color: 'red'}}>$549,000</a>
        </div>
        <div class="description">
          <b>3</b> Bedroom <b>2</b> Bathroom <b>1,800</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
          96 Spadina Ave, Toronto
          </a>
          <i class="map marker alternate icon"  style={{color:'blue'}}></i>
        </span>
        <br></br>
        <br></br>
        <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              

      </div>
    </div>

      </div>
    </div>



    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
                              From Home Owner
                            </div>
          <img src={kingstreet3} />
        </div>
        <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$449,000</a>
          </div>
          <div class="description">
            <b>3</b> Bedroom <b>2</b> Bathroom <b>1,300</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
            370 King St W, Toronto
            </a>
            <i class="map marker alternate icon" style={{color:'blue'}}></i>
          </span>
          <br></br>
          <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              


        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <img src={kingstreet5} />
        </div>
        <div class="content">
        <div class="header">
          Condo/Townhome
        </div>
        <div class="meta" >
                              <a style={{color: 'red'}}>$499,000</a>
                            </div>
        <div class="description">
          <b>3</b> Bedroom <b>2</b> Bathroom <b>1,800</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
          78 Spadina Ave, Toronto
          </a>
          <i class="map marker alternate icon"  style={{color:'blue'}}></i>
        </span>
        <br></br>
        <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              

      </div>
    </div>

    </div>


      
    </div>


  </div>
</div>


</div>


        </div>
        </div>
      );

      ////////////////////////////////
////////// more Than 500000 ////////////
////////////////////////////////

    }else if(this.state.mode === 'more500000'){
      return(
        <div>

<div>

<div>
<div class="ui massive menu">
  <div class="item">
    <img src={logoHere} />
    <p> CompanyName</p>
  </div>
  <a class="active item">
    Buy
  </a>
  <a class="item">
    Sell
  </a>
  <a class="item">
    Rent
  </a>
  <a class="item">
    Mortgage
  </a>
  <div class="right menu">
    <div class="ui dropdown item">
      Language <i class="dropdown icon"></i>
      <div class="menu">
        <a class="item">English</a>
        <a class="item">French</a>
        <a class="item">Russian</a>
        <a class="item">Spanish</a>
      </div>
    </div>
    <div class="item">
      <div class="ui primary button">Log In</div>
    </div>
    <div class="item">
      <div class="ui primary button">Sign Up</div>
    </div>
  </div>
</div>

<div class="ui relaxed container grid">
  <div class="one column row">
    <div class="column">

      <header className="header">
        <h2>Top listings</h2>
      </header>
    </div>
  </div>                      
  
  <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingOne} />

                        </div>
                          <div class="content">
                            <div class="header">
                              House for Sale
                              <div class="right floated">
                                <i class="circular heart icon link" style={{color: 'red'}} ></i>
                              </div>
                            </div>
                            
                            <div class="meta" >
                              <a style={{color: 'red'}}>$700,000</a>
                            </div>
                            <div class="description">
                              <b>4</b> Bedroom <b>2</b> Bathroom <b>3,000</b> sq ft
                            </div>
                          </div>

                          <div class="extra content">
                            <span class="right floated">
                              <a style={{color:'blue'}}>
                              50 Alexander Crossing, Ajax  
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                              
                            </span>
                            <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              
                            </div>

                          

                          
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingTwo} />

                        </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                            <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$630,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          Eagle Rock Road, Vaughan
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>

                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button" >View Details</div>
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                      <div class="ui fluid image">
                        <div class="ui red ribbon label">
                          Top Pick
                        </div>
                        <img src={topListingThree} />

                      </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$599,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          2161 Yonge Street, Toronto
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        </div>
                      </div>

                        </div>
                      </div>

    <div class="one column row">
      <div class="column">
        <h2>Your search: {this.state.text}</h2>
        <h2>Top properties based on your search: Listings more than $500000 </h2>

      </div>
    </div>

    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">

          <img src={Apart7} />
        </div>
        <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$550,000</a>
          </div>
          <div class="description">
            <b>2</b> Bedroom <b>1</b> Bathroom <b>1,500</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                          <i class="subway icon"></i>
                          less than 10 km away
                        </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
          32 Davenport Road, Toronto, Ontario
          </a>
          <i class="map marker alternate icon" style={{color:'blue'}}></i>
          </span>
          <br></br>
          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
          From MLSListings
        </div>
        <img src={Apart10} />
        </div>
        <div class="content">
        <div class="header">
          Condo/Townhome
        </div>
        <div class="meta">
          <a style={{color: 'red'}}>$525,000</a>
        </div>
        <div class="description">
          <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
        <a style={{color:'blue'}}>
        50 Scollard St, Toronto, Ontario
        </a>
        <i class="map marker alternate icon"  style={{color:'blue'}}></i>
        </span>
        <br></br>
        <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       
      </div>
    </div>

    </div>
    <div class="column">

    <div class="ui link card">
      <div class="image">

        <img src={Apart11} />
      </div>
      <div class="content">
        <div class="header">
        Condo/Townhome
        </div>
        <div class="meta">
          <a style={{color: 'red'}}>$599,000</a>
        </div>
        <div class="description">
          <b>3</b> Bedroom <b>2</b> Bathroom <b>1,800</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
          70 Drewry Ave, Toronto
          </a>
          <i class="map marker alternate icon"  style={{color:'blue'}}></i>
        </span>
        <br></br>
        <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                        
      </div>
    </div>

      </div>
    </div>



    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
                              From Home Owner
                            </div>
          <img src={apartments4} />
        </div>
        <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$599,000</a>
          </div>
          <div class="description">
            <b>3</b> Bedroom <b>2</b> Bathroom <b>1,300</b> sq ft
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
          <a style={{color:'blue'}}>
            15 Ancona St, Toronto
            </a>
            <i class="map marker alternate icon"  style={{color:'blue'}}></i>
          </span>
          <br></br>
          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                        
        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <img src={Apart9} />
        </div>
        <div class="content">
        <div class="header">
          Condo/Townhome
        </div>
        <div class="meta">
        <a style={{color: 'red'}}>$649,000</a>
        </div>
        <div class="description">
          <b>3</b> Bedroom <b>2</b> Bathroom <b>1,800</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
          70 Finch Ave E, Toronto
          </a>
          <i class="map marker alternate icon"  style={{color:'blue'}}></i>
                          
        </span>
        <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                        
      </div>
    </div>

    </div>
    <div class="column">

    <div class="ui link card">
      <div class="image">
      <div class="ui blue ribbon label">
          From Realtor.ca
        </div>
        <img src={apartments6} />
      </div>
      <div class="content">
        <div class="header">
        Condo/Townhome
        </div>
        <div class="meta">
          <a style={{color: 'red'}}>$599,000</a>
        </div>
        <div class="description">
          <b>2</b> Bedroom <b>2</b> Bathroom <b>1,700</b> sq ft
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
        <a style={{color:'blue'}}>
          1200 Steeles Ave E, Toronto
          </a>
          <i class="map marker alternate icon"  style={{color:'blue'}}></i>
        </span>
        <br></br>
        <br></br>
                          <div class="ui large fluid green button">View Details</div>

      </div>
    </div>

      </div>
    </div>


    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">
          <img src={apartments7} />
        </div>
        <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$599,000</a>
          </div>
          <div class="description">
            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,500</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
            5625 Yonge St, Toronto
            </a>
            <i class="map marker alternate icon"  style={{color:'blue'}}></i>
          </span>
          <br></br>
          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                        
        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
          From Realtor.ca
        </div>
        <img src={apartments8} />
        </div>
        <div class="content">
        <div class="header">
          Condo/Townhome
        </div>
        <div class="meta">
        <a style={{color: 'red'}}>$525,000</a>
        </div>
        <div class="description">
          <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
          13 Byng Ave, Toronto
          </a>
          <i class="map marker alternate icon"  style={{color:'blue'}}></i>
        </span>
        <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                        
      </div>
    </div>

    </div>
   

     
    </div>




  </div>
</div>


</div>


        </div>
      );


  ////////////////////////////////
////////// Less Than 500000 ////////////
////////////////////////////////
    }else if(this.state.mode === 'less500000'){
      return(
        <div>

<div>

<div>
<div class="ui massive menu">
  <div class="item">
    <img src={logoHere} />
    <p> CompanyName</p>
  </div>
  <a class="active item">
    Buy
  </a>
  <a class="item">
    Sell
  </a>
  <a class="item">
    Rent
  </a>
  <a class="item">
    Mortgage
  </a>
  <div class="right menu">
    <div class="ui dropdown item">
      Language <i class="dropdown icon"></i>
      <div class="menu">
        <a class="item">English</a>
        <a class="item">French</a>
        <a class="item">Russian</a>
        <a class="item">Spanish</a>
      </div>
    </div>
    <div class="item">
      <div class="ui primary button">Log In</div>
    </div>
    <div class="item">
      <div class="ui primary button">Sign Up</div>
    </div>
  </div>
</div>

<div class="ui relaxed container grid">
  <div class="one column row">
    <div class="column">

      <header className="header">
        <h2>Top listings</h2>
      </header>
    </div>
  </div>                      
  
  <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingOne} />

                        </div>
                          <div class="content">
                            <div class="header">
                              House for Sale
                              <div class="right floated">
                                <i class="circular heart icon link" style={{color: 'red'}} ></i>
                              </div>
                            </div>
                            
                            <div class="meta" >
                              <a style={{color: 'red'}}>$700,000</a>
                            </div>
                            <div class="description">
                              <b>4</b> Bedroom <b>2</b> Bathroom <b>3,000</b> sq ft
                            </div>
                          </div>

                          <div class="extra content">
                            <span class="right floated">
                              <a style={{color:'blue'}}>
                              50 Alexander Crossing, Ajax  
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                              
                            </span>
                            <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              
                            </div>

                          

                          
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingTwo} />

                        </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                            <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$630,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          Eagle Rock Road, Vaughan
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>

                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button" >View Details</div>
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                      <div class="ui fluid image">
                        <div class="ui red ribbon label">
                          Top Pick
                        </div>
                        <img src={topListingThree} />

                      </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$599,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          2161 Yonge Street, Toronto
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        </div>
                      </div>

                        </div>
                      </div>


  <div class="three column row">
    <div class="one wide column">
      <button class ="ui animated blue big icon button">
            <div class="visible content">
             <i class="microphone icon"></i>
            </div>
            <div class = "hidden content">
             <i class = "pause icon"></i>
            </div>
      </button>
    </div>
    <div class="twelve wide column">
      <div class="ui fluid big blue icon input">
        <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
        <i class="inverted circular search link icon">
        </i>
      </div>
    </div>
    <div class="three wide column">
      <button class="ui animated big blue button" onClick={this.handleSave}>
        <div class="visible content">
          Search
        </div>
        <div class="hidden content">
          <i class = "search icon"></i>
        </div>
      </button>

    </div>
</div>
    <div class="one column row">
      <div class="column">
        <h2>Your search: {this.state.text}</h2>
        <h2>Top properties based on your search: Listings less than $500000 </h2>

      </div>
    </div>

    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">

          <img src={Apart12} />
        </div>
        <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$499,000</a>
          </div>
          <div class="description">
            <b>1</b> Bedroom <b>1</b> Bathroom <b>1,400</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                          <i class="subway icon"></i>
                          less than 20 km away
                        </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
          500 Queen's Quay W, Toronto, Ontario M5V 3K8
          </a>
          <i class="map marker alternate icon"  style={{color:'blue'}}></i>
          </span>
          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
          From MLSListings
        </div>
        <img src={Apart5} />
        </div>
        <div class="content">
        <div class="header">
          Condo/Townhome
        </div>
        <div class="meta">
          <a style={{color: 'red'}}>$449,000</a>
        </div>
        <div class="description">
          <b>2</b> Bedroom <b>2</b> Bathroom <b>1,500</b> sq ft
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
        <a style={{color:'blue'}}>

          450 Steeles Ave W, Toronto
          </a>

                          <i class="map marker alternate icon"  style={{color:'blue'}}></i>
        </span>
        <br></br>
        <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
      </div>
    </div>

    </div>
    <div class="column">

    <div class="ui link card">
      <div class="image">

        <img src={apartments10} />
      </div>
      <div class="content">
        <div class="header">
        Condo/Townhome
        </div>
        <div class="meta">
          <a style={{color: 'red'}}>$499,000</a>
        </div>
        <div class="description">
          <b>1</b> Bedroom <b>1</b> Bathroom <b>1,500</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 10 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
        2 Fieldway Rd, Toronto, Ontario
        </a>
        <i class="map marker alternate icon"  style={{color:'blue'}}></i>
        </span>
        <br></br>
        <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
      </div>
    </div>

      </div>
    </div>



    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
                              From Home Owner
                            </div>
          <img src={Apart6} />
        </div>
        <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$479,000</a>
          </div>
          <div class="description">
            <b>2</b> Bedroom <b>1</b> Bathroom <b>1,300</b> sq ft
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
          <a style={{color:'blue'}}>
          139 Merton Street 850, Toronto, Ontario
          </a>
          <i class="map marker alternate icon"  style={{color:'blue'}}></i>
          </span>
          
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <img src={apartments5} />
        </div>
        <div class="content">
        <div class="header">
          Condo/Townhome
        </div>
        <div class="meta">
        <a style={{color: 'red'}}>$499,000</a>
        </div>
        <div class="description">
          <b>3</b> Bedroom <b>2</b> Bathroom <b>1,800</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
          70 Finch Ave E, Toronto
          </a>
          <i class="map marker alternate icon"  style={{color:'blue'}}></i>
        </span>
        <br></br>
        <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                       
      </div>
    </div>

    </div>
    <div class="column">

    <div class="ui link card">
      <div class="image">
      <div class="ui blue ribbon label">
          From Realtor.ca
        </div>
        <img src={apartments6} />
      </div>
      <div class="content">
        <div class="header">
        Condo/Townhome
        </div>
        <div class="meta">
          <a style={{color: 'red'}}>$399,000</a>
        </div>
        <div class="description">
          <b>2</b> Bedroom <b>2</b> Bathroom <b>1,700</b> sq ft
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
        <a style={{color:'blue'}}>
          1200 Steeles Ave E, Toronto
          </a>
          <i class="map marker alternate icon"  style={{color:'blue'}}></i>
        </span>
        <br></br>
        <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
      </div>
    </div>

      </div>
    </div>


    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">
          <img src={Apart7} />
        </div>
        <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$499,000</a>
          </div>
          <div class="description">
            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,500</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
          32 Davenport 304, Toronto, Ontario
          </a>
          <i class="map marker alternate icon"  style={{color:'blue'}}></i>
          </span>
          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
          From Realtor.ca
        </div>
        <img src={apartments8} />
        </div>
        <div class="content">
        <div class="header">
          Condo/Townhome
        </div>
        <div class="meta">
        <a style={{color: 'red'}}>$399,000</a>
        </div>
        <div class="description">
          <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
          13 Byng Ave, Toronto
          </a>
          <i class="map marker alternate icon"  style={{color:'blue'}}></i>
        </span>
        <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
      </div>
    </div>

    </div>
   

     
    </div>




  </div>
</div>


</div>


        </div>
      );


////////////////////////////////
////////// Cottages ////////////
////////////////////////////////

    }else if(this.state.mode === 'cottage'){
      return(
        <div>


        <div>

                <div>
                  <div class="ui massive menu">
                    <div class="item">
                      <img src={logoHere} />
                      <p> CompanyName</p>
                    </div>
                    <a class="active item">
                      Buy
                    </a>
                    <a class="item">
                      Sell
                    </a>
                    <a class="item">
                      Rent
                    </a>
                    <a class="item">
                      Mortgage
                    </a>
                    <div class="right menu">
                      <div class="ui dropdown item">
                        Language <i class="dropdown icon"></i>
                        <div class="menu">
                          <a class="item">English</a>
                          <a class="item">French</a>
                          <a class="item">Russian</a>
                          <a class="item">Spanish</a>
                        </div>
                      </div>
                      <div class="item">
                        <div class="ui primary button">Log In</div>
                      </div>
                      <div class="item">
                        <div class="ui primary button">Sign Up</div>
                      </div>
                    </div>
                  </div>

                  <div class="ui relaxed container grid">
                    <div class="one column row">
                      <div class="column">

                        <header className="header">
                          <h2>Top listings</h2>
                        </header>
                      </div>
                    </div>                      
                    
                    <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingOne} />

                        </div>
                          <div class="content">
                            <div class="header">
                              House for Sale
                              <div class="right floated">
                                <i class="circular heart icon link" style={{color: 'red'}} ></i>
                              </div>
                            </div>
                            
                            <div class="meta" >
                              <a style={{color: 'red'}}>$700,000</a>
                            </div>
                            <div class="description">
                              <b>4</b> Bedroom <b>2</b> Bathroom <b>3,000</b> sq ft
                            </div>
                          </div>

                          <div class="extra content">
                            <span class="right floated">
                              <a style={{color:'blue'}}>
                              50 Alexander Crossing, Ajax  
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                              
                            </span>
                            <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              
                            </div>

                          

                          
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingTwo} />

                        </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                            <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$630,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          Eagle Rock Road, Vaughan
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>

                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button" >View Details</div>
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                      <div class="ui fluid image">
                        <div class="ui red ribbon label">
                          Top Pick
                        </div>
                        <img src={topListingThree} />

                      </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$599,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          2161 Yonge Street, Toronto
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        </div>
                      </div>

                        </div>
                      </div>


                    <div class="three column row">
                      <div class="one wide column">
                        <button class ="ui animated blue big icon button">
                          <div class="visible content">
                           <i class="microphone icon"></i>
                          </div>
                          <div class = "hidden content">
                           <i class = "pause icon"></i>
                          </div>
                        </button>
                      </div>
                      <div class="twelve wide column">
                        <div class="ui fluid big blue icon input">
                          <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
                          <i class="inverted circular search link icon">
                          </i>
                        </div>
                      </div>
                      <div class="three wide column">
                        <button class="ui animated big blue button" onClick={this.handleSave}>
                          <div class="visible content">
                            Search
                          </div>
                          <div class="hidden content">
                            <i class = "search icon"></i>
                          </div>
                        </button>

                      </div>
        </div>
                      <div class="one column row">
                        <div class="column">
                          <h2>Your search: {this.state.text}</h2>
                          <h2>Top properties based on your search: </h2>

                        </div>
                      </div>

                      <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                            <img src={cottage1} />
                          </div>
                          <div class="content">
                            <div class="header">
                              Cottage
                            </div>
                            <div class="meta">
                              <a style={{color: 'red'}}>$999,000</a>
                            </div>
                            <div class="description">
                              <b>5</b> Bedroom <b>3</b> Bathroom <b>3,900</b> sq ft
                            </div>
                          </div>
                          <div class="extra content">
                          <a>
                        <i class="hospital icon"></i>
                        less than 10 km away
                      </a>
                            <span class="right floated">
                            <a style={{color:'blue'}}>
                              10 Raven Lake Road, Muskoka
                              </a>
                              <i class="map marker alternate icon"  style={{color:'blue'}}></i>
                            </span>
                            <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
                          </div>
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                          <div class="ui blue ribbon label">
                        From Realtor.ca
                      </div>
                          <img src={cottage2} />
                          </div>
                          <div class="content">
                          <div class="header">
                            Cottage
                          </div>
                          <div class="meta">
                            <a style={{color: 'red'}}>$1,199,000</a>
                          </div>
                          <div class="description">
                            <b>5</b> Bedroom <b>4</b> Bathroom <b>4,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                            1041 Lake Joseph Road, Muskoka
                            </a>
                            <i class="map marker alternate icon"  style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                        <div class="image">
                          <img src={cottage3} />
                        </div>
                        <div class="content">
                          <div class="header">
                          Cottage
                          </div>
                          <div class="meta">
                            <a style={{color: 'red'}}>$999,000</a>
                          </div>
                          <div class="description">
                            <b>6</b> Bedroom <b>4</b> Bathroom <b>4,500</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <span class="right floated">
                          <a style={{color:'blue'}}>

                            1087 Lake Muskoka Road, Muskoka
                          </a>
                            <i class="map marker alternate icon"  style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
                        </div>
                      </div>

                        </div>
                      </div>



                      <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                          <div class="ui blue ribbon label">
                        From Kijiji
                      </div>
                            <img src={cottage4} />
                          </div>
                          <div class="content">
                            <div class="header">
                              Cottage
                            </div>
                            <div class="meta">
                              <a style={{color: 'red'}}>$899,000</a>
                            </div>
                            <div class="description">
                              <b>5</b> Bedroom <b>3</b> Bathroom <b>3,400</b> sq ft
                            </div>
                          </div>
                          <div class="extra content">
                            <span class="right floated">
                            <a style={{color:'blue'}}>
                              145 Sugarbush Hill Road, Muskoka
                              </a>
                              <i class="map marker alternate icon"  style={{color:'blue'}}></i>
                            </span>
                            <br></br>
                            <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
                          </div>
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                          <img src={cottage5} />
                          </div>
                          <div class="content">
                          <div class="header">
                            Cottage
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$699,000</a>
                          </div>
                          <div class="description">
                            <b>4</b> Bedroom <b>2</b> Bathroom <b>3,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                            58 Murden Road, Muskoka
                            </a>
                            <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                        <div class="image">
                          <img src={cottage6} />
                        </div>
                        <div class="content">
                          <div class="header">
                            Cottage
                          </div>
                          <div class="meta">
                            <a style={{color: 'red'}}>$699,000</a>
                          </div>
                          <div class="description">
                            <b>4</b> Bedroom <b>2</b> Bathroom <b>3,100</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                        <i class="hospital icon"></i>
                        less than 10 km away
                      </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                            1091 Main Street, Dorset
                            </a>
                            <i class="map marker alternate icon"  style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
                        </div>
                      </div>
                        </div>
                      </div>
                    </div>
                  </div>


        </div>


        </div>
      );

////////////////////////////////
////////// "Rent" ////////////
////////////////////////////////


  } else if (this.state.mode === 'rent') {
        

        return(
          <div>

<div>

<div>
  <div class="ui massive menu">
    <div class="item">
      <img src={logoHere} />
      <p> CompanyName</p>
    </div>
    <a class="active item">
      Buy
    </a>
    <a class="item">
      Sell
    </a>
    <a class="item">
      Rent
    </a>
    <a class="item">
      Mortgage
    </a>
    <div class="right menu">
      <div class="ui dropdown item">
        Language <i class="dropdown icon"></i>
        <div class="menu">
          <a class="item">English</a>
          <a class="item">French</a>
          <a class="item">Russian</a>
          <a class="item">Spanish</a>
        </div>
      </div>
      <div class="item">
        <div class="ui primary button">Log In</div>
      </div>
      <div class="item">
        <div class="ui primary button">Sign Up</div>
      </div>
    </div>
  </div>

  <div class="ui relaxed container grid">
    <div class="one column row">
      <div class="column">

        <header className="header">
          <h2>Top listings</h2>
        </header>
      </div>
    </div>                      
    
    <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingOne} />

                        </div>
                          <div class="content">
                            <div class="header">
                              House for Sale
                              <div class="right floated">
                                <i class="circular heart icon link" style={{color: 'red'}} ></i>
                              </div>
                            </div>
                            
                            <div class="meta" >
                              <a style={{color: 'red'}}>$700,000</a>
                            </div>
                            <div class="description">
                              <b>4</b> Bedroom <b>2</b> Bathroom <b>3,000</b> sq ft
                            </div>
                          </div>

                          <div class="extra content">
                            <span class="right floated">
                              <a style={{color:'blue'}}>
                              50 Alexander Crossing, Ajax  
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                              
                            </span>
                            <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              
                            </div>

                          

                          
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingTwo} />

                        </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                            <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$630,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          Eagle Rock Road, Vaughan
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>

                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button" >View Details</div>
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                      <div class="ui fluid image">
                        <div class="ui red ribbon label">
                          Top Pick
                        </div>
                        <img src={topListingThree} />

                      </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$599,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          2161 Yonge Street, Toronto
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        </div>
                      </div>

                        </div>
                      </div>


    <div class="three column row">
      <div class="one wide column">
        <button class ="ui animated blue big icon button">
              <div class="visible content">
               <i class="microphone icon"></i>
              </div>
              <div class = "hidden content">
               <i class = "pause icon"></i>
              </div>
        </button>
      </div>
      <div class="twelve wide column">
        <div class="ui fluid big blue icon input">
          <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
          <i class="inverted circular search link icon">
          </i>
        </div>
      </div>
      <div class="three wide column">
        <button class="ui animated big blue button" onClick={this.handleSave}>
          <div class="visible content">
            Search
          </div>
          <div class="hidden content">
            <i class = "search icon"></i>
          </div>
        </button>

      </div>
</div>
      <div class="one column row">
        <div class="column">
          <h2>Your search: {this.state.text}</h2>
          <h2>Top properties based on your search: Listings you can rent </h2>

        </div>
      </div>

      <div class="three column row">
        <div class="column">

        <div class="ui link card">
          <div class="image">
          <div class="ui red ribbon label">
            Rental
          </div>
            <img src={apartments1} />
          </div>
          <div class="content">
            <div class="header">
              Condo/Townhome 
            </div>
            <div class="meta">
              <a style={{color: 'red'}}>$499,000</a>
            </div>
            <div class="description">
              <b>3</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
            </div>
          </div>
          <div class="extra content">
          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
            <span class="right floated">
            <a style={{color:'blue'}}>
              5576 Yonge St, Toronto
              </a>
              <i class="map marker alternate icon"  style={{color:'blue'}}></i>
            </span>
            <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
          </div>
        </div>
        </div>
        <div class="column">

        <div class="ui link card">
          
        
          <div class="image">
          
          <div class="ui red ribbon label">
            Rental
          </div>
         
          <img src={apartments2} />
          </div>
          <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$449,000</a>
          </div>
          <div class="description">
            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
          <a style={{color:'blue'}}>
            228 Steeles Ave W, Toronto
            </a>
            <i class="map marker alternate icon"  style={{color:'blue'}}></i>
          </span>
          <br></br>
          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
        </div>
      </div>

      </div>
      <div class="column">

      <div class="ui link card">
      
        <div class="image">
        <div class="ui red ribbon label">
            Rental
          </div>
          <img src={apartments10} />
        </div>
        <div class="content">
          <div class="header">
          Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$599,000</a>
          </div>
          <div class="description">
            <b>3</b> Bedroom <b>2</b> Bathroom <b>1,800</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
            70 Drewry Ave, Toronto
            </a>
            <i class="map marker alternate icon"  style={{color:'blue'}}></i>
          </span>
          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
        </div>
      </div>

        </div>
      </div>



      <div class="three column row">
        <div class="column">

        <div class="ui link card">
          <div class="image">
          <div class="ui blue ribbon label">
                                From Home Owner
                              </div>
            <img src={apartments4} />
          </div>
          <div class="content">
            <div class="header">
              Condo/Townhome
            </div>
            <div class="meta">
              <a style={{color: 'red'}}>$499,000</a>
            </div>
            <div class="description">
              <b>3</b> Bedroom <b>2</b> Bathroom <b>1,300</b> sq ft
            </div>
          </div>
          <div class="extra content">
            <span class="right floated">
            <a style={{color:'blue'}}>

              15 Ancona St, Toronto
              </a>
              <i class="map marker alternate icon"  style={{color:'blue'}}></i>
            </span>
            <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
          </div>
        </div>
        </div>
        <div class="column">

        <div class="ui link card">
          <div class="image">
          <div class="ui red ribbon label">
            Rental
          </div>
          <img src={apartments5} />
          </div>
          <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
          <a style={{color: 'red'}}>$449,000</a>
          </div>
          <div class="description">
            <b>3</b> Bedroom <b>2</b> Bathroom <b>1,800</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
            70 Finch Ave E, Toronto
            </a>
            <i class="map marker alternate icon"  style={{color:'blue'}}></i>
          </span>
          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
        </div>
      </div>

      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui red ribbon label">
            Rental
          </div>
          <img src={apartments6} />
        </div>
        <div class="content">
          <div class="header">
          Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$599,000</a>
          </div>
          <div class="description">
            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,700</b> sq ft
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
          <a style={{color:'blue'}}>

            1200 Steeles Ave E, Toronto
            </a>
            <i class="map marker alternate icon"  style={{color:'blue'}}></i>
          </span>
          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
        </div>
      </div>

        </div>
      </div>


      <div class="three column row">
        <div class="column">

        <div class="ui link card">
          <div class="image">
          <div class="ui red ribbon label">
            Rental
          </div>
            <img src={apartments7} />
          </div>
          <div class="content">
            <div class="header">
              Condo/Townhome
            </div>
            <div class="meta">
              <a style={{color: 'red'}}>$499,000</a>
            </div>
            <div class="description">
              <b>2</b> Bedroom <b>2</b> Bathroom <b>1,500</b> sq ft
            </div>
          </div>
          <div class="extra content">
          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
            <span class="right floated">
            <a style={{color:'blue'}}>
              5625 Yonge St, Toronto
              </a>
              <i class="map marker alternate icon" style={{color:'blue'}}></i>
            </span>
            <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
          </div>
        </div>
        </div>
        <div class="column">

        <div class="ui link card">
          <div class="image">
          <div class="ui red ribbon label">
            Rental
          </div>
          <img src={apartments8} />
          </div>
          <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
          <a style={{color: 'red'}}>$399,000</a>
          </div>
          <div class="description">
            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
            13 Byng Ave, Toronto
            </a>
            <i class="map marker alternate icon" style={{color:'blue'}}></i>
          </span>
          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
        </div>
      </div>

      </div>
     

       
      </div>




    </div>
  </div>


</div>


          </div>
        );

      ////////////////////////////////
////////// "Condo" ////////////
////////////////////////////////

    }else if(this.state.mode === 'condo'){
      return(
        <div>

<div>

<div>
<div class="ui massive menu">
  <div class="item">
    <img src={logoHere} />
    <p> CompanyName</p>
  </div>
  <a class="active item">
    Buy
  </a>
  <a class="item">
    Sell
  </a>
  <a class="item">
    Rent
  </a>
  <a class="item">
    Mortgage
  </a>
  <div class="right menu">
    <div class="ui dropdown item">
      Language <i class="dropdown icon"></i>
      <div class="menu">
        <a class="item">English</a>
        <a class="item">French</a>
        <a class="item">Russian</a>
        <a class="item">Spanish</a>
      </div>
    </div>
    <div class="item">
      <div class="ui primary button">Log In</div>
    </div>
    <div class="item">
      <div class="ui primary button">Sign Up</div>
    </div>
  </div>
</div>

<div class="ui relaxed container grid">
  <div class="one column row">
    <div class="column">

      <header className="header">
        <h2>Top listings</h2>
      </header>
    </div>
  </div>                      
  
  <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingOne} />

                        </div>
                          <div class="content">
                            <div class="header">
                              House for Sale
                              <div class="right floated">
                                <i class="circular heart icon link" style={{color: 'red'}} ></i>
                              </div>
                            </div>
                            
                            <div class="meta" >
                              <a style={{color: 'red'}}>$700,000</a>
                            </div>
                            <div class="description">
                              <b>4</b> Bedroom <b>2</b> Bathroom <b>3,000</b> sq ft
                            </div>
                          </div>

                          <div class="extra content">
                            <span class="right floated">
                              <a style={{color:'blue'}}>
                              50 Alexander Crossing, Ajax  
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                              
                            </span>
                            <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              
                            </div>

                          

                          
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingTwo} />

                        </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                            <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$630,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          Eagle Rock Road, Vaughan
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>

                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button" >View Details</div>
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                      <div class="ui fluid image">
                        <div class="ui red ribbon label">
                          Top Pick
                        </div>
                        <img src={topListingThree} />

                      </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$599,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          2161 Yonge Street, Toronto
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        </div>
                      </div>

                        </div>
                      </div>

  <div class="three column row">
    <div class="one wide column">
      <button class ="ui animated blue big icon button">
            <div class="visible content">
             <i class="microphone icon"></i>
            </div>
            <div class = "hidden content">
             <i class = "pause icon"></i>
            </div>
      </button>
    </div>
    <div class="twelve wide column">
      <div class="ui fluid big blue icon input">
        <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
        <i class="inverted circular search link icon">
        </i>
      </div>
    </div>
    <div class="three wide column">
      <button class="ui animated big blue button" onClick={this.handleSave}>
        <div class="visible content">
          Search
        </div>
        <div class="hidden content">
          <i class = "search icon"></i>
        </div>
      </button>

    </div>
</div>
    <div class="one column row">
      <div class="column">
        <h2>Your search: {this.state.text}</h2>
        <h2>Here are listings of all the condos:  </h2>

      </div>
    </div>

    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">

          <img src={apartments1} />
        </div>
        <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$499,000</a>
          </div>
          <div class="description">
            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
            5576 Yonge St, Toronto
            </a>
            <i class="map marker alternate icon"  style={{color:'blue'}}></i>
          </span>
          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
          From MLSListings
        </div>
        <img src={Apart1} />
        </div>
        <div class="content">
        <div class="header">
          Condo/Townhome
        </div>
        <div class="meta">
          <a style={{color: 'red'}}>$749,000</a>
        </div>
        <div class="description">
          <b>2</b> Bedroom <b>2</b> Bathroom <b>1,700</b> sq ft
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
        <a style={{color:'blue'}}>
        20 Stewart St, Toronto, Ontario
        </a>
        <i class="map marker alternate icon"  style={{color:'blue'}}></i>
        </span>
        <br></br>
        <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
      </div>
    </div>

    </div>
    <div class="column">

    <div class="ui link card">
      <div class="image">

        <img src={apartments10} />
      </div>
      <div class="content">
        <div class="header">
        Condo/Townhome
        </div>
        <div class="meta">
          <a style={{color: 'red'}}>$599,000</a>
        </div>
        <div class="description">
          <b>3</b> Bedroom <b>2</b> Bathroom <b>1,800</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
          70 Drewry Ave, Toronto
          </a>
          <i class="map marker alternate icon"  style={{color:'blue'}}></i>
        </span>
        <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
      </div>
    </div>

      </div>
    </div>



    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
                              From Home Owner
                            </div>
          <img src={Apart3} />
        </div>
        <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$699,000</a>
          </div>
          <div class="description">
            <b>3</b> Bedroom <b>2</b> Bathroom <b>1,500</b> sq ft
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
          <a style={{color:'blue'}}>
          25 Town Centre Crt, Toronto, Ontario
          </a>
          <i class="map marker alternate icon"  style={{color:'blue'}}></i>
          </span>
          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <img src={apartments5} />
        </div>
        <div class="content">
        <div class="header">
          Condo/Townhome
        </div>
        <div class="meta">
        <a style={{color: 'red'}}>$499,000</a>
        </div>
        <div class="description">
          <b>3</b> Bedroom <b>2</b> Bathroom <b>1,800</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
          70 Finch Ave E, Toronto
          </a>
          <i class="map marker alternate icon"  style={{color:'blue'}}></i>
        </span>
        <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
      </div>
    </div>

    </div>
    <div class="column">

    <div class="ui link card">
      <div class="image">
      <div class="ui blue ribbon label">
          From Realtor.ca
        </div>
        <img src={apartments6} />
      </div>
      <div class="content">
        <div class="header">
        Condo/Townhome
        </div>
        <div class="meta">
        <a style={{color: 'red'}}>$599,000</a>
        </div>
        <div class="description">
          <b>2</b> Bedroom <b>2</b> Bathroom <b>1,700</b> sq ft
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
        <a style={{color:'blue'}}>
          1200 Steeles Ave E, Toronto
          </a>
          <i class="map marker alternate icon"  style={{color:'blue'}}></i>
        </span>
        <br></br>
        <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
      </div>
    </div>

      </div>
    </div>


    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">
          <img src={apartments7} />
        </div>
        <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$499,000</a>
          </div>
          <div class="description">
            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,500</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
            5625 Yonge St, Toronto
            </a>
            <i class="map marker alternate icon"  style={{color:'blue'}}></i>
          </span>
          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
          From Realtor.ca
        </div>
        <img src={Apart8} />
        </div>
        <div class="content">
        <div class="header">
          Condo/Townhome
        </div>
        <div class="meta">
        <a style={{color: 'red'}}>$649,000</a>
        </div>
        <div class="description">
          <b>2</b> Bedroom <b>2</b> Bathroom <b>1,500</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 17 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
        1030 King St. W, Toronto, Ontario
        </a>
        <i class="map marker alternate icon" style={{color:'blue'}}></i>
        </span>
        <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
      </div>
    </div>

    </div>
   

     
    </div>




  </div>
</div>


</div>


        </div>
      );

      ////////////////////////////////
////////// "2bed" ////////////
////////////////////////////////

    }else if(this.state.mode === '2bed'){
      return(
        <div>

<div>

<div>
<div class="ui massive menu">
  <div class="item">
    <img src={logoHere} />
    <p> CompanyName</p>
  </div>
  <a class="active item">
    Buy
  </a>
  <a class="item">
    Sell
  </a>
  <a class="item">
    Rent
  </a>
  <a class="item">
    Mortgage
  </a>
  <div class="right menu">
    <div class="ui dropdown item">
      Language <i class="dropdown icon"></i>
      <div class="menu">
        <a class="item">English</a>
        <a class="item">French</a>
        <a class="item">Russian</a>
        <a class="item">Spanish</a>
      </div>
    </div>
    <div class="item">
      <div class="ui primary button">Log In</div>
    </div>
    <div class="item">
      <div class="ui primary button">Sign Up</div>
    </div>
  </div>
</div>

<div class="ui relaxed container grid">
  <div class="one column row">
    <div class="column">

      <header className="header">
        <h2>Top listings</h2>
      </header>
    </div>
  </div>                      
  
  <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingOne} />

                        </div>
                          <div class="content">
                            <div class="header">
                              House for Sale
                              <div class="right floated">
                                <i class="circular heart icon link" style={{color: 'red'}} ></i>
                              </div>
                            </div>
                            
                            <div class="meta" >
                              <a style={{color: 'red'}}>$700,000</a>
                            </div>
                            <div class="description">
                              <b>4</b> Bedroom <b>2</b> Bathroom <b>3,000</b> sq ft
                            </div>
                          </div>

                          <div class="extra content">
                            <span class="right floated">
                              <a style={{color:'blue'}}>
                              50 Alexander Crossing, Ajax  
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                              
                            </span>
                            <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              
                            </div>

                          

                          
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingTwo} />

                        </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                            <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$630,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          Eagle Rock Road, Vaughan
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>

                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button" >View Details</div>
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                      <div class="ui fluid image">
                        <div class="ui red ribbon label">
                          Top Pick
                        </div>
                        <img src={topListingThree} />

                      </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$599,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          2161 Yonge Street, Toronto
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        </div>
                      </div>

                        </div>
                      </div>


  <div class="three column row">
    <div class="one wide column">
      <button class ="ui animated blue big icon button">
            <div class="visible content">
             <i class="microphone icon"></i>
            </div>
            <div class = "hidden content">
             <i class = "pause icon"></i>
            </div>
      </button>
    </div>
    <div class="twelve wide column">
      <div class="ui fluid big blue icon input">
        <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
        <i class="inverted circular search link icon">
        </i>
      </div>
    </div>
    <div class="three wide column">
      <button class="ui animated big blue button" onClick={this.handleSave}>
        <div class="visible content">
          Search
        </div>
        <div class="hidden content">
          <i class = "search icon"></i>
        </div>
      </button>

    </div>
</div>
    <div class="one column row">
      <div class="column">
        <h2>Your search: {this.state.text}</h2>
        <h2>Top properties based on your search: Listings with 2 bedrooms </h2>

      </div>
    </div>

    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">

          <img src={Apart12} />
        </div>
        <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$499,000</a>
          </div>
          <div class="description">
            <b>2</b> Bedroom <b>1</b> Bathroom <b>1,400</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                          <i class="subway icon"></i>
                          less than 16 km away
                        </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
          38 Joe Shuster Way, Toronto, Ontario
          </a>
          <i class="map marker alternate icon"  style={{color:'blue'}}></i>
          </span>
          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
          From MLSListings
        </div>
        <img src={Apart1} />
        </div>
        <div class="content">
        <div class="header">
          Condo/Townhome
        </div>
        <div class="meta">
          <a style={{color: 'red'}}>$449,000</a>
        </div>
        <div class="description">
          <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
        <a style={{color:'blue'}}>
          899 Steeles Ave W, Toronto
          </a>
          <i class="map marker alternate icon"  style={{color:'blue'}}></i>
        </span>
        <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
      </div>
    </div>

    </div>
    <div class="column">

    <div class="ui link card">
      <div class="image">

        <img src={Apart2} />
      </div>
      <div class="content">
        <div class="header">
        Condo/Townhome
        </div>
        <div class="meta">
          <a style={{color: 'red'}}>$599,000</a>
        </div>
        <div class="description">
          <b>2</b> Bedroom <b>2</b> Bathroom <b>1,800</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
          70 Drewry Ave, Toronto
          </a>
          <i class="map marker alternate icon" style={{color:'blue'}}></i>
        </span>
        <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
      </div>
    </div>

      </div>
    </div>



    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
                              From Home Owner
                            </div>
          <img src={Apart11} />
        </div>
        <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$599,000</a>
          </div>
          <div class="description">
            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
          <a style={{color:'blue'}}>
          2 Meadowglen Dr, Toronto, Ontario
          </a>
          <i class="map marker alternate icon"  style={{color:'blue'}}></i>
          </span>
          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <img src={Apart11} />
        </div>
        <div class="content">
        <div class="header">
        Condo/Townhome
        </div>
        <div class="meta">
        <a style={{color: 'red'}}>$449,000</a>
        </div>
        <div class="description">
          <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 15 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
          70 Finch Ave E, Toronto
          </a>
          <i class="map marker alternate icon" style={{color:'blue'}}></i>
        </span>
        <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
      </div>
    </div>

    </div>
    <div class="column">

    <div class="ui link card">
      <div class="image">
      <div class="ui blue ribbon label">
          From Realtor.ca
        </div>
        <img src={Apart10} />
      </div>
      <div class="content">
        <div class="header">
        Condo/Townhome
        </div>
        <div class="meta">
          <a style={{color: 'red'}}>$499,000</a>
        </div>
        <div class="description">
          <b>2</b> Bedroom <b>1</b> Bathroom <b>1,700</b> sq ft
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
        <a style={{color:'blue'}}>
        1328 Birchmount Rd Toronto Ontario M1R3A7, Toronto, Ontario
        </a>
        <i class="map marker alternate icon" style={{color:'blue'}}></i>
        </span>
        <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
      </div>
    </div>

      </div>
    </div>


    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">
          <img src={Apart8} />
        </div>
        <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$649,000</a>
          </div>
          <div class="description">
            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,500</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                          <i class="subway icon"></i>
                          less than 24 km away
                        </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
          543 Richmond Street West, Toronto, Ontario
          </a>
          <i class="map marker alternate icon" style={{color:'blue'}}></i>
          </span>
          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
          From Realtor.ca
        </div>
        <img src={apartments8} />
        </div>
        <div class="content">
        <div class="header">
          Condo/Townhome
        </div>
        <div class="meta">
        <a style={{color: 'red'}}>$399,000</a>
        </div>
        <div class="description">
          <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
          13 Byng Ave, Toronto
          </a>
          <i class="map marker alternate icon" style={{color:'blue'}}></i>
        </span>
        <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
      </div>
    </div>

    </div>
   

     
    </div>




  </div>
</div>


</div>


        </div>
      );


      ////////////////////////////////
////////// "3 Bedroom" ////////////
////////////////////////////////


    }else if(this.state.mode === '3bed'){
      return(
        <div>

<div>

<div>
<div class="ui massive menu">
  <div class="item">
    <img src={logoHere} />
    <p> CompanyName</p>
  </div>
  <a class="active item">
    Buy
  </a>
  <a class="item">
    Sell
  </a>
  <a class="item">
    Rent
  </a>
  <a class="item">
    Mortgage
  </a>
  <div class="right menu">
    <div class="ui dropdown item">
      Language <i class="dropdown icon"></i>
      <div class="menu">
        <a class="item">English</a>
        <a class="item">French</a>
        <a class="item">Russian</a>
        <a class="item">Spanish</a>
      </div>
    </div>
    <div class="item">
      <div class="ui primary button">Log In</div>
    </div>
    <div class="item">
      <div class="ui primary button">Sign Up</div>
    </div>
  </div>
</div>

<div class="ui relaxed container grid">
  <div class="one column row">
    <div class="column">

      <header className="header">
        <h2>Top listings</h2>
      </header>
    </div>
  </div>                      
  
  <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingOne} />

                        </div>
                          <div class="content">
                            <div class="header">
                              House for Sale
                              <div class="right floated">
                                <i class="circular heart icon link" style={{color: 'red'}} ></i>
                              </div>
                            </div>
                            
                            <div class="meta" >
                              <a style={{color: 'red'}}>$700,000</a>
                            </div>
                            <div class="description">
                              <b>4</b> Bedroom <b>2</b> Bathroom <b>3,000</b> sq ft
                            </div>
                          </div>

                          <div class="extra content">
                            <span class="right floated">
                              <a style={{color:'blue'}}>
                              50 Alexander Crossing, Ajax  
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                              
                            </span>
                            <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              
                            </div>

                          

                          
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingTwo} />

                        </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                            <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$630,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          Eagle Rock Road, Vaughan
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>

                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button" >View Details</div>
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                      <div class="ui fluid image">
                        <div class="ui red ribbon label">
                          Top Pick
                        </div>
                        <img src={topListingThree} />

                      </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$599,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          2161 Yonge Street, Toronto
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        </div>
                      </div>

                        </div>
                      </div>


  <div class="three column row">
    <div class="one wide column">
      <button class ="ui animated blue big icon button">
            <div class="visible content">
             <i class="microphone icon"></i>
            </div>
            <div class = "hidden content">
             <i class = "pause icon"></i>
            </div>
      </button>
    </div>
    <div class="twelve wide column">
      <div class="ui fluid big blue icon input">
        <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
        <i class="inverted circular search link icon">
        </i>
      </div>
    </div>
    <div class="three wide column">
      <button class="ui animated big blue button" onClick={this.handleSave}>
        <div class="visible content">
          Search
        </div>
        <div class="hidden content">
          <i class = "search icon"></i>
        </div>
      </button>

    </div>
</div>
    <div class="one column row">
      <div class="column">
        <h2>Your search: {this.state.text}</h2>
        <h2>Top properties based on your search: Listings with 3 bedrooms </h2>

      </div>
    </div>

    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">

          <img src={House2} />
        </div>
        <div class="content">
          <div class="header">
            House
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$699,000</a>
          </div>
          <div class="description">
            <b>3</b> Bedroom <b>2</b> Bathroom <b>2,000</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                          <i class="subway icon"></i>
                          less than 12 km away
                        </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
          37 Heatherglen Rd, Toronto
          </a>
          <i class="map marker alternate icon" style={{color:'blue'}}></i>
          </span>
          <br></br>
          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       

        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
          From MLSListings
        </div>
        <img src={apartments2} />
        </div>
        <div class="content">
        <div class="header">
          Condo/Townhome
        </div>
        <div class="meta">
          <a style={{color: 'red'}}>$449,000</a>
        </div>
        <div class="description">
          <b>3</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
        <a style={{color:'blue'}}>
          228 Steeles Ave W, Toronto
          </a>
          <i class="map marker alternate icon" style={{color:'blue'}}></i>
        </span>
        <br></br>
        <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       

      </div>
    </div>

    </div>
    <div class="column">

    <div class="ui link card">
      <div class="image">

        <img src={apartments10} />
      </div>
      <div class="content">
        <div class="header">
        Condo/Townhome
        </div>
        <div class="meta">
          <a style={{color: 'red'}}>$599,000</a>
        </div>
        <div class="description">
          <b>3</b> Bedroom <b>2</b> Bathroom <b>1,800</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
          70 Drewry Ave, Toronto
          </a>
          <i class="map marker alternate icon" style={{color:'blue'}}></i>
        </span>
        <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                   
      </div>
    </div>

      </div>
    </div>



    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
                              From Home Owner
                            </div>
          <img src={House3} />
        </div>
        <div class="content">
          <div class="header">
            House
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$999,000</a>
          </div>
          <div class="description">
            <b>3</b> Bedroom <b>2</b> Bathroom <b>2,200</b> sq ft
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
          <a style={{color:'blue'}}>
          39 Olsen Drive, Toronto, Ontario
          </a>
          <i class="map marker alternate icon" style={{color:'blue'}}></i>
          </span>
          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       
        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <img src={Apart5} />
        </div>
        <div class="content">
        <div class="header">
          Condo/Townhome
        </div>
        <div class="meta">
        <a style={{color: 'red'}}>$449,000</a>
        </div>
        <div class="description">
          <b>3</b> Bedroom <b>2</b> Bathroom <b>1,800</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
        151 Dan Leckie Way, Toronto, Ontario
        </a>
        <i class="map marker alternate icon"  style={{color:'blue'}}></i>
        </span>
        <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
      </div>
    </div>

    </div>
    <div class="column">

    <div class="ui link card">
      <div class="image">
      <div class="ui blue ribbon label">
          From Realtor.ca
        </div>
        <img src={apartments6} />
      </div>
      <div class="content">
        <div class="header">
        Condo/Townhome
        </div>
        <div class="meta">
          <a style={{color: 'red'}}>$599,000</a>
        </div>
        <div class="description">
          <b>3</b> Bedroom <b>2</b> Bathroom <b>1,700</b> sq ft
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
        <a style={{color:'blue'}}>
          1200 Steeles Ave E, Toronto
          </a>
          <i class="map marker alternate icon"  style={{color:'blue'}}></i>
        </span>
        <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       
      </div>
    </div>

      </div>
    </div>


    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">
          <img src={apartments7} />
        </div>
        <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$499,000</a>
          </div>
          <div class="description">
            <b>3</b> Bedroom <b>1</b> Bathroom <b>1,600</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
            5625 Yonge St, Toronto
            </a>
            <i class="map marker alternate icon" style={{color:'blue'}}></i>
          </span>
          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       
        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
          From Realtor.ca
        </div>
        <img src={apartments8} />
        </div>
        <div class="content">
        <div class="header">
          Condo/Townhome
        </div>
        <div class="meta">
        <a style={{color: 'red'}}>$530,000</a>
        </div>
        <div class="description">
          <b>3</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>

          13 Byng Ave, Toronto
          </a>
          <i class="map marker alternate icon" style={{color:'blue'}}></i>
        </span>
        <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       
      </div>
    </div>

    </div>
   

     
    </div>




  </div>
</div>


</div>


        </div>
      );

////////////////////////////////
////////// "4 Bedroom" ////////////
////////////////////////////////

    }else if(this.state.mode === '4bed'){
      return(
        <div>

<div>

<div>
<div class="ui massive menu">
  <div class="item">
    <img src={logoHere} />
    <p> CompanyName</p>
  </div>
  <a class="active item">
    Buy
  </a>
  <a class="item">
    Sell
  </a>
  <a class="item">
    Rent
  </a>
  <a class="item">
    Mortgage
  </a>
  <div class="right menu">
    <div class="ui dropdown item">
      Language <i class="dropdown icon"></i>
      <div class="menu">
        <a class="item">English</a>
        <a class="item">French</a>
        <a class="item">Russian</a>
        <a class="item">Spanish</a>
      </div>
    </div>
    <div class="item">
      <div class="ui primary button">Log In</div>
    </div>
    <div class="item">
      <div class="ui primary button">Sign Up</div>
    </div>
  </div>
</div>

<div class="ui relaxed container grid">
  <div class="one column row">
    <div class="column">

      <header className="header">
        <h2>Top listings</h2>
      </header>
    </div>
  </div>                      
  
  <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingOne} />

                        </div>
                          <div class="content">
                            <div class="header">
                              House for Sale
                              <div class="right floated">
                                <i class="circular heart icon link" style={{color: 'red'}} ></i>
                              </div>
                            </div>
                            
                            <div class="meta" >
                              <a style={{color: 'red'}}>$700,000</a>
                            </div>
                            <div class="description">
                              <b>4</b> Bedroom <b>2</b> Bathroom <b>3,000</b> sq ft
                            </div>
                          </div>

                          <div class="extra content">
                            <span class="right floated">
                              <a style={{color:'blue'}}>
                              50 Alexander Crossing, Ajax  
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                              
                            </span>
                            <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              
                            </div>

                          

                          
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingTwo} />

                        </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                            <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$630,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          Eagle Rock Road, Vaughan
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>

                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button" >View Details</div>
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                      <div class="ui fluid image">
                        <div class="ui red ribbon label">
                          Top Pick
                        </div>
                        <img src={topListingThree} />

                      </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$599,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          2161 Yonge Street, Toronto
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        </div>
                      </div>

                        </div>
                      </div>


  <div class="three column row">
    <div class="one wide column">
      <button class ="ui animated blue big icon button">
            <div class="visible content">
             <i class="microphone icon"></i>
            </div>
            <div class = "hidden content">
             <i class = "pause icon"></i>
            </div>
      </button>
    </div>
    <div class="twelve wide column">
      <div class="ui fluid big blue icon input">
        <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
        <i class="inverted circular search link icon">
        </i>
      </div>
    </div>
    <div class="three wide column">
      <button class="ui animated big blue button" onClick={this.handleSave}>
        <div class="visible content">
          Search
        </div>
        <div class="hidden content">
          <i class = "search icon"></i>
        </div>
      </button>

    </div>
</div>
    <div class="one column row">
      <div class="column">
        <h2>Your search: {this.state.text}</h2>
        <h2>Top properties based on your search: Listings with 4 bedrooms </h2>

      </div>
    </div>

    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">

          <img src={Apart9} />
        </div>
        <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$1,199,000</a>
          </div>
          <div class="description">
            <b>4</b> Bedroom <b>3</b> Bathroom <b>1,800</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
          763 Bay St 3513, Toronto, Ontario
          </a>
          <i class="map marker alternate icon" style={{color:'blue'}}></i>
          </span>
          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       
        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
          From MLSListings
        </div>
        <img src={House6} />
        </div>
        <div class="content">
        <div class="header">
          Home
        </div>
        <div class="meta">
          <a style={{color: 'red'}}>$1,449,000</a>
        </div>
        <div class="description">
          <b>4</b> Bedroom <b>2</b> Bathroom <b>3,700</b> sq ft
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
        <a style={{color:'blue'}}>
        28 Cassandra Blvd, Toronto, Ontario
        </a>
        <i class="map marker alternate icon" style={{color:'blue'}}></i>
        </span>
        <br></br>
        <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       
      </div>
    </div>

    </div>
    <div class="column">

    <div class="ui link card">
      <div class="image">

        <img src={House11} />
      </div>
      <div class="content">
        <div class="header">
        Home
        </div>
        <div class="meta">
          <a style={{color: 'red'}}>$1,699,000</a>
        </div>
        <div class="description">
          <b>4</b> Bedroom <b>2</b> Bathroom <b>2,400</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 32 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
        129 Pleasant ave, Toronto, Ontario
        </a>

        <i class="map marker alternate icon" style={{color:'blue'}}></i>
        </span>
        <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       
      </div>
    </div>

      </div>
    </div>



    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
                              From Home Owner
                            </div>
          <img src={apartments4} />
        </div>
        <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$999,000</a>
          </div>
          <div class="description">
            <b>4</b> Bedroom <b>2</b> Bathroom <b>2,100</b> sq ft
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
          <a style={{color:'blue'}}>
          10 Navy Wharf Crt 1612, Toronto, Ontario
          </a>
          <i class="map marker alternate icon" style={{color:'blue'}}></i>
          </span>
          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       
        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <img src={House8} />
        </div>
        <div class="content">
        <div class="header">
          House
        </div>
        <div class="meta">
        <a style={{color: 'red'}}>$1,549,000</a>
        </div>
        <div class="description">
          <b>4</b> Bedroom <b>4</b> Bathroom <b>2,900</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 11 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
        382 Brooke Ave, Toronto, Ontario
        </a>
        <i class="map marker alternate icon" style={{color:'blue'}}></i>

        </span>
        <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       
      </div>
    </div>

    </div>
    <div class="column">

    <div class="ui link card">
      <div class="image">
      <div class="ui blue ribbon label">
          From Realtor.ca
        </div>
        <img src={House9} />
      </div>
      <div class="content">
        <div class="header">
        House
        </div>
        <div class="meta">
          <a style={{color: 'red'}}>$1,599,000</a>
        </div>
        <div class="description">
          <b>4</b> Bedroom <b>2</b> Bathroom <b>2,400</b> sq ft
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
        <a style={{color:'blue'}}>
          1938 The Queensway, Toronto, Ontario
          </a>
          <i class="map marker alternate icon" style={{color:'blue'}}></i>
        </span>
        <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       
      </div>
    </div>

      </div>
    </div>


    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">
          <img src={House7} />
        </div>
        <div class="content">
          <div class="header">
            House
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$1,699,000</a>
          </div>
          <div class="description">
            <b>4</b> Bedroom <b>3</b> Bathroom <b>2,800</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                          <i class="subway icon"></i>
                          less than 19 km away
                        </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
          190 Northwood Drive, Toronto, Ontario
          </a>
          <i class="map marker alternate icon" style={{color:'blue'}}></i>
          </span>
          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       
        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
          From Realtor.ca
        </div>
        <img src={apartments8} />
        </div>
        <div class="content">
        <div class="header">
          Condo/Townhome
        </div>
        <div class="meta">
        <a style={{color: 'red'}}>$899,000</a>
        </div>
        <div class="description">
          <b>4</b> Bedroom <b>1</b> Bathroom <b>3,400</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 4 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
        2114 Yonge Street, Toronto, Ontario
        </a>
        <i class="map marker alternate icon" style={{color:'blue'}}></i>
        </span>
        <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       
      </div>
    </div>

    </div>
   

     
    </div>




  </div>
</div>


</div>


        </div>
      );
////////////////////////////////
////////// "Queen" ////////////
////////////////////////////////

    }else if(this.state.mode === 'queen') {

      return(
        <div>

        <div>

<div>

<div>
<div class="ui massive menu">
  <div class="item">
    <img src={logoHere} />
    <p> CompanyName</p>
  </div>
  <a class="active item">
    Buy
  </a>
  <a class="item">
    Sell
  </a>
  <a class="item">
    Rent
  </a>
  <a class="item">
    Mortgage
  </a>
  <div class="right menu">
    <div class="ui dropdown item">
      Language <i class="dropdown icon"></i>
      <div class="menu">
        <a class="item">English</a>
        <a class="item">French</a>
        <a class="item">Russian</a>
        <a class="item">Spanish</a>
      </div>
    </div>
    <div class="item">
      <div class="ui primary button">Log In</div>
    </div>
    <div class="item">
      <div class="ui primary button">Sign Up</div>
    </div>
  </div>
</div>

<div class="ui relaxed container grid">
  <div class="one column row">
    <div class="column">

      <header className="header">
        <h2>Top listings</h2>
      </header>
    </div>
  </div>                      
  
  <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingOne} />

                        </div>
                          <div class="content">
                            <div class="header">
                              House for Sale
                              <div class="right floated">
                                <i class="circular heart icon link" style={{color: 'red'}} ></i>
                              </div>
                            </div>
                            
                            <div class="meta" >
                              <a style={{color: 'red'}}>$700,000</a>
                            </div>
                            <div class="description">
                              <b>4</b> Bedroom <b>2</b> Bathroom <b>3,000</b> sq ft
                            </div>
                          </div>

                          <div class="extra content">
                            <span class="right floated">
                              <a style={{color:'blue'}}>
                              50 Alexander Crossing, Ajax  
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                              
                            </span>
                            <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              
                            </div>

                          

                          
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingTwo} />

                        </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                            <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$630,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          Eagle Rock Road, Vaughan
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>

                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button" >View Details</div>
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                      <div class="ui fluid image">
                        <div class="ui red ribbon label">
                          Top Pick
                        </div>
                        <img src={topListingThree} />

                      </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$599,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          2161 Yonge Street, Toronto
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        </div>
                      </div>

                        </div>
                      </div>

  <div class="three column row">
    <div class="one wide column">
      <button class ="ui animated blue big icon button">
            <div class="visible content">
             <i class="microphone icon"></i>
            </div>
            <div class = "hidden content">
             <i class = "pause icon"></i>
            </div>
      </button>
      <button id="stop" class ="ui animated red big icon button">
           
           <div class="visible content">
            <i class="microphone icon"></i>
           </div>
           <div class = "hidden content">
            <i class = "pause icon"></i>
           </div>
          </button> 
    </div>
    <div class="twelve wide column">
      <div class="ui fluid big blue icon input">
        <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
        <i class="inverted circular search link icon">
        </i>
      </div>
    </div>
    <div class="three wide column">
      <button class="ui animated big blue button" onClick={this.handleSave}>
        <div class="visible content">
          Search
        </div>
        <div class="hidden content">
          <i class = "search icon"></i>
        </div>
      </button>

    </div>
</div>
    <div class="one column row">
      <div class="column">
        <h2>Your search: {this.state.text}</h2>
        <h2>Top properties based on your search: Near Queen Street </h2>

      </div>
    </div>

    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">

          <img src={queenstreet5} />
        </div>
        <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$599,000</a>
          </div>
          <div class="description">
            <b>3</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
            62 Queen St W, Toronto 
            </a>
            <i class="map marker alternate icon" style={{color:'blue'}}></i>
          </span>
          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       
        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">

        <div class="image">
        <div class="ui blue ribbon label">
                              From Realtor.ca
                            </div>
        <img src={queenstreet2} />
        </div>
        <div class="content">
        <div class="header">
          Condo/Townhome
        </div>
        <div class="meta">
          <a style={{color: 'red'}}>$449,000</a>
        </div>
        <div class="description">
          <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
        37 Queen St W, Toronto 
        </a>
        <i class="map marker alternate icon" style={{color:'blue'}}></i>
        </span>
        <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       
      </div>
    </div>

    </div>
    <div class="column">

    <div class="ui link card">
      <div class="image">
      <div class="ui blue ribbon label">
          From MLSListings
        </div>
        <img src={queenstreet3} />
      </div>
      <div class="content">
        <div class="header">
        Condo/Townhome
        </div>
        <div class="meta">
          <a style={{color: 'red'}}>$449,000</a>
        </div>
        <div class="description">
          <b>3</b> Bedroom <b>2</b> Bathroom <b>1,800</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
          140 Yonge St, Toronto
          </a>
          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       

      </div>
    </div>

      </div>
    </div>



    <div class="three column row">
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
                              From Kijiji
                            </div>
          <img src={queenstreet4} />
        </div>
        <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$449,000</a>
          </div>
          <div class="description">
            <b>3</b> Bedroom <b>2</b> Bathroom <b>1,300</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
            78 Queen St W, Toronto
            </a>
            <i class="map marker alternate icon"></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       

        </div>
      </div>
      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <img src={queenstreet6} />
        </div>
        <div class="content">
        <div class="header">
          Condo/Townhome
        </div>
        <div class="meta">
        <a style={{color: 'red'}}>$449,000</a>
        </div>
        <div class="description">
          <b>3</b> Bedroom <b>2</b> Bathroom <b>1,800</b> sq ft
        </div>
      </div>
      <div class="extra content">
      <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
        <span class="right floated">
        <a style={{color:'blue'}}>
          140 Yonge Street, Toronto
          </a>
          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       

      </div>
    </div>

    </div>


      
    </div>


  </div>
</div>


</div>


        </div>
        </div>
      );
////////////////////////////////
////////// "Houses" ////////////
////////////////////////////////


}else if(this.state.mode === 'house') {

  return(
    <div>

            <div>
              <div class="ui massive menu">
                <div class="item">
                  <img src={logoHere} />
                  <p> CompanyName</p>
                </div>
                <a class="active item">
                  Buy
                </a>
                <a class="item">
                  Sell
                </a>
                <a class="item">
                  Rent
                </a>
                <a class="item">
                  Mortgage
                </a>
                <div class="right menu">
                  <div class="ui dropdown item">
                    Language <i class="dropdown icon"></i>
                    <div class="menu">
                      <a class="item">English</a>
                      <a class="item">French</a>
                      <a class="item">Russian</a>
                      <a class="item">Spanish</a>
                    </div>
                  </div>
                  <div class="item">
                    <div class="ui primary button">Log In</div>
                  </div>
                  <div class="item">
                    <div class="ui primary button">Sign Up</div>
                  </div>
                </div>
              </div>

              <div class="ui relaxed container grid">
                <div class="one column row">
                  <div class="column">

                    <header className="header">
                      <h2>Top listings</h2>
                    </header>
                  </div>
                </div>


                          <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingOne} />

                        </div>
                          <div class="content">
                            <div class="header">
                              House for Sale
                              <div class="right floated">
                                <i class="circular heart icon link" style={{color: 'red'}} ></i>
                              </div>
                            </div>
                            
                            <div class="meta" >
                              <a style={{color: 'red'}}>$700,000</a>
                            </div>
                            <div class="description">
                              <b>4</b> Bedroom <b>2</b> Bathroom <b>3,000</b> sq ft
                            </div>
                          </div>

                          <div class="extra content">
                            <span class="right floated">
                              <a style={{color:'blue'}}>
                              50 Alexander Crossing, Ajax  
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                              
                            </span>
                            <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              
                            </div>

                          

                          
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingTwo} />

                        </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                            <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$630,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          Eagle Rock Road, Vaughan
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>

                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button" >View Details</div>
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                      <div class="ui fluid image">
                        <div class="ui red ribbon label">
                          Top Pick
                        </div>
                        <img src={topListingThree} />

                      </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$599,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          2161 Yonge Street, Toronto
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        </div>
                      </div>

                        </div>
                      </div>



                <div class="three column row">
                  <div class="one wide column">
                    <button class ="ui animated blue big icon button">
                      <div class="visible content">
                        <i class="microphone icon"></i>
                      </div>
                      <div class = "hidden content">
                        <i class = "pause icon"></i>
                      </div>
                    </button>
                  </div>
                  <div class="twelve wide column">
                    <div class="ui fluid big blue icon input">
                      <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
                      <i class="inverted circular search link icon">
                      </i>
                    </div>
                  </div>
                  <div class="three wide column">
                    <button class="ui animated big blue button" onClick={this.handleSave}>
                      <div class="visible content">
                        Search
                      </div>
                      <div class="hidden content">
                        <i class = "search icon"></i>
                      </div>
                    </button>

                  </div>
    </div>
                  <div class="one column row">
                    <div class="column">
                      <h2>Your search: {this.state.text}</h2>
                      <h2>Top properties based on your search: Listings of all the Houses </h2>

                    </div>
                  </div>

                  <div class="three column row">
                    <div class="column">

                    <div class="ui link card">
                      <div class="image">
                        <div class="ui blue ribbon label">
                          From MLSListings
                        </div>
                        <img src={house1} />
                      </div>
                      <div class="content">
                        <div class="header">
                          House
                        </div>
                        <div class="meta">
                          <a style={{color: 'red'}}>$1,499,000</a>
                        </div>
                        <div class="description">
                          <b>5</b> Bedroom <b>3</b> Bathroom <b>3,900</b> sq ft
                        </div>
                      </div>
                      <div class="extra content">
                      <a>
                      <i class="hospital icon"></i>
                      less than 5 km away
                    </a>
                        <span class="right floated">
                        <a style={{color:'blue'}}>
                          10 Eastview Cres, Toronto
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       

                      </div>
                    </div>
                    </div>
                    <div class="column">

                    <div class="ui link card">
                      <div class="image">
                      <img src={house3} />
                      </div>
                      <div class="content">
                      <div class="header">
                        House
                      </div>
                      <div class="meta">
                        <a style={{color: 'red'}}>$2,199,000</a>
                      </div>
                      <div class="description">
                        <b>5</b> Bedroom <b>4</b> Bathroom <b>4,200</b> sq ft
                      </div>
                    </div>
                    <div class="extra content">
                      <span class="right floated">
                      <a style={{color:'blue'}}>
                        58 Golfdale Rd, Toronto
                        </a>
                        <i class="map marker alternate icon" style={{color:'blue'}}></i>
                      </span>
                      <br></br>
                      <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       
                    </div>
                  </div>

                  </div>
                  <div class="column">

                  <div class="ui link card">
                    <div class="image">
                      <img src={house5} />
                    </div>
                    <div class="content">
                      <div class="header">
                      House
                      </div>
                      <div class="meta">
                        <a style={{color: 'red'}}>$1,599,000</a>
                      </div>
                      <div class="description">
                        <b>6</b> Bedroom <b>4</b> Bathroom <b>4,500</b> sq ft
                      </div>
                    </div>
                    <div class="extra content">
                    <a>
                      <i class="subway icon"></i>
                      less than 2 km away
                    </a>
                      <span class="right floated">
                      <a style={{color:'blue'}}>
                        28 Roslin Ave, Toronto
                        </a>
                        <i class="map marker alternate icon" style={{color:'blue'}}></i>
                      </span>
                      <br></br>
                      <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                    </div>
                  </div>

                    </div>
                  </div>



                  <div class="three column row">
                    <div class="column">

                    <div class="ui link card">
                      <div class="image">
                      <div class="ui blue ribbon label">
                          From Home Owner
                        </div>
                        <img src={house6} />
                      </div>
                      <div class="content">
                        <div class="header">
                          House
                        </div>
                        <div class="meta">
                          <a style={{color: 'red'}}>$1,399,000</a>
                        </div>
                        <div class="description">
                          <b>5</b> Bedroom <b>4</b> Bathroom <b>3,800</b> sq ft
                        </div>
                      </div>
                      <div class="extra content">
                        <span class="right floated">
                        <a style={{color:'blue'}}>
                          104 Mount Pleasant Rd, Toronto
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                        </span>
                        <br></br>
                        <br></br>
                          <div class="ui large fluid green button">View Details</div>
                      </div>
                    </div>
                    </div>
                    <div class="column">

                    <div class="ui link card">
                      <div class="image">
                      <img src={house4} />
                      </div>
                      <div class="content">
                      <div class="header">
                        House
                      </div>
                      <div class="meta">
                      <a style={{color: 'red'}}>$999,000</a>
                      </div>
                      <div class="description">
                        <b>5</b> Bedroom <b>2</b> Bathroom <b>3,800</b> sq ft
                      </div>
                    </div>
                    <div class="extra content">
                      <span class="right floated">
                      <a style={{color:'blue'}}>
                        10 Oaken Ftwy, Toronto
                        </a>
                        <i class="map marker alternate icon" style={{color:'blue'}}></i>
                      </span>
                      <br></br>
                      <br></br>
                          <div class="ui large fluid green button">View Details</div>
                    </div>
                  </div>

                  </div>
                  <div class="column">

                  <div class="ui link card">
                    <div class="image">
                    <div class="ui blue ribbon label">
                      From Kijiji
                    </div>
                      <img src={house2} />
                    </div>
                    <div class="content">
                      <div class="header">
                        House
                      </div>
                      <div class="meta">
                        <a style={{color: 'red'}}>$899,000</a>
                      </div>
                      <div class="description">
                        <b>4</b> Bedroom <b>2</b> Bathroom <b>3,100</b> sq ft
                      </div>
                    </div>
                    <div class="extra content">
                    <a>
                      <i class="subway icon"></i>
                      less than 2 km away
                    </a>
                      <span class="right floated">
                      <a style={{color:'blue'}}>
                        308 Fenn Ave, Toronto
                        </a>
                        <i class="map marker alternate icon" style={{color:'blue'}}></i>
                      </span>
                      <br></br>
                      <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                    </div>
                  </div>

                    </div>
                  </div>







                </div>
              </div>


    </div>
  );
////////////////////////////////
////////// "York mills" ////////////
////////////////////////////////


    }else if(this.state.mode === 'York mills') {

      return(
        <div>

                <div>
                  <div class="ui massive menu">
                    <div class="item">
                      <img src={logoHere} />
                      <p> CompanyName</p>
                    </div>
                    <a class="active item">
                      Buy
                    </a>
                    <a class="item">
                      Sell
                    </a>
                    <a class="item">
                      Rent
                    </a>
                    <a class="item">
                      Mortgage
                    </a>
                    <div class="right menu">
                      <div class="ui dropdown item">
                        Language <i class="dropdown icon"></i>
                        <div class="menu">
                          <a class="item">English</a>
                          <a class="item">French</a>
                          <a class="item">Russian</a>
                          <a class="item">Spanish</a>
                        </div>
                      </div>
                      <div class="item">
                        <div class="ui primary button">Log In</div>
                      </div>
                      <div class="item">
                        <div class="ui primary button">Sign Up</div>
                      </div>
                    </div>
                  </div>

                  <div class="ui relaxed container grid">
                    <div class="one column row">
                      <div class="column">

                        <header className="header">
                          <h2>Top listings</h2>
                        </header>
                      </div>
                    </div>
                    
                    
                    <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingOne} />

                        </div>
                          <div class="content">
                            <div class="header">
                              House for Sale
                              <div class="right floated">
                                <i class="circular heart icon link" style={{color: 'red'}} ></i>
                              </div>
                            </div>
                            
                            <div class="meta" >
                              <a style={{color: 'red'}}>$700,000</a>
                            </div>
                            <div class="description">
                              <b>4</b> Bedroom <b>2</b> Bathroom <b>3,000</b> sq ft
                            </div>
                          </div>

                          <div class="extra content">
                            <span class="right floated">
                              <a style={{color:'blue'}}>
                              50 Alexander Crossing, Ajax  
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                              
                            </span>
                            <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              
                            </div>

                          

                          
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingTwo} />

                        </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                            <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$630,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          Eagle Rock Road, Vaughan
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>

                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button" >View Details</div>
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                      <div class="ui fluid image">
                        <div class="ui red ribbon label">
                          Top Pick
                        </div>
                        <img src={topListingThree} />

                      </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$599,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          2161 Yonge Street, Toronto
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        </div>
                      </div>

                        </div>
                      </div>

                    <div class="three column row">
                      <div class="one wide column">
                        <button class ="ui animated blue big icon button">
                          <div class="visible content">
                            <i class="microphone icon"></i>
                          </div>
                          <div class = "hidden content">
                            <i class = "pause icon"></i>
                          </div>
                        </button>
                      </div>
                      <div class="twelve wide column">
                        <div class="ui fluid big blue icon input">
                          <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
                          <i class="inverted circular search link icon">
                          </i>
                        </div>
                      </div>
                      <div class="three wide column">
                        <button class="ui animated big blue button" onClick={this.handleSave}>
                          <div class="visible content">
                            Search
                          </div>
                          <div class="hidden content">
                            <i class = "search icon"></i>
                          </div>
                        </button>

                      </div>
        </div>
                      <div class="one column row">
                        <div class="column">
                          <h2>Your search: {this.state.text}</h2>
                          <h2>Top properties based on your search: </h2>

                        </div>
                      </div>

                      <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                            <div class="ui blue ribbon label">
                              From MLSListings
                            </div>
                            <img src={house1} />
                          </div>
                          <div class="content">
                            <div class="header">
                              House
                            </div>
                            <div class="meta">
                              <a style={{color: 'red'}}>$1,499,000</a>
                            </div>
                            <div class="description">
                              <b>5</b> Bedroom <b>3</b> Bathroom <b>3,900</b> sq ft
                            </div>
                          </div>
                          <div class="extra content">
                          <a>
                          <i class="hospital icon"></i>
                          less than 5 km away
                        </a>
                            <span class="right floated">
                            <a style={{color:'blue'}}>
                              10 Eastview Cres, Toronto
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                            </span>
                            <br></br>
                            <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                          </div>
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                          <img src={house3} />
                          </div>
                          <div class="content">
                          <div class="header">
                            House
                          </div>
                          <div class="meta">
                            <a style={{color: 'red'}}>$2,199,000</a>
                          </div>
                          <div class="description">
                            <b>5</b> Bedroom <b>4</b> Bathroom <b>4,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                            58 Golfdale Rd, Toronto
                            </a>
                            <i class="map marker alternate icon"  style={{color:'blue'}}></i>

                          </span>
                          <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                        <div class="image">
                          <img src={house5} />
                        </div>
                        <div class="content">
                          <div class="header">
                          House
                          </div>
                          <div class="meta">
                            <a style={{color: 'red'}}>$1,599,000</a>
                          </div>
                          <div class="description">
                            <b>6</b> Bedroom <b>4</b> Bathroom <b>4,500</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                            28 Roslin Ave, Toronto
                            </a>
                          
                            <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       

                        </div>
                      </div>

                        </div>
                      </div>



                      <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                          <div class="ui blue ribbon label">
                              From Home Owner
                            </div>
                            <img src={house6} />
                          </div>
                          <div class="content">
                            <div class="header">
                              House
                            </div>
                            <div class="meta">
                              <a style={{color: 'red'}}>$1,399,000</a>
                            </div>
                            <div class="description">
                              <b>5</b> Bedroom <b>3</b> Bathroom <b>3,400</b> sq ft
                            </div>
                          </div>
                          <div class="extra content">
                            <span class="right floated">
                            <a style={{color:'blue'}}>
                              104 Mount Pleasant Rd, Toronto
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                            </span>
                            <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       

                          </div>
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                          <img src={house4} />
                          </div>
                          <div class="content">
                          <div class="header">
                            House
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$999,000</a>
                          </div>
                          <div class="description">
                            <b>5</b> Bedroom <b>2</b> Bathroom <b>3,800</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                            10 Oaken Ftwy, Toronto
                            </a>
                            <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                        <div class="image">
                        <div class="ui blue ribbon label">
                          From Kijiji
                        </div>
                          <img src={house2} />
                        </div>
                        <div class="content">
                          <div class="header">
                            House
                          </div>
                          <div class="meta">
                            <a style={{color: 'red'}}>$899,000</a>
                          </div>
                          <div class="description">
                            <b>4</b> Bedroom <b>2</b> Bathroom <b>3,100</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                          <i class="subway icon"></i>
                          less than 2 km away
                        </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                            308 Fenn Ave, Toronto
                            </a>
                            <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       

                        </div>
                      </div>

                        </div>
                      </div>







                    </div>
                  </div>


        </div>
      );

      ////////////////////////////////
////////// "View" ////////////
////////////////////////////////

  }else if(this.state.mode === 'view') {
      if(variable[0] === "H"){
        return(
          <div>

                  <div>
                    <div class="ui massive menu">
                      <div class="item">
                        <img src={logoHere} />
                        <p> CompanyName</p>
                      </div>
                      <a class="active item">
                        Buy
                      </a>
                      <a class="item">
                        Sell
                      </a>
                      <a class="item">
                        Rent
                      </a>
                      <a class="item">
                        Mortgage
                      </a>
                      <div class="right menu">
                        <div class="ui dropdown item">
                          Language <i class="dropdown icon"></i>
                          <div class="menu">
                            <a class="item">English</a>
                            <a class="item">French</a>
                            <a class="item">Russian</a>
                            <a class="item">Spanish</a>
                          </div>
                        </div>
                        <div class="item">
                          <div class="ui primary button">Log In</div>
                        </div>
                        <div class="item">
                          <div class="ui primary button">Sign Up</div>
                        </div>
                      </div>
                    </div>

                    <div class="ui relaxed container grid">
                      <div class="one column row">
                        <div class="column">

                          <header className="header">
                            <h2>Top listings</h2>
                          </header>
                        </div>
                      </div>


                                <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingOne} />

                        </div>
                          <div class="content">
                            <div class="header">
                              House for Sale
                              <div class="right floated">
                                <i class="circular heart icon link" style={{color: 'red'}} ></i>
                              </div>
                            </div>
                            
                            <div class="meta" >
                              <a style={{color: 'red'}}>$700,000</a>
                            </div>
                            <div class="description">
                              <b>4</b> Bedroom <b>2</b> Bathroom <b>3,000</b> sq ft
                            </div>
                          </div>

                          <div class="extra content">
                            <span class="right floated">
                              <a style={{color:'blue'}}>
                              50 Alexander Crossing, Ajax  
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                              
                            </span>
                            <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              
                            </div>

                          

                          
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingTwo} />

                        </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                            <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$630,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          Eagle Rock Road, Vaughan
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>

                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button" >View Details</div>
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                      <div class="ui fluid image">
                        <div class="ui red ribbon label">
                          Top Pick
                        </div>
                        <img src={topListingThree} />

                      </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$599,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          2161 Yonge Street, Toronto
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        </div>
                      </div>

                        </div>
                      </div>

                      <div class="three column row">
                        <div class="one wide column">
                          <button class ="ui animated blue big icon button">
                            <div class="visible content">
                              <i class="microphone icon"></i>
                            </div>
                            <div class = "hidden content">
                              <i class = "pause icon"></i>
                            </div>
                          </button>
                        </div>
                        <div class="twelve wide column">
                          <div class="ui fluid big blue icon input">
                            <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
                            <i class="inverted circular search link icon">
                            </i>
                          </div>
                        </div>
                        <div class="three wide column">
                          <button class="ui animated big blue button" onClick={this.handleSave}>
                            <div class="visible content">
                              Search
                            </div>
                            <div class="hidden content">
                              <i class = "search icon"></i>
                            </div>
                          </button>

                        </div>
          </div>
                        <div class="one column row">
                          <div class="column">
                            <h2>Your search: {this.state.text}</h2>
                            <h2>Top properties based on your search: </h2>

                          </div>
                        </div>

                        <div class="three column row">
                          <div class="column">

                          <div class="ui link card">
                            <div class="image">
                              <div class="ui blue ribbon label">
                                From MLSListings
                              </div>
                              <img src={house1} />
                            </div>
                            <div class="content">
                              <div class="header">
                                House
                              </div>
                              <div class="meta">
                                <a style={{color: 'red'}}>$1,499,000</a>
                              </div>
                              <div class="description">
                                <b>5</b> Bedroom <b>3</b> Bathroom <b>3,900</b> sq ft
                              </div>
                            </div>
                            <div class="extra content">
                            <a>
                            <i class="hospital icon"></i>
                            less than 5 km away
                          </a>
                              <span class="right floated">
                              <a style={{color:'blue'}}>
                                10 Eastview Cres, Toronto
                                </a>
                                <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       

                            </div>
                          </div>
                          </div>
                          <div class="column">

                          <div class="ui link card">
                            <div class="image">
                            <img src={house3} />
                            </div>
                            <div class="content">
                            <div class="header">
                              House
                            </div>
                            <div class="meta">
                              <a style={{color: 'red'}}>$2,199,000</a>
                            </div>
                            <div class="description">
                              <b>5</b> Bedroom <b>4</b> Bathroom <b>4,200</b> sq ft
                            </div>
                          </div>
                          <div class="extra content">
                            <span class="right floated">
                            <a style={{color:'blue'}}>
                              58 Golfdale Rd, Toronto
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                            </span>
                            <br></br>
                            <br></br>
                          <div class="ui large fluid green button">View Details</div>
                          </div>
                        </div>

                        </div>
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                            <img src={house5} />
                          </div>
                          <div class="content">
                            <div class="header">
                            House
                            </div>
                            <div class="meta">
                              <a style={{color: 'red'}}>$1,599,000</a>
                            </div>
                            <div class="description">
                              <b>6</b> Bedroom <b>4</b> Bathroom <b>4,500</b> sq ft
                            </div>
                          </div>
                          <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                            <span class="right floated">
                            <a style={{color:'blue'}}>
                              28 Roslin Ave, Toronto
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       

                          </div>
                        </div>

                          </div>
                        </div>



                        <div class="three column row">
                          <div class="column">

                          <div class="ui link card">
                            <div class="image">
                            <div class="ui blue ribbon label">
                                From Home Owner
                              </div>
                              <img src={house6} />
                            </div>
                            <div class="content">
                              <div class="header">
                                House
                              </div>
                              <div class="meta">
                                <a style={{color: 'red'}}>$1,399,000</a>
                              </div>
                              <div class="description">
                                <b>5</b> Bedroom <b>3</b> Bathroom <b>3,400</b> sq ft
                              </div>
                            </div>
                            <div class="extra content">
                              <span class="right floated">
                              <a style={{color:'blue'}}>
                                104 Mount Pleasant Rd, Toronto
                                </a>
                                <i class="map marker alternate icon" style={{color:'blue'}}></i>
                              </span>
                              <br></br>
                              <br></br>
                          <div class="ui large fluid green button">View Details</div>

                            </div>
                          </div>
                          </div>
                          <div class="column">

                          <div class="ui link card">
                            <div class="image">
                            <img src={house4} />
                            </div>
                            <div class="content">
                            <div class="header">
                              House
                            </div>
                            <div class="meta">
                            <a style={{color: 'red'}}>$999,000</a>
                            </div>
                            <div class="description">
                              <b>5</b> Bedroom <b>2</b> Bathroom <b>3,800</b> sq ft
                            </div>
                          </div>
                          <div class="extra content">
                            <span class="right floated">
                            <a style={{color:'blue'}}>
                              10 Oaken Ftwy, Toronto
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                            </span>
                            <br></br>
                            <br></br>
                          <div class="ui large fluid green button">View Details</div>
                          </div>
                        </div>

                        </div>
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                          <div class="ui blue ribbon label">
                            From Kijiji
                          </div>
                            <img src={house2} />
                          </div>
                          <div class="content">
                            <div class="header">
                              House
                            </div>
                            <div class="meta">
                              <a style={{color: 'red'}}>$899,000</a>
                            </div>
                            <div class="description">
                              <b>4</b> Bedroom <b>2</b> Bathroom <b>3,100</b> sq ft
                            </div>
                          </div>
                          <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                            <span class="right floated">
                            <a style={{color:'blue'}}>
                              308 Fenn Ave, Toronto
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>

                          </div>
                        </div>

                          </div>
                        </div>







                      </div>
                    </div>


          </div>
        );
      }else if(variable[0] === "Q"){
        return(
          <div>

          <div>

<div>

<div>
  <div class="ui massive menu">
    <div class="item">
      <img src={logoHere} />
      <p> CompanyName</p>
    </div>
    <a class="active item">
      Buy
    </a>
    <a class="item">
      Sell
    </a>
    <a class="item">
      Rent
    </a>
    <a class="item">
      Mortgage
    </a>
    <div class="right menu">
      <div class="ui dropdown item">
        Language <i class="dropdown icon"></i>
        <div class="menu">
          <a class="item">English</a>
          <a class="item">French</a>
          <a class="item">Russian</a>
          <a class="item">Spanish</a>
        </div>
      </div>
      <div class="item">
        <div class="ui primary button">Log In</div>
      </div>
      <div class="item">
        <div class="ui primary button">Sign Up</div>
      </div>
    </div>
  </div>

  <div class="ui relaxed container grid">
    <div class="one column row">
      <div class="column">

        <header className="header">
          <h2>Top listings</h2>
        </header>
      </div>
    </div>                      
    
    <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingOne} />

                        </div>
                          <div class="content">
                            <div class="header">
                              House for Sale
                              <div class="right floated">
                                <i class="circular heart icon link" style={{color: 'red'}} ></i>
                              </div>
                            </div>
                            
                            <div class="meta" >
                              <a style={{color: 'red'}}>$700,000</a>
                            </div>
                            <div class="description">
                              <b>4</b> Bedroom <b>2</b> Bathroom <b>3,000</b> sq ft
                            </div>
                          </div>

                          <div class="extra content">
                            <span class="right floated">
                              <a style={{color:'blue'}}>
                              50 Alexander Crossing, Ajax  
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                              
                            </span>
                            <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              
                            </div>

                          

                          
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingTwo} />

                        </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                            <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$630,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          Eagle Rock Road, Vaughan
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>

                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button" >View Details</div>
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                      <div class="ui fluid image">
                        <div class="ui red ribbon label">
                          Top Pick
                        </div>
                        <img src={topListingThree} />

                      </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$599,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          2161 Yonge Street, Toronto
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        </div>
                      </div>

                        </div>
                      </div>



    <div class="three column row">
      <div class="one wide column">
        <button class ="ui animated blue big icon button">
              <div class="visible content">
               <i class="microphone icon"></i>
              </div>
              <div class = "hidden content">
               <i class = "pause icon"></i>
              </div>
        </button>
      </div>
      <div class="twelve wide column">
        <div class="ui fluid big blue icon input">
          <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
          <i class="inverted circular search link icon">
          </i>
        </div>
      </div>
      <div class="three wide column">
        <button class="ui animated big blue button" onClick={this.handleSave}>
          <div class="visible content">
            Search
          </div>
          <div class="hidden content">
            <i class = "search icon"></i>
          </div>
        </button>

      </div>
</div>
      <div class="one column row">
        <div class="column">
          <h2>Your search: {this.state.text}</h2>
          <h2>Top properties based on your search: </h2>

        </div>
      </div>

      <div class="three column row">
        <div class="column">

        <div class="ui link card">
          <div class="image">

            <img src={queenstreet5} />
          </div>
          <div class="content">
            <div class="header">
              Condo/Townhome
            </div>
            <div class="meta">
              <a style={{color: 'red'}}>$599,000</a>
            </div>
            <div class="description">
              <b>3</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
            </div>
          </div>
          <div class="extra content">
          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
            <span class="right floated">
            <a style={{color:'blue'}}>
              62 Queen St W, Toronto
              </a>
              <i class="map marker alternate icon" style={{color:'blue'}}></i> 
            </span>
            <br></br>
            <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
          </div>
        </div>
        </div>
        <div class="column">

        <div class="ui link card">

          <div class="image">
          <div class="ui blue ribbon label">
                                From Realtor.ca
                              </div>
          <img src={queenstreet2} />
          </div>
          <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$449,000</a>
          </div>
          <div class="description">
            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
          37 Queen St W, Toronto 
          </a>
          <i class="map marker alternate icon" style={{color:'blue'}}></i>
          </span>
          <br></br>
          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
        </div>
      </div>

      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
            From MLSListings
          </div>
          <img src={queenstreet3} />
        </div>
        <div class="content">
          <div class="header">
          Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$449,000</a>
          </div>
          <div class="description">
            <b>3</b> Bedroom <b>2</b> Bathroom <b>1,800</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
            140 Yonge St, Toronto
            </a>
            <i class="map marker alternate icon" style={{color:'blue'}}></i>
          </span>
          <br></br>
          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
        </div>
      </div>

        </div>
      </div>



      <div class="three column row">
        <div class="column">

        <div class="ui link card">
          <div class="image">
          <div class="ui blue ribbon label">
                                From Kijiji
                              </div>
            <img src={queenstreet4} />
          </div>
          <div class="content">
            <div class="header">
              Condo/Townhome
            </div>
            <div class="meta">
              <a style={{color: 'red'}}>$449,000</a>
            </div>
            <div class="description">
              <b>3</b> Bedroom <b>2</b> Bathroom <b>1,300</b> sq ft
            </div>
          </div>
          <div class="extra content">
          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
            <span class="right floated">
            <a style={{color:'blue'}}>
              78 Queen St W, Toronto
              </a>
              <i class="map marker alternate icon" style={{color:'blue'}}></i>
            </span>
            <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       
          </div>
        </div>
        </div>
        <div class="column">

        <div class="ui link card">
          <div class="image">
          <img src={queenstreet6} />
          </div>
          <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
          <a style={{color: 'red'}}>$449,000</a>
          </div>
          <div class="description">
            <b>3</b> Bedroom <b>2</b> Bathroom <b>1,800</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
            140 Yonge Street, Toronto
            </a>
            <i class="map marker alternate icon" style={{color:'blue'}}></i>
          </span>
          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
        </div>
      </div>

      </div>


        
      </div>


    </div>
  </div>


</div>


          </div>
          </div>
        );
      }else if(variable[0] === "K"){
        return(
          <div>

          <div>

<div>

<div>
  <div class="ui massive menu">
    <div class="item">
      <img src={logoHere} />
      <p> CompanyName</p>
    </div>
    <a class="active item">
      Buy
    </a>
    <a class="item">
      Sell
    </a>
    <a class="item">
      Rent
    </a>
    <a class="item">
      Mortgage
    </a>
    <div class="right menu">
      <div class="ui dropdown item">
        Language <i class="dropdown icon"></i>
        <div class="menu">
          <a class="item">English</a>
          <a class="item">French</a>
          <a class="item">Russian</a>
          <a class="item">Spanish</a>
        </div>
      </div>
      <div class="item">
        <div class="ui primary button">Log In</div>
      </div>
      <div class="item">
        <div class="ui primary button">Sign Up</div>
      </div>
    </div>
  </div>

  <div class="ui relaxed container grid">
    <div class="one column row">
      <div class="column">

        <header className="header">
          <h2>Top listings</h2>
        </header>
      </div>
    </div>    


              <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingOne} />

                        </div>
                          <div class="content">
                            <div class="header">
                              House for Sale
                              <div class="right floated">
                                <i class="circular heart icon link" style={{color: 'red'}} ></i>
                              </div>
                            </div>
                            
                            <div class="meta" >
                              <a style={{color: 'red'}}>$700,000</a>
                            </div>
                            <div class="description">
                              <b>4</b> Bedroom <b>2</b> Bathroom <b>3,000</b> sq ft
                            </div>
                          </div>

                          <div class="extra content">
                            <span class="right floated">
                              <a style={{color:'blue'}}>
                              50 Alexander Crossing, Ajax  
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                              
                            </span>
                            <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              
                            </div>

                          

                          
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingTwo} />

                        </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                            <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$630,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          Eagle Rock Road, Vaughan
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>

                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button" >View Details</div>
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                      <div class="ui fluid image">
                        <div class="ui red ribbon label">
                          Top Pick
                        </div>
                        <img src={topListingThree} />

                      </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$599,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          2161 Yonge Street, Toronto
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        </div>
                      </div>

                        </div>
                      </div>


    <div class="three column row">
      <div class="one wide column">
        <button class ="ui animated blue big icon button">
              <div class="visible content">
               <i class="microphone icon"></i>
              </div>
              <div class = "hidden content">
               <i class = "pause icon"></i>
              </div>
        </button>
      </div>
      <div class="twelve wide column">
        <div class="ui fluid big blue icon input">
          <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
          <i class="inverted circular search link icon">
          </i>
        </div>
      </div>
      <div class="three wide column">
        <button class="ui animated big blue button" onClick={this.handleSave}>
          <div class="visible content">
            Search
          </div>
          <div class="hidden content">
            <i class = "search icon"></i>
          </div>
        </button>

      </div>
</div>
      <div class="one column row">
        <div class="column">
          <h2>Your search: {this.state.text}</h2>
          <h2>Top properties based on your search: </h2>

        </div>
      </div>

      <div class="three column row">
        <div class="column">

        <div class="ui link card">
          <div class="image">

            <img src={kingstreet1} />
          </div>
          <div class="content">
            <div class="header">
              Condo/Townhome
            </div>
            <div class="meta">
              <a style={{color: 'red'}}>$449,000</a>
            </div>
            <div class="description">
              <b>3</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
            </div>
          </div>
          <div class="extra content">
          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
            <span class="right floated">
            <a style={{color:'blue'}}>
              548 King St W, Toronto 
              </a>
              <i class="map marker alternate icon" style={{color:'blue'}}></i>
            </span>
            <br></br>
            <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              
          </div>
        </div>
        </div>
        <div class="column">

        <div class="ui link card">
          <div class="image">
          <div class="ui blue ribbon label">
            From MLSListings
          </div>
          <img src={kingstreet2} />
          </div>
          <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$449,000</a>
          </div>
          <div class="description">
            <b>3</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
          678 King St W, Toronto 
          </a>
          <i class="map marker alternate icon" style={{color:'blue'}}></i>
          </span>
          <br></br>
            <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              
        </div>
      </div>

      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">

          <img src={kingstreet4} />
        </div>
        <div class="content">
          <div class="header">
          Condo/Townhome
          </div>
          <div class="meta">
            <a style={{color: 'red'}}>$549,000</a>
          </div>
          <div class="description">
            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,800</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
            96 Spadina Ave, Toronto
            </a>
            <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       

        </div>
      </div>

        </div>
      </div>



      <div class="three column row">
        <div class="column">

        <div class="ui link card">
          <div class="image">
          <div class="ui blue ribbon label">
                                From Home Owner
                              </div>
            <img src={kingstreet3} />
          </div>
          <div class="content">
            <div class="header">
              Condo/Townhome
            </div>
            <div class="meta">
              <a style={{color: 'red'}}>$449,000</a>
            </div>
            <div class="description">
              
              <b>3</b> Bedroom <b>2</b> Bathroom <b>1,300</b> sq ft
            </div>
          </div>
          <div class="extra content">
          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
            <span class="right floated">
            <a style={{color:'blue'}}>
              370 King St W, Toronto
              </a>
              <i class="map marker alternate icon"  style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       

          </div>
        </div>
        </div>
        <div class="column">

        <div class="ui link card">
          <div class="image">
          <img src={kingstreet5} />
          </div>
          <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
          <a style={{color: 'red'}}>$449,000</a>
          </div>
          <div class="description">
            <b>3</b> Bedroom <b>2</b> Bathroom <b>1,800</b> sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
          <span class="right floated">
          <a style={{color:'blue'}}>
            78 Spadina Ave, Toronto
            </a>
            <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>

        </div>
      </div>

      </div>


        
      </div>


    </div>
  </div>


</div>


          </div>
          </div>
        );

      }else{
      return (
        <div>
        <div>

                <div>
                  <div class="ui massive menu">
                    <div class="item">
                      <img src={logoHere} />
                      <p> CompanyName</p>
                    </div>
                    <a class="active item">
                      Buy
                    </a>
                    <a class="item">
                      Sell
                    </a>
                    <a class="item">
                      Rent
                    </a>
                    <a class="item">
                      Mortgage
                    </a>
                    <div class="right menu">
                      <div class="ui dropdown item">
                        Language <i class="dropdown icon"></i>
                        <div class="menu">
                          <a class="item">English</a>
                          <a class="item">French</a>
                          <a class="item">Russian</a>
                          <a class="item">Spanish</a>
                        </div>
                      </div>
                      <div class="item">
                        <div class="ui primary button">Log In</div>
                      </div>
                      <div class="item">
                        <div class="ui primary button">Sign Up</div>
                      </div>
                    </div>
                  </div>

                  <div class="ui relaxed container grid">
                    <div class="one column row">
                      <div class="column">

                        <header className="header">
                          <h2>Top listings</h2>
                        </header>
                      </div>
                    </div> 
                    
                    <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingOne} />

                        </div>
                          <div class="content">
                            <div class="header">
                              House for Sale
                              <div class="right floated">
                                <i class="circular heart icon link" style={{color: 'red'}} ></i>
                              </div>
                            </div>
                            
                            <div class="meta" >
                              <a style={{color: 'red'}}>$700,000</a>
                            </div>
                            <div class="description">
                              <b>4</b> Bedroom <b>2</b> Bathroom <b>3,000</b> sq ft
                            </div>
                          </div>

                          <div class="extra content">
                            <span class="right floated">
                              <a style={{color:'blue'}}>
                              50 Alexander Crossing, Ajax  
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                              
                            </span>
                            <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              
                            </div>

                          

                          
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingTwo} />

                        </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                            <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$630,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          Eagle Rock Road, Vaughan
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>

                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button" >View Details</div>
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                      <div class="ui fluid image">
                        <div class="ui red ribbon label">
                          Top Pick
                        </div>
                        <img src={topListingThree} />

                      </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$599,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          2161 Yonge Street, Toronto
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        </div>
                      </div>

                        </div>
                      </div>



                    <div class="three column row">
                      <div class="one wide column">
                        <button class ="ui animated blue big icon button">
                              <div class="visible content">
                               <i class="microphone icon"></i>
                              </div>
                              <div class = "hidden content">
                               <i class = "pause icon"></i>
                              </div>
                        </button>
                      </div>
                      <div class="twelve wide column">
                        <div class="ui fluid big blue icon input">
                          <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
                          <i class="inverted circular search link icon">
                          </i>
                        </div>
                      </div>
                      <div class="three wide column">
                        <button class="ui animated big blue button" onClick={this.handleSave}>
                          <div class="visible content">
                            Search
                          </div>
                          <div class="hidden content">
                            <i class = "search icon"></i>
                          </div>
                        </button>

                      </div>
        </div>
                      <div class="one column row">
                        <div class="column">
                          <h2>Your search: {this.state.text}</h2>
                          <h2>Top properties based on your search: </h2>

                        </div>
                      </div>

                      <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                          <div class="ui blue ribbon label">
                            From MLSListings
                          </div>
                            <img src={apartment11} />
                          </div>
                          <div class="content">
                            <div class="header">
                              Condo/Townhome
                            </div>
                            <div class="meta">
                              <a style={{color: 'red'}}>$499,000</a>
                            </div>
                            <div class="description">
                              <b>3</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
                            </div>
                          </div>
                          <div class="extra content">
                          <a>
                            <i class="hospital icon"></i>
                            less than 5 km away
                          </a>
                            <span class="right floated">
                            <a style={{color:'blue'}}>
                              140 Bloor St E, Toronto
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        

                          </div>
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                          <img src={apartment5} />
                          </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                          </div>
                          <div class="meta">
                            <a>$449,000</a>
                          </div>
                          <div class="description">
                            2 Bedroom 2 Bathroom 1,200 sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                            170 Bloor St E, Toronto
                            </a>
                            <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          
                          </span>
                         
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                        <div class="image">
                        <div class="ui blue ribbon label">
                            From Kijiji
                          </div>
                          <img src={apartment3} />
                        </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          </div>
                          <div class="meta">
                            <a style={{color: 'red'}}a>$599,000</a>
                          </div>
                          <div class="description">
                            <b>3</b> Bedroom <b>2</b> Bathroom <b>1,800</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                            250 Cumberland St, Toronto
                            </a>
                            <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        
                        </div>
                      </div>

                        </div>
                      </div>



                      <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                            <img src={apartment4} />
                          </div>
                          <div class="content">
                            <div class="header">
                              Condo/Townhome
                            </div>
                            <div class="meta">
                              <a style={{color: 'red'}}>$499,000</a>
                            </div>
                            <div class="description">
                              <b>3</b> Bedroom <b>2</b> Bathroom <b>1,300</b> sq ft
                            </div>
                          </div>
                          <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                            <span class="right floated">
                            <a style={{color:'blue'}}>
                              7 Charles St W, Toronto
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        

                          </div>
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                          <img src={apartment3} />
                          </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                          </div>
                          <div class="meta">
                            <a style={{color: 'red'}}>$799,000</a>
                          </div>
                          <div class="description">
                            <b>3</b> Bedroom <b>2</b> Bathroom <b>1,800</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                            155 Yorkville Ave, Toronto
                            </a>
                            <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                        <div class="image">
                          <img src={apartment6} />
                        </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          </div>
                          <div class="meta">
                            <a style={{color: 'red'}}>$599,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                            825 Church St, Toronto
                            </a>
                            <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                        </div>
                      </div>

                        </div>
                      </div>


                      <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                          <div class="ui blue ribbon label">
                                From Home Owner
                              </div>
                            <img src={apartment7} />
                          </div>
                          <div class="content">
                            <div class="header">
                              Condo/Townhome
                            </div>
                            <div class="meta">
                              <a style={{color: 'red'}}>$499,000</a>
                            </div>
                            <div class="description">
                              <b>2</b> Bedroom <b>2</b> Bathroom <b>1,500</b> sq ft
                            </div>
                          </div>
                          <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                            <span class="right floated">
                            <a style={{color:'blue'}}>
                              920 Yonge Street, Toronto
                              </a>
                              <i class="map marker alternate icon"style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       

                          </div>
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                          <div class="ui blue ribbon label">
                            From Realtor.ca
                          </div>
                          <img src={apartment2} />
                          </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$399,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                            410 Bloor St W, Toronto
                            </a>
                            <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                        <div class="image">
                          <img src={apartment1} />
                        </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          </div>
                          <div class="meta">
                            <a style={{color: 'red'}}>$399,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                            495 Huron St, Toronto
                            </a>
                            <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button">View Details</div>
                       
                        </div>
                      </div>

                        </div>
                      </div>




                    </div>
                  </div>


        </div>


        </div>
      );
      }
    } else {
      return (
      <div>
       
        <div class="ui massive menu">
          <div class="item">
            <img src={logoHere} />
            <p> CompanyName</p>
          </div>
          <a class="active item">
          Buy
          </a>
          <a class="item">
          Sell
          </a>
          <a class="item">
          Rent
          </a>
          <a class="item">
          Mortgage
          </a>
          <div class="right menu">
            <div class="ui dropdown item">
              Language <i class="dropdown icon"></i>
              <div class="menu">
                <a class="item">English</a>
                <a class="item">French</a>
                <a class="item">Russian</a>
                <a class="item">Spanish</a>
              </div>
            </div>
            <div class="item">
              <div class="ui small blue button">Log In</div>
            </div>
            <div class="item">
              <div class="ui small blue button">Sign Up</div>
            </div>
          </div>
        </div>
        
        <div class="ui white relaxed container grid">
          <div class="one column row">
            <div class="column">

              <header className="header">
                <h2>Top listings</h2>
              </header>
            </div>
          </div>                      
          
          <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingOne} />

                        </div>
                          <div class="content">
                            <div class="header">
                              House for Sale
                              <div class="right floated">
                                <i class="circular heart icon link" style={{color: 'red'}} ></i>
                              </div>
                            </div>
                            
                            <div class="meta" >
                              <a style={{color: 'red'}}>$700,000</a>
                            </div>
                            <div class="description">
                              <b>4</b> Bedroom <b>2</b> Bathroom <b>3,000</b> sq ft
                            </div>
                          </div>

                          <div class="extra content">
                            <span class="right floated">
                              <a style={{color:'blue'}}>
                              50 Alexander Crossing, Ajax  
                              </a>
                              <i class="map marker alternate icon" style={{color:'blue'}}></i>
                              
                            </span>
                            <br></br>
                              <br></br>
                                <div class="ui large fluid green button">View Details</div>
                              
                            </div>

                          

                          
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingTwo} />

                        </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                            <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$630,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,400</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          Eagle Rock Road, Vaughan
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>

                          <br></br>
                          <br></br>
                          <br></br>
                          <div class="ui large fluid green button" >View Details</div>
                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                      <div class="ui fluid image">
                        <div class="ui red ribbon label">
                          Top Pick
                        </div>
                        <img src={topListingThree} />

                      </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          <div class="right floated">
                             
                              
                             <i class="circular heart icon link" style={{color: 'red'}} ></i>
                             
                           
                        
                          
                           </div>
                          </div>
                          <div class="meta">
                          <a style={{color: 'red'}}>$599,000</a>
                          </div>
                          <div class="description">
                            <b>2</b> Bedroom <b>2</b> Bathroom <b>1,200</b> sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                          <span class="right floated">
                          <a style={{color:'blue'}}>
                          2161 Yonge Street, Toronto
                          </a>
                          <i class="map marker alternate icon" style={{color:'blue'}}></i>
                          </span>
                          <br></br>
                          <br></br>
                          <br></br>
                                <div class="ui large fluid green button">View Details</div>
                        </div>
                      </div>

                        </div>
                      </div>

          <div class="white one column row">
            <div class="column">
              <h2>Search: {this.state.text}</h2>

            </div>
          </div>
       


          <div class="white three column row">
            <div class="one wide column">
            <button onClick={this.onListenClick.bind(this)} class ="ui animated blue big icon button">
                              <div class="visible content">
                               <i class="microphone icon"></i>
                              </div>
                              <div  class = "hidden content">
                               <i class = "pause icon"></i>
                              </div>
                            </button>
            <button id="stop" class ="ui animated red big icon button">
           
           <div class="visible content">
            <i class="microphone icon"></i>
           </div>
           <div class = "hidden content">
            <i class = "pause icon"></i>
           </div>
          </button> 
          
            </div>
            <div class="twelve wide column">
              <div class="ui fluid big blue icon input">
                <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
                <i class="inverted circular search link icon">
                </i>
              </div>
            </div>
            <div class="three wide column">
              <button class="ui animated big blue button" onClick={this.handleSave}>
                <div class="visible content">
                  Search
                </div>
                <div class="hidden content">
                  <i class = "search icon"></i>
                </div>
              </button>

            </div>
          </div>



          </div>
        </div>
     
      );
    }
  }
}
export default App;
