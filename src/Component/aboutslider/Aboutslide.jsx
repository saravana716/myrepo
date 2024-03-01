import React from 'react'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './aboutslider.css';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import aboutimages1 from "../../Component/aboutslider/IMG-20240207-WA0008.jpg"
import aboutimages2 from "../../Component/aboutslider/IMG-20240207-WA0009.jpg"
import aboutimages3 from "../../Component/aboutslider/IMG-20240207-WA0010.jpg"
import aboutimages4 from "../../Component/aboutslider/IMG-20240207-WA0012.jpg"
import aboutimages5 from "../../Component/aboutslider/IMG-20240207-WA0042.jpg"
import aboutimages6 from "../../Component/aboutslider/IMG-20240207-WA0016.jpg"
import aboutimages7 from "../../Component/aboutslider/IMG-20240207-WA0019.jpg"
import aboutimages8 from "../../Component/aboutslider/IMG-20240207-WA0022.jpg"
import aboutimages9 from "../../Component/aboutslider/IMG-20240207-WA0025.jpg"
import aboutimages10 from "../../Component/aboutslider/IMG-20240207-WA0026.jpg"
import aboutimages11 from "../../Component/aboutslider/IMG-20240207-WA0028.jpg"
import aboutimages12 from "../../Component/aboutslider/IMG-20240207-WA0029.jpg"
import aboutimages13 from "../../Component/aboutslider/IMG-20240207-WA0036.jpg"
import aboutimages14 from "../../Component/aboutslider/VID-20240207-WA0007.mp4"
import aboutimages15 from "../../Component/aboutslider/VID-20240207-WA0001.mp4"
import aboutimages16 from "../../Component/aboutslider/VID-20240207-WA0003.mp4"
import aboutimages17 from "../../Component/aboutslider/VID-20240207-WA0009.mp4"
import aboutimages18 from "../../Component/aboutslider/VID-20240207-WA0007.mp4"
import aboutimages19 from "../../Component/aboutslider/VID-20240207-WA0005.mp4"
import aboutimages20 from "../../Component/aboutslider/VID-20240207-WA0004.mp4"
const Aboutslide = () => {
  return (
     <>
     <div className='abtslider'>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={false}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={aboutimages1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={aboutimages2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={aboutimages3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={aboutimages4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={aboutimages5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={aboutimages6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={aboutimages7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={aboutimages8} alt="" /></SwiperSlide>
        <SwiperSlide><img src={aboutimages9} alt="" /></SwiperSlide>
        <SwiperSlide><img src={aboutimages10} alt="" /></SwiperSlide>
        <SwiperSlide><img src={aboutimages11} alt="" /></SwiperSlide>
        <SwiperSlide><img src={aboutimages12} alt="" /></SwiperSlide>
        <SwiperSlide><img src={aboutimages13} alt="" /></SwiperSlide>
       
      </Swiper>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={false}
       
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide><div className='videos'><video src={aboutimages14}  loop muted autoPlay  /></div></SwiperSlide>
        <SwiperSlide><div className='videos'><video src={aboutimages15}  loop muted autoPlay  /></div></SwiperSlide>
        <SwiperSlide><div className='videos'><video src={aboutimages16}  loop muted autoPlay  /></div></SwiperSlide>
        <SwiperSlide><div className='videos'><video src={aboutimages17}  loop muted autoPlay  /></div></SwiperSlide>
        <SwiperSlide><div className='videos'><video src={aboutimages18}  loop muted autoPlay  /></div></SwiperSlide>
        <SwiperSlide><div className='videos'><video src={aboutimages19}  loop muted autoPlay  /></div></SwiperSlide>
        <SwiperSlide><div className='videos'><video src={aboutimages20}  loop muted autoPlay  /></div></SwiperSlide>
       
       
      </Swiper>
      </div>

    </>
  )
}

export default Aboutslide