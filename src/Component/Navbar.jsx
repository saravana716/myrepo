import React from 'react'
import "./Navbar/Navbar.css"
import { ImCross } from "react-icons/im";
import logo from "../Assets/images/download.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
const Navbar = () => {
 function menuopen(params) {
  let listdiv= document.querySelector(".list")
  listdiv.classList.toggle("menu-open")
  let closediv=document.querySelector(".burgermenu1")
  closediv.classList.add("displays")
  document.querySelector(".burgermenu").classList.add("menu-close")
 } 
 function menucloser(params) {
  let mydiv=document.querySelector(".list")
  mydiv.classList.remove("menu-open")
  let closediv=document.querySelector(".burgermenu1")
  closediv.classList.remove("displays")
  document.querySelector(".burgermenu").classList.remove("menu-close")

 }
  return (
    <>
    <div className='Navbar'>
        <div className='Navbar1'>
        <GiHamburgerMenu onClick={menuopen} className='burgermenu' id='menu' />
        <ImCross onClick={menucloser} className='burgermenu1'id='close' />
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='list'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/product">Products</Link>
                <Link to="/works">Our Wroks</Link>
                <Link to="/contact">Contact Us</Link>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar