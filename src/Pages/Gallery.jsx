import React from 'react'
import "./Gallery.css"
import proimg1 from "../Component/aboutslider/IMG-20240207-WA0008.jpg"
import proimg2 from "../Component/aboutslider/IMG-20240207-WA0009.jpg"
import proimg3 from "../Component/aboutslider/IMG-20240207-WA0010.jpg"
import proimg4 from "../Component/aboutslider/IMG-20240207-WA0012.jpg"
import proimg5 from "../Component/aboutslider/IMG-20240207-WA0016.jpg"
import proimg6 from "../Component/aboutslider/IMG-20240207-WA0019.jpg"
import proimg7 from "../Component/aboutslider/IMG-20240207-WA0022.jpg"
import proimg8 from "../Component/aboutslider/IMG-20240207-WA0025.jpg"
import proimg9 from "../Component/aboutslider/IMG-20240207-WA0026.jpg"
import proimg10 from "../Component/aboutslider/IMG-20240207-WA0028.jpg"
import proimg11 from "../Component/aboutslider/IMG-20240207-WA0029.jpg"
import proimg12 from "../Component/aboutslider/IMG-20240207-WA0036.jpg"
import proimg13 from "../Component/aboutslider/IMG-20240207-WA0038.jpg"
import proimg14 from "../Component/aboutslider/IMG-20240207-WA0042.jpg"
import proimg15 from "../Component/aboutslider/IMG-20240207-WA0046.jpg"
import proimg16 from "../Component/aboutslider/IMG-20240207-WA0008.jpg"
import proimg17 from "./IMG-20240228-WA0000.jpg"
import proimg18 from "./IMG-20240228-WA0003.jpg"
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer/Footer'
import aboutimages101 from "../Component/aboutslider/VID-20240207-WA0007.mp4"
import aboutimages102 from "../Component/aboutslider/VID-20240207-WA0001.mp4"
import aboutimages103 from "../Component/aboutslider/VID-20240207-WA0003.mp4"
import aboutimages104 from "../Component/aboutslider/VID-20240207-WA0009.mp4"
import aboutimages105 from "../Component/aboutslider/VID-20240207-WA0007.mp4"
import aboutimages106 from "../Component/aboutslider/VID-20240207-WA0005.mp4"
import aboutimages107 from "../Component/aboutslider/VID-20240207-WA0004.mp4"

const Gallery = () => {
  return (
    <>
    <Navbar />
    <div className='profileimg'>
        <div className='profileimg1'>
            <h1>GALLERY</h1>
        </div>
    </div>
    <div className='profileimg2'>
        <div className='profileimg3'>
            <div className='profileimg4'>
            <img src={proimg1} alt="" />
            </div>
            <div className='profileimg4'>
            <img src={proimg2} alt="" />
            </div>
            <div className='profileimg4'>
            <img src={proimg3} alt="" />
            </div>
            <div className='profileimg4'>
            <img src={proimg4} alt="" />
            </div>
            <div className='profileimg4'>
            <img src={proimg5} alt="" />
            </div>
            <div className='profileimg4'>
            <img src={proimg6} alt="" />
            </div>
            <div className='profileimg4'>
            <img src={proimg7} alt="" />
            </div>
            <div className='profileimg4'>
            <img src={proimg8} alt="" />
            </div>
            <div className='profileimg4'>
            <img src={proimg16} alt="" />
            </div>

            <div className='profileimg4'>
            <img src={proimg9} alt="" />
            </div>
            <div className='profileimg4'>
            <img src={proimg10} alt="" />
            </div>
            <div className='profileimg4'>
            <img src={proimg11} alt="" />
            </div>

            <div className='profileimg4'>
            <img src={proimg12} alt="" />
            </div>
            <div className='profileimg4'>
            <img src={proimg13} alt="" />
            </div>
            <div className='profileimg4'>
            <img src={proimg14} alt="" />
            </div>

            <div className='profileimg4'>
            <img src={proimg15} alt="" />
            </div>
            <div className='profileimg4'>
            <img src={proimg16} alt="" />
            </div>
            <div className='profileimg4'>
            <img src={proimg17} alt="" />
            </div>
            <div className='profileimg4'>
            <img src={proimg18} alt="" />
            </div>
           
        <div className='profileimg4'><video src={aboutimages101}  loop muted autoPlay  /></div>
       <div className='profileimg4'><video src={aboutimages102}  loop muted autoPlay  /></div>
        <div className='profileimg4'><video src={aboutimages103}  loop muted autoPlay  /></div>
       <div className='profileimg4'><video src={aboutimages104}  loop muted autoPlay  /></div>
      <div className='profileimg4'><video src={aboutimages105}  loop muted autoPlay  /></div>
       <div className='profileimg4'><video src={aboutimages106}  loop muted autoPlay  /></div>
        <div className='profileimg4'><video src={aboutimages107}  loop muted autoPlay  /></div>
            
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Gallery