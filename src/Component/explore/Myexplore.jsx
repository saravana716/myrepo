import React from 'react'
import { IoArrowRedo } from "react-icons/io5";
import "./explore.css"
import exploreimg from "../Carts/all.jpg"
import exploreimg1 from "../Carts/a1.jpeg"
import { useNavigate } from 'react-router-dom';
const Myexplore = () => {
  let mynaigate=useNavigate()
  function goto(params) {
    mynaigate("/works")
  }
  return (
    <>
      <>
    <div className='explore'>
        <div className='explore1'>
            <div className='explore2'>
                <img src={exploreimg} alt="" />
                <div className='explorecontent'>
                    <h1>All types of</h1>
                    <h1>Printing services</h1>
                    <button onClick={goto}>Explore More <IoArrowRedo className='exicon' /></button>
                </div>
            </div>
            <div className='explore3'>
                <img src={exploreimg1} alt="" />
                <div className='explorecontent'>
                    <h1>Best in</h1>
                    <h1>Tamilnadu</h1>
                    <button onClick={goto}>Explore More <IoArrowRedo className='exicon' /></button>
                </div>
            </div>
        </div>
    </div>
    </>
    </>
  )
}

export default Myexplore