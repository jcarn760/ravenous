import React from "react";
import Business from "../Business/Business";
import './BusinessListStyles.css'

// designed to display a collection of businesses utilizing the business component
// multiple times to generate the list.

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