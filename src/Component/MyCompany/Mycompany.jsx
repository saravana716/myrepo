import React from 'react'
import "./Mycompany.css"
import { useNavigate } from 'react-router-dom'
const Mycompany = () => {
  const navigates=useNavigate()
  function goto1(params) {
    navigates("/contact")
  }
  return (
    <>
    <div className='mycompany'>
        <div className='mycompany1'>
           <div className='mycompany2'>
           <h1>Interested in working with Vetri Printographs?</h1>
            <p>We’re continually working to change the way people think about and engage with our products.

</p>
           </div>
           <button onClick={goto1}>Contact Now</button>
        </div>
        
    </div>
    </>
  )
}

export default Mycompany