import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer/Footer'
import Abouttop from '../Component/Abouttop/Abouttop'
import Overview from '../Component/Overview/Overview'
import AboutCompany from '../Component/Aboutcompany/AboutCompany'
import Aboutslide from '../Component/aboutslider/Aboutslide'

const MyAbout = () => {
  return (
    <>
    <Navbar />
    <Abouttop />
    <Overview />
    <AboutCompany />
    <Aboutslide />
    <Footer />
    </>
  )
}

export default MyAbout