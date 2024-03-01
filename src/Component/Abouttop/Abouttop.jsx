import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'
const Abouttop = () => {
  return (
    <>
    <div className='abouttop'>
        <div className='abouttop1'>
            <h1>ABOUT VETRI FINE ARTS</h1>
            <div className='navigation'>
                <Link to="/">Home</Link>
                <p>/</p>
                <Link to="/about">About</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Abouttop