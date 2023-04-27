import React from "react";
import Business from "../Business/Business";
import './BusinessListStyles.css'

// designed to display a collection of businesses utilizing the business component
// multiple times to generate the list.
// using the map method to call on the prop 'list' which passes BusList array in App
// and creates a call on Business for each item in the array.

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {this.props.list.map((business) => {
                    return <Business business={business} />
                })}
            </div>
        );
    }
}

export default BusinessList;