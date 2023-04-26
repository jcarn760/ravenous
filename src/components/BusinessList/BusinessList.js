import React from "react";
import Business from "../Business/Business";
import './BusinessListStyles.css'

// designed to display a collection of businesses utilizing the business component
// multiple times to generate the list.

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        );
    }
}

export default BusinessList;