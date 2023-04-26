import React from "react";
import './SearchBarStyles.css';


// searchbar component to search for businesses on the Yelp platform.

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rate': 'rating',
    'Most Reviewed': 'review_count'
};


class SearchBar extends React.Component {
    renderSortByOption() {
        return Object.keys(sortByOptions).map(sortByOptions => {
            let sortByOptionValue = sortByOptions[sortByOptions];
            return <li key={{sortByOptionValue}}>{sortByOptions}</li>;
        });
    }

    render() {
        return (
            <div className="SearchBar">
                {/* sorting options */}
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOption()}
                    </ul>
                </div>
                {/* search bars for business name and location */}
                <div className="SearchBar-fields">
                    <input type="text" placeholder="Search Businesses" />
                    <input type="text" placeholder="Where?" />
                </div>
                {/* search/submit button  */}
                <div className="SearchBar-submit">
                    <button type="submit">Let's Go</button>
                </div>
            </div>
        );
    }
}

export default SearchBar;