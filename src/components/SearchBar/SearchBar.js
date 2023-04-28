import React from "react";
import "./SearchBarStyles.css";


class SearchBar extends React.Component {
    // constructor to set state of the search
    constructor(props) {
        super(props);
        this.state = {
            busName: '',
            location: '',
            sortBy: 'best_match'
        };

        // parent handlers to bind changes

        this.handleBusNameChange = this.handleBusNameChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        // list of sort options and key value pairs
        this.sortByOptions = {
            "Best Match": "best_match",
            "Highest Rated": "rating",
            "Most Reviewed": "review_count",
        };
    }

    // sets active state on the li selected for visual feedback
    getSortByClass (sortByOption) {
        if (this.state.sortBy === sortByOption) {
        return 'active';
        } else {
        return '';
        }
    }

    // handle methods to handle each search by change of any category

    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption });
    }

    handleBusNameChange(event) {
        this.setState({ busName: event.target.value });
    }

    handleLocationChange(event) {
        this.setState({ location: event.target.value });
    }

    handleSearch(event) {
        this.props.searchYelp(this.state.busName, this.state.location, this.state.sortBy);
        event.preventDefault();
    }

    // react mapping method to take the sortByOptions list of key value pairs and map li items 
    // and adding appropriate props
    renderSortByOptions = () => {
        return Object.keys(this.sortByOptions).map((sortByOption) => {
        let sortByOptionValue = this.sortByOptions[sortByOption];
        return <li className={this.getSortByClass(sortByOptionValue)}
            key={sortByOptionValue}
            onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
            {sortByOption}</li>;
        });
    }
    render() {
        return (
            <div className="SearchBar">
                {/* sorting options */}
                <div className="SearchBar-sort-options">
                    <ul>{this.renderSortByOptions()}</ul>
                </div>
                {/* search bar inputs fir business name and location */}
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleBusNameChange} />
                    <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                {/* search/submit button */}
                <div className="SearchBar-submit">
                    <button type="button" onClick={this.handleSearch}>Let's Go</button>
                </div>
            </div>
        );
    }

}

export default SearchBar;
