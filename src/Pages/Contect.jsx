import React from "react";
import "./contect.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../Assets/images/download.png"
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer/Footer";

const Contect = () => {
  return (
    <>
    <Navbar />
      <div className="contact">
        <div className="contact1">
          <h1>CONTACT US</h1>
          <p>Ready To Start</p>
        </div>
      </div>
      <div className="contactmap">
        <div className="contactmap1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.4194549787553!2d77.80253487450311!3d9.472195981895165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cf5fbdaf8a35%3A0xdc04f69b4af62534!2sVetri%20Fine%20Arts%20Note%20Book%20Company!5e0!3m2!1sen!2sin!4v1708452454730!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
      <div className="contacts">
        <div className="contact112">
          <div className="contact2">
          <div className="contact4">
            <div className="contact5">
              <img src={logo} alt="" />
            </div>
            <div className="contactcon">
            <h1>VETRI FINE ARTS</h1>
        <h2>NOTE BOOK COMPANY</h2>
        <h3>QUALITY NOTE BOOKS MANUFACTURER</h3>
            </div>
          </div>
          <div className="contact6">
<span>
<FaLocationDot className="contacticon" />
  </span>    <p>No 463, Virudhunagar, Main Road, Thiruthangal, Sivakasi, Tamil Nadu 626130. (Near By Mahindra Show Room).</p>
          </div>
          <div className="contact6">
<span>
<MdEmail className="contacticon" />
  </span>     <p>vetrifineartsnbc@gmail.com</p>
          </div>
          
          <div className="contact8">
          <div className="contact88">
           <h3>Office</h3>
            
            <div className="checkcon">
            <p><FaPhoneAlt className="picon" /></p>
            <h6>+91 7868090552</h6>
            </div>
           </div>
           <div className="contact88">
           <h3>Personal</h3>
            
            <div className="checkcon">
            <p><FaPhoneAlt className="picon" /></p>
            <h6>+91 8610561369</h6>
            </div>
           </div>
          </div>
          
          </div>
          <div className="contact3">
            <h5></h5>
<div className="contact10">
  <h1>Contact us</h1>
  <input type="text" placeholder="Name *"/>
  <input type="tel" placeholder="Your Phone Number *"/>
  <input type="email" placeholder="Your Email *"/>
  <textarea name="" id="" cols="30" rows="10" placeholder="Your Message Here"></textarea>
  <button>SUBMIT</button>
</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contect;
