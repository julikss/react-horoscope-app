import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import List from './components/ListComponent';
import { SIGNS } from './shared/signs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signs: SIGNS
    };    
  }
  
  render() {
    return (
      <div>
        <Navbar className="bg-dark">
          <div className="container">
            <NavbarBrand className="text-white">Horoscope:)</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
            <h4 className="text-dark mb-5 mt-5">Just choose a card with your zodiac sign</h4>
          </div>
        <List signs={this.state.signs} />
      </div>
    );
  }
}

export default App;