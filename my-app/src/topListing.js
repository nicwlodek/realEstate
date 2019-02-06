import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Grid, Image, Segment } from 'semantic-ui-react'
import logoHere from "./logoHere.png";


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

class topListingComponent extends Component{
  render(){
    return(
  <div>

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
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
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
                            House for Rent
                          </div>
                          <div class="meta">
                            <span class="date">$4,500 a Month</span>
                          </div>
                          <div class="description">
                            3 Bedroom 2 Bathroom 2,800 sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <span class="right floated">
                            46 Bogert Ave, Toronto
                          </span>

                        </div>
                      </div>

                      </div>
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
                            578 King St W, Toronto
                          </span>

                        </div>
                      </div>

                        </div>
                      </div>

                      </div>
                      </div>
);
}
}
export default topListingComponent;
