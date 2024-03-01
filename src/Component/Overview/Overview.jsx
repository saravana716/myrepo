import React from "react";
import "./Overview.css";
import overviewimg from "../../Assets/images/IMG-20240207-WA0046.jpg";
const Overview = () => {
  return (
    <>
      <div className="overview">
        <div className="overview1">
          <div className="overview2">
            <div className="overview3">
              <h5>ABOUT VETRI FINE ARTS</h5>
              <h1>OVERVIEW</h1>
              <p>
                We take immense pride in being recognized as the premier
                notebook printers in Sivakasi, Tamil Nadu, consistently
                delivering top-tier products across the globe. As we embark on
                our 30th year of operation, our dedication to excellence and
                customer satisfaction remains unwavering. Since our
                establishment in 1991, Vetri Notebooks Offset Printers has been
                a trailblazer in the industry, setting the standard for premium
                quality notebooks, corporate diaries, and paper products. Our
                commitment to meeting the diverse needs of our clientele drives
                us to offer an extensive array of printing services. From
                journals and posters to corporate diaries and personalized
                calendars, we specialize in crafting bespoke solutions tailored
                to your business requirements. At Vetri Notebooks Offset
                Printers, we blend passion for our craft with a relentless
                pursuit of customer satisfaction, ensuring that each product
                surpasses expectations.
              </p>
            </div>
            <div className="overviewimg">
              <img src={overviewimg} alt="" />
            </div>
          </div>
          <div className="profile">
            <h1>PROFILE</h1>
            <p>We are honored to be acknowledged as the foremost notebook printers in Sivakasi, Tamil Nadu, proudly serving customers worldwide with our exceptional products.
              At Vetri Notebooks Offset Printers, we blend innovation with
              tradition, ensuring that each product we deliver is of the highest
              quality.With a passion for our craft and a commitment to our customers, we strive to exceed expectations in every aspect of our business. Our extensive range of printing services includes journals, posters, corporate diaries, personalized calendars, and more, all customized to suit the unique needs of your business.Thank you for choosing us as your partner in printing
              excellence. Join us as we continue to redefine excellence in the
              printing industry, setting new benchmarks with every project we
              undertake. Thank you for choosing Vetri Notebooks Offset Printers
              as your trusted printing partner.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
