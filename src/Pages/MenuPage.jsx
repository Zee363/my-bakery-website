import React from "react";
import '../App.css';

const MenuPage = () => {
  return (
    <div className="menu-section container-fluid">
      <h1 className="menu-h1">Menu</h1>
      <div className="pastry-menu">
        <h2 className="menu-h2">Pastries</h2>
        <div className="donuts">
          <h3 className="menu-h3">Donuts</h3>
          <p>
            Glazed donuts <br />
            Chocolate covered donuts
          </p>{" "}
          <hr className="short-hr" />
        </div>
        <div className="macaroons">
          <h3 className="menu-h3">Macaroons</h3>
          <p>
            Strawberry <br />
            Pistachio <br />
            Coconut
          </p>
          <hr className="short-hr" />
        </div>
        <div className="croissants">
          <h3 className="menu-h3">Croissants</h3>
          <p>
            Whipped cream <br />
            Custard <br />
            Chocolate & Banana
          </p>
          <hr className="short-hr" />
        </div>
        <div className="bagel">
          <h3 className="menu-h3">Bagel</h3>
          <p>
            Toasted cream cheese <br />
            Chicken slaw <br />
            Breakfast bagel
          </p>{" "}
          <hr class="short-hr" />
        </div>
        <div className="danish">
          <h3 className="menu-h3">Danish</h3>
          <p>
            Custard <br />
            Jam <br />
            Marzipan
          </p>
          <hr className="long-hr" />
        </div>
      </div>

      <div className="cake-menu">
        <div className="cake-list">
          <h2 className="cakes">Cakes</h2>
          <p>
            Milk tart <br />
            Cheesecake <br />
            Coffee cake
          </p>
          <hr className="long-hr" />
        </div>
      </div>
      <div className="drink-menu">
        <h2 class
        
        Name="drink-h2">Hot Beverages</h2>
        <p>
          Chai latte <br />
          Flat white <br />
          Cappuccino
        </p>
      </div>
      <div className="carousel-slide">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="./carousel-pic1.jpg"
              class="d-block img-fluid"
              alt="donuts."
            />
          </div>
          <div class="carousel-item">
            <img
              src="./carousel-pic2.jpg"
              class="d-block img-fluid"
              alt="glazed donuts"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./carousel-pic3.jpg"
              class="d-block img-fluid"
              alt="strawberry-macaroon"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./carousel-pic4.jpg"
              class="d-block img-fluid"
              alt="multi-coloured-macaroons"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./carousel-pic5.jpg"
              class="d-block img-fluid"
              alt="coconut-macaroon"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./carousel-pic6.jpg"
              class="d-block img-fluid"
              alt="whipped-cream-croissants"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./carousel-pic7.jpg"
              class="d-block img-fluid"
              alt="custard-croissants"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./carousel-pic8.jpg"
              class="d-block img-fluid"
              alt="chocolate-croissants"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./carousel-pic9.jpg"
              class="d-block img-fluid"
              alt="toasted-cream-cheese-bagel"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./carousel-pic10.jpg"
              class="d-block img-fluid"
              alt="chicken-slaw-bagel"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./carousel-pic11.jpg"
              class="d-block img-fluid"
              alt="breakfast-bagel"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./carousel-pic12.jpg"
              class="d-block img-fluid"
              alt="custard-danish"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./carousel-pic13.jpg"
              class="d-block img-fluid"
              alt="jam-danish"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./carousel-pic14.jpg"
              class="d-block img-fluid"
              alt="marzipan-danish"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
