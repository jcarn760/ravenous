import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

// temporary hard coded business
const pizzaBusiness = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

// Array of business to pass to through BusinessList
const BusArray = [pizzaBusiness, pizzaBusiness, pizzaBusiness, pizzaBusiness, pizzaBusiness, pizzaBusiness];

class App extends React.Component {
  //simulated search functionality to set up proper prop passing
  searchYelp(busName, location, sortBy) {
    console.log(`Search Yelp with ${busName}, ${location}, ${sortBy}.`);
  }
  render() {
    return (
      <div className='App'>
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList list={BusArray} />
      </div>
    );
  }
}

export default App;
