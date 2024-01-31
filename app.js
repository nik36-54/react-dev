import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Planning:
 *
 * - Header
 *      - logo
 *      - nav-items
 * - Body
 *      - search
 *      - restaurantContainer
 *          - restaurantCard
 * - Footer
 *      - copyright
 *      - links
 *      - address
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/print_171487-162.jpg?size=626&ext=jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const resObj = {
  
  "info": {
    "id": "25620",
    "name": "KFC",
    "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
    "locality": "Intermediate Ring Road",
    "areaName": "Ejipura",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Biryani",
      "American",
      "Snacks",
      "Fast Food"
    ],
    "avgRating": 4.2,
    "parentId": "547",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 16,
      "lastMileTravel": 0.8,
      "serviceability": "SERVICEABLE",
      "slaString": "15-20 mins",
      "lastMileTravelString": "0.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-31 23:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620",
    "type": "WEBLINK"
  }
};

const RestaurantCard = (props) => {
  const {resData} = props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="food-img"
        src="https://img.freepik.com/free-photo/hamburger-beef-with-tomato-ketchup-generative-ai_188544-12217.jpg"
      />
      <h3>{resData.info.name}</h3>
      <h5>{resData.info.cuisines.join(", ")}</h5>
      <h5>{resData.info.avgRating}</h5>
      <h5>{resData.info.sla.deliveryTime}</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj}/>
        
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
