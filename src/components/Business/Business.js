import React from "react";
import './BusinessStyles.css';

// The component will represent how a business (a restaurant) in Ravenous will be formatted and styled.

// Each Business component should display an image, name, address, city, state, zipcode, category, rating, 

// and review count.

// whatever is in the businesses array when business is called on will be passed to this file and display each tag accordingly.

class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <a href={ 'http://www.google.com/search?q=' + this.props.business.name } target="_blank" rel="noopener noreferrer">
                        <img src={ this.props.business.imgSrc } alt="" />
                    </a>
                </div>
                <h2>{ this.props.business.name }</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <a href={ 'http://maps.google.com/?q=' + this.props.business.address + ' ' + this.props.business.city + ' ' + this.props.business.state + ' ' + this.props.business.zipCode } target="_blank" rel="noopener noreferrer">
                            <p>{ this.props.business.address }</p>
                            <p>{ this.props.business.city }</p>
                            <p>{ this.props.business.state } { this.props.business.zipCode }</p>
                        </a>
                    </div>
                    <div className="Business-reviews">
                        <h3>{ this.props.business.category }</h3>
                        <p id="rat">{ this.props.business.rating } stars</p>
                        <p>{ this.props.business.reviewCount } reviews</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Business;