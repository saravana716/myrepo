import React from "react";
import "./aboutcompany.css";

import ourworks from "./1209397.jpg"
import ourworks1 from "./2010-08-20_Plastikspiralbindung-1[1].jpg"
import ourworks2 from "./KnowYourLaminator.webp"
import ourworks4 from "./maxresdefault.jpg"
import ourworks3 from "./notebooks-2048px-1981.webp"
import { VscDebugBreakpointData } from "react-icons/vsc";
import companyimage from "../../Assets/images/IMG-20240207-WA0027.jpg";
const AboutCompany = () => {
  return (
    <>
      <div className="aboutcompany">
        <div className="aboutcompany1">
          <div className="aboutcompany2">
            <img src={companyimage} alt="" />
          </div>
          <div className="aboutcompany3">
            <h1>COMPANY HISTORY</h1>
            <h3>VETRI FINE ARTS</h3>
            <div className="paragraph">
              <VscDebugBreakpointData className="check"/>
              <p>
              Founded in 1991 by partners S.M. Mohamed Farooq and M. Mohamed Imran, Vetri Fine Arts embarked on a journey to revolutionize the printing industry. With a shared vision of delivering unparalleled quality and service, they laid the foundation for a company that would soon become synonymous with excellence. Over the years, under the adept leadership of Marketing Manager M. Jalaludin Mohammed Akbar, Vetri Fine Arts has grown from strength to strength, establishing itself as a global leader in printing services.
              </p>
            </div>
            <div className="paragraph">
            <VscDebugBreakpointData className="check1"/>
        
              <p>
              Our commitment to innovation and customer satisfaction has been the cornerstone of our success. From our humble beginnings, we have expanded our repertoire to offer a comprehensive range of printing solutions. Whether it's notebook printing, poster printing, calendar printing, or diary printing, Vetri Fine Arts prides itself on delivering superior quality products that exceed expectations.
              </p>{" "}
            </div>
            <div className="paragraph">
            <VscDebugBreakpointData className="check2"/>
              
              <p>
              With a relentless focus on meeting the diverse needs of our clientele, we have honed our expertise to provide customized printing services tailored to the unique requirements of each client. Our dedication to excellence has earned us the trust and loyalty of customers worldwide, cementing our reputation as a trusted partner in printing solutions.
              </p>{" "}
            </div>
            <div className="paragraph">
              <VscDebugBreakpointData className="check2"/>
              <p>
              As we continue to evolve and adapt to the changing needs of the industry, Vetri Fine Arts remains committed to upholding the values of integrity, quality, and innovation that have been the hallmark of our success. With a passionate team driving us forward, we look forward to continuing our legacy of excellence for many years to come.
              </p>
            </div>
            
            
           
          </div>
        </div>
      </div>
     <div className="product123">
     <div className="productbox">
        <div className="sideview">
        <h1>S</h1>
            <h1>K</h1>
            <h1>R</h1>
            <h1>O</h1>
            <h1 title="">W</h1>
            <h1>R</h1>
        <h1>U</h1>
            <h1>O</h1>
        </div>
        <h5>OUR WORKS</h5>
        <div className="productbox1">
            <div className="productbox2">
                <div className="productbox3">
                    <img src={ourworks} alt="" />
                    <div className="productbox4">
                        BOOKS
                    </div>
                </div>
                
            </div>
            <div className="productbox2">
                <div className="productbox3">
                    <img src={ourworks1} alt="" />
                    <div className="productbox4">
                        NOTES
                    </div>
                </div>
                
            </div>
            <div className="productbox2">
                <div className="productbox3">
                    <img src={ourworks2} alt="" />
                    <div className="productbox4">
                        POSTERS
                    </div>
                </div>
                
            </div>
            <div className="productbox2">
                <div className="productbox3">
                    <img src={ourworks3} alt="" />
                    <div className="productbox4">
                        DIARIES
                    </div>
                </div>
                
            </div>
            <div className="productbox2">
                <div className="productbox3">
                    <img src={ourworks4} alt="" />
                    <div className="productbox4">
                        OTHERS
                    </div>
                </div>
                
            </div>
        </div>
      </div>
     </div>
     
    </>
  );
};

export default AboutCompany;
