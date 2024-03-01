import React from "react";
import "./Footer.css"
import { MdSendToMobile } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import gklogo from "../Footer/download.png"
import footerlogos from "../../Assets/images/download.png"
import { Link } from "react-router-dom";
import watsappimg from "../Footer/whatsapp.png"
const Footer = () => {
   
  return (
    <div>
      <div className="footer" >
        <div className="footer1">
          <div className="footer11">
          <div className="footer2">
            <div className="footerlogo">
              <img src={footerlogos} alt="" />
            </div>
            <div className="footetcontent">
              <p>
              Celebrating 30 years since 1991, Vetri Notebooks Offset Printers is the top notebook printer in Sivakasi, Tamil Nadu. Renowned globally, we offer premium quality notebooks, diaries, and more, tailored to your needs. Thank you for choosing us as your trusted printing partner.
              </p>
            </div>
          </div>
          <div className="footer3">
            <h1>Vetri Fine Arts</h1>
            <d  iv className="footetcontent">
             <div className="footercontent1">
             <FaLocationDot className="location" />
                <p>No 463, Virudhunagar, Main Road, Thiruthangal, Sivakasi, Tamil Nadu 626130.</p>
             </div>
             <div className="footeremail">
                <div className="footeremail1">
                <MdEmail className="emails" />
                    <p>vetrifineartsnbc@gmail.com</p>
                </div>
             </div>
            </d>
          </div>
          <div className="footer3">
            <h1>Vetri Fine Arts</h1>
            <div className="footetcontent">
             <div className="footercontent1">
             <FaLocationDot className="location" />
                <p>No 463, Virudhunagar, Main Road, Thiruthangal, Sivakasi, Tamil Nadu 626130. (Near By Mahindra Show Room).</p>
             </div>
             <div className="footeremail">
                <div className="footeremail1">
                <MdEmail className="emails" />
                    <p>vetrifineartsnbc@gmail.com</p>
                </div>
             </div>
            </div>
          </div>
         
          <div className="footer3">
            <h2>Contact Info</h2>
            <div className="footetcontent">
             <p> <FaPhoneAlt className="phoneicons" />+91 7868090552</p>
             <div className="mobile">
                <p title=""><MdSendToMobile className="mobileicons" />+91 8610561369</p>
                <p><MdSendToMobile className="mobileicons" />+91 8778220718</p>
                {/* <p><MdSendToMobile className="mobileicons" />+91 9469809008</p> */}
                {/* <p><MdSendToMobile className="mobileicons" />+91 9789666575</p> */}
             </div>
            </div>
          </div>
          </div>
          <div className="quicklinks">
            <div className="quicklinks1">
            <a href="">Quick Links</a>
           <Link to="/"> <h4>- Home</h4></Link>
           <Link to="/about"> <h4>- About</h4></Link>
           <Link to="/product"> <h4>- Products</h4></Link>
           <Link to="/works"> <h4>- Our Works</h4></Link>
           <Link to="/contact"> <h4>- Contact Us</h4></Link>
          
            </div>
<div className="wat">
<a href="https://wa.me/7868090552/?text=Enquiry">
<img src={watsappimg} alt="" className="watsimg"/>

</a>
</div>
          </div>
        </div>
      </div>
      <div className="creator">
      <p>Copyright © 2022, Vetri Printographs All rights reserved  Developed by <img src={gklogo} alt="" /> Gk creations 7904303676
</p>        </div>
<div className="creator1">
      <p>Copyright © 2022, Vetri Printographs All rights reserved  Developed by 
</p>    
<span><img src={gklogo} alt="" /> Gk creations 7904303676</span>    </div>

    </div>
  );
};

export default Footer;
