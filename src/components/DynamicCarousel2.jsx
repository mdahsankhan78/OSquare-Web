import React from "react";
import OwlCarousel from "react-owl-carousel"; // Import Owl Carousel
import "owl.carousel/dist/assets/owl.carousel.css"; // Owl Carousel CSS
import "owl.carousel/dist/assets/owl.theme.default.css"; // Default Theme CSS
// import "./Carousel.css"; // Custom CSS for styles

const DynamicCarousel = ({ items, autoplay = true, loop = true, nav = true }) => {
  const options = {
    loop: loop,
    margin: 10,
    nav: nav,
    autoplay: autoplay,
    autoplayHoverPause: true,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };

  return (
    <div className="carousel-wrap">
      <OwlCarousel {...options} className="owl-theme">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.image} alt={item.text || `Slide ${index + 1}`} />
            {item.text && <p style={{ textAlign: "center" }}>{item.text}</p>}
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default DynamicCarousel;
