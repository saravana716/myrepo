import React from 'react'
import "./Homeservices.css"
import homeserviceimg from "../Homeservices/IMG-20240207-WA0049.jpg"
import { useState } from 'react'
const Homeservices = () => {
    const [scroll, setscroll] = useState(false)
    const [scroll1, setscroll1] = useState(false)
    const [scroll2, setscroll2] = useState(false)
    const [scroll3, setscroll3] = useState(false)
    const [scroll4, setscroll4] = useState(false)
    function check(params) {
        setscroll(!scroll)
        setscroll1(false)
        setscroll2(false)
        setscroll3(false)
        setscroll4(false)

    }
    function check1(params) {
        setscroll1(!scroll1)
        setscroll(false)
        setscroll2(false)
        setscroll3(false)
        setscroll4(false)
    }
    function check2(params) {
        setscroll2(!scroll2)
        setscroll(false)
        setscroll1(false)
        setscroll3(false)
        setscroll4(false)
    }
    function check3(params) {
        setscroll3(!scroll3)
        setscroll(false)
        setscroll1(false)
        setscroll2(false)
        setscroll4(false)
    }
    function check4(params) {
        setscroll4(!scroll4)
        setscroll(false)
        setscroll1(false)
        setscroll2(false)
        setscroll3(false)
    }
  return (
    <>
    <div className='Homeservices'>
        <div className='Homeservices1'>
            <h1>Quality printing and <span>outstanding customer</span> service</h1>
            <p>The educational printing services offered by Print Design make us one of the most trusted and sought-after graphic design and printing companies around.</p>
        </div>
    </div>
    <div className='ourservices'>
        <div className='services'>
            <div className='services1'>
                <img src={homeserviceimg} alt="" />
            </div>
            <div className='printslider'>
                <div className='printslider1'>
                    <div className='printslider2'>
                       <div className='printslider3'>
                       <h2>Printing Services</h2>
                        <h2 onClick={check}>+</h2>
                       </div>
                      {scroll &&  <div className='printslider4' style={{transition:"0.7s"}}>
                        <p>If you need print design concepts that will make your project shine, then it’s worth investing in a quality graphic designer.</p>
                       </div>}
                    </div>
                    <div className='printslider2'>
                       <div className='printslider3'>
                       <h2>Banner Design & Printing</h2>
                        <h2 onClick={check1}>+</h2>
                       </div>
                       {scroll1 &&  <div className='printslider4' style={{transition:"0.7s"}}>
                        <p>We have all the equipment, know-how and every thing you will need to receive fast, reliable printing services with high quality results.</p>
                       </div>}
                    </div>
                    <div className='printslider2'>
                       <div className='printslider3'>
                       <h2>Note book printing </h2>
                        <h2 onClick={check4}>+</h2>
                       </div>
                      {scroll4 &&  <div className='printslider4' style={{transition:"0.7s"}}>
                        <p>We provide all types of note printing in quality papers and wrapper design themes</p>
                       </div>}
                    </div>
                    <div className='printslider2'>
                       <div className='printslider3'>
                       <h2>Book Cover Printing</h2>
                        <h2 onClick={check2}>+</h2>
                       </div>
                       {scroll2 && <div className='printslider4'>
                        <p>We print all types of school book wrappers and cover pages and lots</p>
                       </div>}
                    </div>
                    <div className='printslider2'>
                       <div className='printslider3'>
                       <h2>All types of printing</h2>
                        <h2 onClick={check3}>+</h2>
                       </div>
                       {scroll3 && <div className='printslider4'>
                        <p>And we provide all the types of new printing methods and new types of quality calenders and notes.</p>
                       </div>}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Homeservices