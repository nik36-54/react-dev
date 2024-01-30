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

const RestaurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="food-img"
        src="https://img.freepik.com/free-photo/hamburger-beef-with-tomato-ketchup-generative-ai_188544-12217.jpg"
      />
      <h3>Meghana Foods</h3>
      <h5>Biryani, North Indian</h5>
      <h5>4.4 stars</h5>
      <h5>38 minutes</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
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
