import React from "react";
import './BusinessStyles.css';

// The component will represent how a business (a restaurant) in Ravenous will be formatted and styled.

// Each Business component should display an image, name, address, city, state, zipcode, category, rating, 
// and review count.

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

class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={ pizzaBusiness.imageSrc } alt="" />
                </div>
                <h2>{ pizzaBusiness.name }</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{ pizzaBusiness.address }</p>
                        <p>{ pizzaBusiness.city }</p>
                        <p>{pizzaBusiness.state} { pizzaBusiness.zipCode }</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{ pizzaBusiness.category }</h3>
                        <p id="rat">{ pizzaBusiness.rating } stars</p>
                        <p>{ pizzaBusiness.reviewCount } reviews</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Business;