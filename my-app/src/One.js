import React, { Component } from 'react';
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


import twoBedAp from './properties/2bedap.jpg';
import fourBedHouse from './properties/4BedHouse.jpeg';
import sixBedHouse from './properties/6BedHouse.jpeg';
import Priorities from './Priorities';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Grid, Image, Segment } from 'semantic-ui-react'
import logoHere from "./logoHere.png";

class One extends Component {
  render(){
    return(
      <div>



              <div>
                <div class="ui massive menu">
                  <div class="item">
                    <img src={logoHere} />
                    <p>CompanyName</p>
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

                <div class="ui container grid">
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
                      <div class="image">
                        <img src={topListingOne} />
                      </div>
                      <div class="content">
                        <div class="header">
                          House for Sale
                        </div>
                        <div class="meta">
                          <a>$700,000</a>
                        </div>
                        <div class="description">
                          4 Bedroom 2 Bathroom 3,000 sq ft
                        </div>
                      </div>
                      <div class="extra content">
                        <span class="right floated">
                          50 Alexander Crossing, Ajax
                        </span>
                        <span>
                          <i class="hourglass half icon"></i>
                            New
                          </span>
                      </div>
                    </div>
                    </div>
                    <div class="column">

                    <div class="ui link card">
                      <div class="image">
                      <img src={topListingTwo} />
                      </div>
                      <div class="content">
                      <div class="header">
                        House for Sale
                      </div>
                      <div class="meta">
                        <span class="date">$1,100,000</span>
                      </div>
                      <div class="description">
                        3 Bedroom 2 Bathroom 2,800 sq ft
                      </div>
                    </div>
                    <div class="extra content">
                      <span class="right floated">
                        46 Bogert Ave, Toronto
                      </span>
                      <span>
                        <i class="hourglass half  icon"></i>
                        Top
                      </span>
                    </div>
                  </div>

                  </div>
                  <div class="column">

                  <div class="ui link card">
                    <div class="image">
                      <img src={topListingThree} />
                    </div>
                    <div class="content">
                      <div class="header">
                      Condo/Townhome
                      </div>
                      <div class="meta">
                        <a>$599,000</a>
                      </div>
                      <div class="description">
                        2 Bedroom 2 Bathroom 1,200 sq ft
                      </div>
                    </div>
                    <div class="extra content">
                      <span class="right floated">
                        578 King St W
                      </span>
                      <span>
                        <i class="hourglass half icon"></i>
                        New
                        </span>
                    </div>
                  </div>

                    </div>
                  </div>



                  <div class="three column row">
                    <div class="column">
                      <button class ="ui blue big icon button">
                        <i class="microphone icon"></i>
                      </button>
                    </div>
                    <div class="column">
                      <div class="ui fluid big blue icon input">
                        <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
                        <i class="inverted circular search link icon">
                        </i>
                      </div>
                    </div>
                    <div class="column">
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
                        <h4>Your search: {this.state.text}</h4>
                        <h4>Top properties based on your search: </h4>

                      </div>
                    </div>

                    <div class="three column row">
                      <div class="column">

                      <div class="ui link card">
                        <div class="image">
                          <img src={apartment11} />
                        </div>
                        <div class="content">
                          <div class="header">
                            Condo/Townhome
                          </div>
                          <div class="meta">
                            <a>$499,000</a>
                          </div>
                          <div class="description">
                            3 Bedroom 2 Bathroom 1,400 sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <span class="right floated">
                            140 Bloor St E, Toronto
                          </span>

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
                          170 Bloor St E, Toronto
                        </span>

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
                          <a>$599,000</a>
                        </div>
                        <div class="description">
                          3 Bedroom 2 Bathroom 1,800 sq ft
                        </div>
                      </div>
                      <div class="extra content">
                        <span class="right floated">
                          250 Cumberland St, Toronto
                        </span>

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
                            <a>$499,000</a>
                          </div>
                          <div class="description">
                            3 Bedroom 2 Bathroom 1,300 sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <span class="right floated">
                            7 Charles St W, Toronto
                          </span>

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
                          <span class="date">$799,000</span>
                        </div>
                        <div class="description">
                          3 Bedroom 2 Bathroom 1,800 sq ft
                        </div>
                      </div>
                      <div class="extra content">
                        <span class="right floated">
                          155 Yorkville Ave, Toronto
                        </span>

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
                          <a>$599,000</a>
                        </div>
                        <div class="description">
                          2 Bedroom 2 Bathroom 1,700 sq ft
                        </div>
                      </div>
                      <div class="extra content">
                        <span class="right floated">
                          825 Church St, Toronto
                        </span>

                      </div>
                    </div>

                      </div>
                    </div>


                    <div class="three column row">
                      <div class="column">

                      <div class="ui link card">
                        <div class="image">
                          <img src={apartment7} />
                        </div>
                        <div class="content">
                          <div class="header">
                            Condo/Townhome
                          </div>
                          <div class="meta">
                            <a>$499,000</a>
                          </div>
                          <div class="description">
                            2 Bedroom 2 Bathroom 1,500 sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <span class="right floated">
                            920 Yonge Street, Toronto
                          </span>

                        </div>
                      </div>
                      </div>
                      <div class="column">

                      <div class="ui link card">
                        <div class="image">
                        <img src={apartment2} />
                        </div>
                        <div class="content">
                        <div class="header">
                          Condo/Townhome
                        </div>
                        <div class="meta">
                          <span class="date">$399,000</span>
                        </div>
                        <div class="description">
                          2 Bedroom 2 Bathroom 1,200 sq ft
                        </div>
                      </div>
                      <div class="extra content">
                        <span class="right floated">
                          410 Bloor St W, Toronto
                        </span>

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
                          <a>$399,000</a>
                        </div>
                        <div class="description">
                          2 Bedroom 2 Bathroom 1,200 sq ft
                        </div>
                      </div>
                      <div class="extra content">
                        <span class="right floated">
                          495 Huron St, Toronto
                        </span>

                      </div>
                    </div>

                      </div>
                    </div>




                  </div>
                </div>



      </div>
    );
  }
}

export default One;
