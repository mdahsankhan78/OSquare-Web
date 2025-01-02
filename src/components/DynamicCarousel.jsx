import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DynamicCarousel = ({ slides, heading = "Discover More", moduleRef }) => {
  return (
    <div
      className="w-full py-12 md:py-16 lg:py-20"
      ref={moduleRef}
      id='discover-more'
    >
      <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-2">
          <section className="section-box">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-12 col-md-12" data-aos='fade-up'>
                  <h2 className=" font-semibold text-3xl sm:text-4xl lg:mb-8 mb-20">
                    Discover More about {heading}
                  </h2>
                </div>
              </div>
              <div className="w-[90vw] xl:w-[85vw] 2xl:w-[80vw] mx-auto">
                {" "}
                {/* Wrapping Swiper with custom width */}
                <Swiper
                  modules={[Navigation, Pagination, A11y, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 3000, // Auto-slide every 3 seconds
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                >
                  {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-56 object-cover"
                        />
                        <div className="p-4 text-center">
                          <h3 className="text-lg font-bold mb-2">
                            {slide.title}
                          </h3>
                          {slide.description && (
                            <p className="text-sm text-gray-600">
                              {slide.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </section>
        </div>
      </div>
      <style jsx>
        {`
          .swiper {
            width: 100%;
          }
          .swiper-pagination-bullet {
            background-color: grey;
            border-radius: 100;
          }
          .swiper-pagination {
            position: relative; /* Change from absolute to relative */
            bottom: 0; /* Align it below the slides */
            margin-top: 20px; /* Add spacing between slides and bullets */
            text-align: center; /* Center the pagination */
            z-index: 10; /* Ensure it remains above background elements */
          }
          .swiper-pagination-bullet-active {
            background-color: #172554; /* Active dot color */
          }
        `}
      </style>
    </div>
  );
};

export default DynamicCarousel;
