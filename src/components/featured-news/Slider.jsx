import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

const Slider = ({ slides }) => {
  return (
    <div style={{ position: "relative"}} className='min-w-[50vh] max-w-[80vh]'>
      {/* Fixed Laptop Image */}
      <div
        className='relative h-full w-auto'
        style={{
          zIndex: 10,
        }}
      >
        <img src="/laptop.png" alt="Fixed Laptop" />
      </div>

      {/* Swiper Slider */}
      <div className="absolute left-8 px-4 top-0 w-full h-full py-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          style={{ height: "100%" }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={slide} alt={`Slide ${index + 1}`} style={{ width: "100%", height: "100%" }} className='mr-16' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
