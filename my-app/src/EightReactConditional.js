
//import React, { Component } from 'react';

import './App.css';
import topListingOne from "./topListing/topListing11.jpeg";
import topListingTwo from "./topListing/toplisting2.jpeg";
import topListingThree from "./topListing/toplisting3.jpeg";
import twoBedAp from './properties/2bedap.jpg';
import fourBedHouse from './properties/4BedHouse.jpeg';
import sixBedHouse from './properties/6BedHouse.jpeg';
import Priorities from './Priorities'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', inputText: '', mode:'view'};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  
  handleChange(e) {
    this.setState({ inputText: e.target.value });
  }
  
  handleSave() {
    this.setState({text: this.state.inputText, mode: 'view'});
  }

  handleEdit() {
    this.setState({mode: 'edit'});
  }
  
  render () {
    if(this.state.mode === 'view') {
      return (
        <div>
          <p>Text: {this.state.text}</p>
          <button onClick={this.handleEdit}>
            Edit
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <p>Text: {this.state.text}</p>
            <input
              onChange={this.handleChange}
              value={this.state.inputText}
            />
          <button onClick={this.handleSave}>
            Save
          </button>
        </div>
      );
    }
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);