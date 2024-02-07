import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
const SliderTopHome: React.FC = () => {
  return (
    <div className="slider_top">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img src="./image/img/example.jpg" alt="1" className="slide_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image/img/example.jpg" alt="2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default SliderTopHome;
