import React from "react";
import Business from "../Business/Business";
import './BusinessListStyles.css'

// designed to display a collection of businesses utilizing the business component from the businesses array

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {this.props.businesses.map((businesses) => {
                    return <Business key={businesses.id} business={businesses} />
                })}
            </div>
        );
    }
}

export default BusinessList;