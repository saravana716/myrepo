import React from 'react'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Owner.css';
import ownerimage from"../Carts/per.jpg"

// import required modules
import { Navigation } from 'swiper/modules';

const Owners = () => {
  return (
    <>
    <div className='owner'>
        <div className='owner1'>
        
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
         <SwiperSlide>
            <div className='ownerdetails'>
            <div className='ownerdetails33'>
            <p>“Vetri Fine Arts was founded in 1991 by S.M. Mohamed Farooq, a visionary entrepreneur with a passion for printing excellence”</p>
            <div className='ownerdetails1'>
                <div className='ownerimg'>
                    <img src={ownerimage} alt="" />
                </div>
                <div className='ownername'>
                    <h1>S.M.Mohamed Farooq</h1>
                    <h4>Partners</h4>
                </div>
            </div>
            </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='ownerdetails'>
            <div className='ownerdetails33'>
            <p>“Vetri Fine Arts proudly counts M. Mohamed Imran as one of its esteemed partners. Since the company's inception in 1991, Imran has been an integral part of its success story”</p>
            <div className='ownerdetails1'>
                <div className='ownerimg'>
                    <img src={ownerimage} alt="" />
                </div>
                <div className='ownername'>
                    <h1>M.Mohamed Imran</h1>
                    <h4>Partner</h4>
                </div>
            </div>
            </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='ownerdetails'>
            <div className='ownerdetails33'>
            <p>“Marketing Manager M. Jalaludin Mohammed Akbar, Vetri Fine Arts has grown from strength to strength, establishing itself as a global leader in printing services”</p>
            <div className='ownerdetails1'>
                <div className='ownerimg'>
                    <img src={ownerimage} alt="" />
                </div>
                <div className='ownername'>
                    <h1>M.Jalaludin Mohammed Akbar</h1>
                    <h4>Marketing Manager</h4>
                </div>
            </div>
            </div>
            </div>
            </SwiperSlide>
            
           
            
       
        
      </Swiper>
   
        </div>
    </div>
    </>
  )
}

export default Owners