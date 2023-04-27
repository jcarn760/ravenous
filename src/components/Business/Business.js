import React from "react";
import BusinessList from "../BusinessList/BusinessList";
import './BusinessStyles.css';

// The component will represent how a business (a restaurant) in Ravenous will be formatted and styled.

// Each Business component should display an image, name, address, city, state, zipcode, category, rating, 
// and review count.

class Business extends React.Component {
    render() {

        const { business } = this.props;
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={ business.imageSrc } alt="" />
                </div>
                <h2>{ business.name }</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{ business.address }</p>
                        <p>{ business.city }</p>
                        <p>{business.state} { business.zipCode }</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{ business.category }</h3>
                        <p id="rat">{ business.rating } stars</p>
                        <p>{ business.reviewCount } reviews</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Business;