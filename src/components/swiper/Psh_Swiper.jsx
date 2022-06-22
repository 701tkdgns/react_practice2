import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import ImageList from './ImageList';
import './Psh_Swiper.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Psh_Swiper = () => {
  return (
    <div>
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{clickable: true}}
      navigation ={{clickable: true}}
      spaceBetween={50}
      slidesPerView={1}
      className="swiper mySwiper"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop
    >
      {ImageList.map((item, index) => {
        return (
          <SwiperSlide className='swiper-slide'><img src={item.src}/></SwiperSlide>
        )
      })}
  </Swiper>
    </div>

  );
};

export default Psh_Swiper