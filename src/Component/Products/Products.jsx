import React from 'react'
import "./product.css"
import productimages from "./14 x 22 School HandBook.png"
import productimages1 from "./18 x 24 Cm School HandBook.png"
import productimages2 from "./Crown Size.png"
import productimages3 from "./Exam Booklet.png"
import productimages4 from "./Flexible Record Note.png"
import productimages5 from "./Long Size.png"
import productimages6 from "./Polyboard Record.png"
import productimages7 from "./Short Size Note.png"
import productimages8 from "./Year Diary.png"
import productimages9 from "./18 x 24 Cm School HandBook.png"
import productimages10 from "../portfolio/images/product11.jpeg"
import productimages11 from "../Products/last.jpg"
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
const Products = () => {
  return (
    <>
    <Navbar />
    <div class="product-banner">
        
    </div>

    <div class="list-title">Our Quality Manufacture
    </div>


    <div class="our-products-list">
        <ul>
            <li><p>Quality Note Books</p></li>
            <li><p>School Cursive Writting Books</p></li>
            <li><p>School Hand Books</p></li>
            <li><p>Exam Sheets</p></li>
            <li><p>Exam Booklets</p></li>
            <li><p>Daily Calendars</p></li>
            <li><p>Monthly Calendars</p></li>
            <li><p>Year Diaries</p></li>
            <li><p>Other Printing JObs</p></li>

        </ul>
    </div>




    <div class="our-product-container">
        <div class="products">
            <div class="products-img"><img src={productimages} alt="" /></div>
            <div class="products-info">Short Size Notes 15 X 19 cm</div>
        </div>
        <div class="products">
            <div class="products-img"><img src={productimages1} alt="" /></div>
            <div class="products-info">Long Size 19 X 31 cm</div>
        </div>
        <div class="products">
            <div class="products-img"><img src={productimages2} alt=""  /></div>
            <div class="products-info">Crown Size 18 X 24 cm</div>
        </div>
        <div class="products">
            <div class="products-img"><img src={productimages3} alt="" /></div>
            <div class="products-info">Exam Booklet 20.5 X 32.5 cm</div>
        </div>
        <div class="products">
            <div class="products-img"><img src={productimages4} alt="" /></div>
            <div class="products-info">Record Note (PolyBoard ) 22 X 28 cm</div>
        </div>
        <div class="products">
            <div class="products-img"><img src={productimages5} alt="" /></div>
            <div class="products-info">Record Note (Flexible) 22 X 28 cm</div>
        </div>
        <div class="products">
            <div class="products-img"><img src={productimages6} alt="" /></div>
            <div class="products-info">School Hand Book 14 X 22 cm</div>
        </div>
        <div class="products">
            <div class="products-img"><img src={productimages7} alt="" /></div>
            <div class="products-info">School Hand Book 18 X 24 cm</div>
        </div>
        <div class="products">
            <div class="products-img"><img src={productimages8} alt="" /></div>
            <div class="products-info">Daily Calendars (All Size)</div>
        </div>
        
        <div class="products">
            <div class="products-img"><img src={productimages9} alt="" /></div>
            <div class="products-info">Monthly Calendars(All Size)</div>
        </div>
        <div class="products">
            <div class="products-img"><img src={productimages10} alt="" /></div>
            <div class="products-info">Year Diary (All Size)</div>
        </div>
        
        <div class="products">
            <div class="products-img"><img src={productimages11} alt="" /></div>
            <div class="products-info">As well as Other Printing Jobs</div>
        </div>
        
    </div>
<Footer />

    </>
  )
}

export default Products