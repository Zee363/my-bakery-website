import React from "react";
import "../App.css";

const HomePage = () => {
  return (
    <div className="home-section container-fluid">
      <img src="./home-picture.jpg" className="home-picture img-fluid" alt="bread" />
      <div className="home-heading">
        <h1>Welcome to Lubabalo Bakery!</h1>
        <p>Where every bite makes your heart dance with joy.</p>
      </div>
    </div>
  );
};

export default HomePage;
