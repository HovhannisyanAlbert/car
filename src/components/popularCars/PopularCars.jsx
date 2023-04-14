import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./popularCars.css";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { cars } from "../../config/data";
import Car from "../car/Car";

const PopularCars = () => {
  return (
    <section id="popularCars">
      <div className="container-fluid max_width">
        <h2 className="section_title">Popular Cars</h2>
      </div>

      <div className="popularCars_container">
        <Swiper
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper max_width"
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            992: {
              slidesPerView: 4,
              spaceBetween: 48,
            },
            576: {
              slidesPerView: 2,
            },
          }}
        >
          {cars.map((car) => {
            return (
              <SwiperSlide key={car.id}>
                <Car img={car.img} name={car.name} price={car.price} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default memo(PopularCars);
