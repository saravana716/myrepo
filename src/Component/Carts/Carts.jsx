import React from 'react'
import cartsimg from "../slider/abstract-blue-purple-background-with-geometric-panel-free-vector.jpg"
import "./Carts.css"
import cartimg1 from "./cal.jpg"
import cartimg2 from "./note.jpg"
import cartimg3 from "./dia.webp"
import cartimg4 from "../../Component/Products/Polyboard Record.png"
const Carts = () => {
  return (
    <>
    <div className='carts'>
        <div className='carts1'>
            <div className='carts2'>
                
            <p>Print Excellence</p>
    
            </div>
            <div className='carts3' >
                <div className='carts4'>
            <img src={cartimg1} alt="" />
            <button title=''>Calenders</button>
                </div>
                <div className='carts4'>
            <img src={cartimg2} alt="" />
            <button title=''>Note books</button>
                </div>
                <div className='carts4'>
            <img src={cartimg3} alt="" />
            <button title=''>Year Diary</button>
                </div>
                <div className='carts4'>
            <img src={cartimg4} alt="" />
            <button title=''>posters</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Carts