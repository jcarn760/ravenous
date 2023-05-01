import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../utils/yelpAPI';

// this is a front end react project to replicate a Yelp style app. It's designed for a user to search for a business and location and organize
// the search results based 3 choices for sorting. The application calls on the Yelp API to display real results.

class App extends React.Component {
  // constructor to update the state of each search by populating an array of businesses from yelp API
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);

  }

  //simulated search functionality to set up proper prop passing through Yelp which maps each business to the businesses array
  // with the key value pairs designated in Yelp.js
  searchYelp(term, location, sortBy) {
    Yelp.searchYelp(term, location, sortBy).then(businesses => {
      this.setState({ businesses: businesses });
    });
  }

  // rendering what is displayed on screen by calling on components and passing the required props through each component 
  render() {
    return (
      <div className='App'>
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
