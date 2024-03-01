import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";   
import { MdAssignmentReturned } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";
import { MdLock } from "react-icons/md";
import "./Ourmoto.css"

const Ourmoto = () => {
   
    
  return (
    <>
    <div className='moto'  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" >
        <div className='moto1'>
            <div className='moto2'>
            <TbTruckDelivery className='icon' />     
                <h1>Quick delivery</h1>
            </div>
            <div className='moto2'>
            <MdAssignmentReturned className='icon'  />
                <h1>High Tech printing</h1>
            </div>
            <div className='moto2'>
            <RiCustomerServiceFill className='icon'  />
                <h1>contact support</h1>
            </div>
            <div className='moto2'>
            <MdLock className='icon'  />
                <h1>Safest client datas</h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default Ourmoto