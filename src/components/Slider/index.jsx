import React from "react";
import './slider.css'
export default function Slider() {
    let imgSrc = [
        'https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg',
        'https://as2.ftcdn.net/v2/jpg/02/21/92/47/1000_F_221924727_22gAZipfnoFh5hjuCrMGkgjflxrFnRyf.jpg',

    ]
  return (
    <div id="carouselExample" className="carousel slide container-fluid slider_div">
      <div className="carousel-inner">
        <div className="carousel-item">
          <img src={imgSrc[0]} className="d-block w-100 slider_img" alt="..." />
        </div>
        <div className="carousel-item active">
          <img src={imgSrc[1]} className="d-block w-100 slider_img" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
