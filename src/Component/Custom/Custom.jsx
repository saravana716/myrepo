import React from 'react'
import sampleimg from "../../Component/Products/Year Diary.png"
import sampleimg1 from "../Carts/i2.png"
import sampleimg2 from "../../Component/Products/Short Size Note.png"
import sampleimg3 from "../Carts/i4.jpg"
import { BsSendFill } from "react-icons/bs";
import "./Custom.css"
const Custom = () => {
  return (
    <>
    <div className='custom'>
        <div className='custom1'>
            <h3>WHY WE CHOOSE VFA?</h3>
            <h1>Ink and paper, the perfect <span>combination </span>for creativity</h1>
        </div>
    </div>
    <div className='sample'>
    <BsSendFill className='moveicon1' />
    <BsSendFill  className='moveicon2'/>
        <div className='sample1'>
            <div className='sample2'>
                <div className='sampleimg'>
                    <img src={sampleimg} alt="" />
                </div>
                <div className='samplecontent'>
                    <h1>Innovative Printing</h1>
                    <p>Revolutionizing printing one innovation at a time</p>
                </div>
            </div>
            <div className='sample6'>
                <div className='sampleimg'>
                    <img src={sampleimg1} alt="" />
                </div>
                <div className='samplecontent'>
                    <h1>Cost Effective</h1>
                    <p>Value-driven solutions for your budget</p>
                </div>
            </div>
            <div className='sample5'>
                <div className='sampleimg'>
                    <img src={sampleimg2} alt="" />
                </div>
                <div className='samplecontent'>
                    <h1>Quick Delivery</h1>
                    <p>Quick prints, quicker delivery</p>
                </div>
            </div>
            <div className='sample3'>
                <div className='sampleimg'>
                    <img src={sampleimg3} alt="" />
                </div>
                <div className='samplecontent'>
                    <h1>Clear guidance</h1>
                    <p>Guiding you from concept to completion, every step of the way</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Custom