import React from 'react'
import "./title.css"
import video123 from "./videoplayback.mp4"
const Title = () => {
  return (
    <>
    <div className='companytitle'>
        <h1>VETRI FINE ARTS</h1>
        <h2>NOTE BOOK COMPANY</h2>
        <h3>QUALITY NOTE BOOKS MANUFACTURER</h3>
    <video src={video123} muted autoPlay loop></video>

    </div>

    </>
  )
}

export default Title