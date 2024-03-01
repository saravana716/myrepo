import React from 'react'
import Navbar from '../Component/Navbar';
import Slider from '../Component/slider/Slider';
import Ourmoto from '../Component/ourmoto/Ourmoto';
import Carts from '../Component/Carts/Carts';
import Selling from '../Component/Selling/Selling';
import Custom from '../Component/Custom/Custom';
import Owners from '../Component/owners/Owners';
import Myexplore from '../Component/explore/Myexplore';
import Mycompany from '../Component/MyCompany/Mycompany';
import Footer from '../Component/Footer/Footer';
import Homeservices from '../Component/Homeservices/Homeservices';
import Title from '../Component/Title/Title';
const Home = () => {
  return (
    <>
    <Navbar/>
    <Title />
      <Slider/>
      <Ourmoto />
      <Carts />
      <Selling />
      <Custom />
      <Owners />
      <Myexplore />
      <Mycompany />
      <Homeservices />
      <Footer />
    </>
  )
}

export default Home