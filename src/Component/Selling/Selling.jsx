import React from 'react'
import sellingSliderimg from "../Carts/sl1.jpg"
import sellingSliderimg1 from "../Carts/sl2.webp"
import sellingSliderimg2 from "../Carts/sl3.jpg"
import sellingSliderimg3 from "../Carts/sl4.png"
import sellingSliderimg4 from "../Carts/sl5.jpg"
import sellingSliderimg5 from "../Carts/sl6.avif"
import sellingSliderimg6 from "../Carts/sl7.jpg"
import sellingSliderimg7 from "../Carts/sl8.jpg"
import sellingSliderimg8 from "../Carts/sl9.jpg"
// import sellingSliderimg3 from "../Carts/h6_cat5.jpg"
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './selling.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Selling = () => {
  return (
    <>
    <div className='selling' >
        <div className='selling1'>
            <h1><span>Where ideas meet paper</span> magic happens</h1>
            <p>We provide many types of printing services</p>
        </div>
    </div>
    <div className='sellingslider' >
   <div className='sellingslider1'>
   <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
       
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={sellingSliderimg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sellingSliderimg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sellingSliderimg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sellingSliderimg3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sellingSliderimg4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sellingSliderimg5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sellingSliderimg6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sellingSliderimg7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sellingSliderimg8} />
        </SwiperSlide>
      </Swiper>
   </div>

    </div>
    </>
  )
}

export default Selling