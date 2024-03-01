import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Printing from '../Pages/Printing'
import Portfolio from '../Pages/Portfolio'
import Contect from '../Pages/Contect'
import Home from '../Pages/Home'
import MyAbout from '../Pages/MyAbout'
import Products from '../Component/Products/Products'
import Works from '../Component/Myworks/Works'
import Gallery from '../Pages/Gallery'
const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<MyAbout />}/>
        <Route path="/product" element={<Products />}/>
        <Route path="/works" element={<Works />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/contact" element={<Contect />}/>
        <Route path="/gallery" element={<Gallery />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router