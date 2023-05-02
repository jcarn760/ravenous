
// importing yelp api and populating required fields for the application to display
// when yelp is called on with the term, location, and sortBy props it will access the API
// and pull data and map each appropriate key value pair

const yelpApiKey = "li9RD5e43CrGwV0Qh6SGqhI_zVFTpVzjR0XXL_Jh9-79P4enqe0PpWKsJxBV-sXn7j5syezzEEeco0GeAWUBZNQri3bWEHXY3F3lEXZSPkua-gtUaAmPoLTWnKBPZHYx";

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        {
            headers: {
                Authorization: `Bearer ${yelpApiKey}`
                }
            }
        )
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imgSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                });
            }
        })
        .catch(error => console.log(error));
    }
}

export default Yelp;