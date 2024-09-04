import React from "react";
import "../App.css";

const AboutUs =() => {
  return (
    <div className="about-section container-fluid">
      <div className="about-paragraphs">
        <h1>About Us</h1>
        <p>
          Welcome to Lubabalo Bakery, your go-to destination for delicious,
          freshly baked goods! Established in 2023 by Zinhle Nhlapo, Lubabalo
          Bakery is built on a passion for creating delightful, high-quality
          pastries and cakes that bring joy to every occasion.
        </p>
        <p>
          At Lubabalo Bakery, we believe that every bite should be an experience
          to savor. From our signature cakes to our mouth-watering pastries,
          each product is crafted with love and the finest ingredients. Our
          bakery is a place where tradition meets innovation, providing a wide
          range of baked goods that cater to both classic tastes and modern
          palates.
        </p>
        <p>
          Our founder, Zinhle Nhlapo, started this journey with a simple yet
          profound goal: to bring people together through the universal love of
          baked treats. Her dedication to quality and creativity is reflected in
          every item we make. Whether you're looking for the perfect cake for a
          special celebration or just a sweet treat to enjoy with your morning
          coffee, Lubabalo Bakery is here to make your moments memorable.
        </p>
        <p>
          Thank you for choosing Lubabalo Bakery. We are excited to be a part of
          your sweetest memories!
        </p>
      </div>
      <img src="./about-picture.jpg" alt="coffee&bread" className="about-img img-fluid" />
    </div>
  );
};

export default AboutUs;