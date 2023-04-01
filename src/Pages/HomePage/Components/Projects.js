import React, { useState } from "react";
import AppThemeColor from "../../../AppThemeColor";
import { useSelector } from "react-redux";
import Coding1 from "../../../Assets/Images/gallery/coding.jpg";
import Coding2 from "../../../Assets/Images/gallery/coding2.jpg";
import Coding3 from "../../../Assets/Images/gallery/coding3.jpg";
// import Coding4 from "../../../Assets/Images/gallery/coding4.jpg";
// import Coding5 from "../../../Assets/Images/gallery/coding5.jpg";
// import Coding6 from "../../../Assets/Images/gallery/coding6.jpg";

const Projects = () => {
  const app_theme = useSelector((state) => state.appTheme);

  const [expandMoreProjects] = useState(false);

  const {
    primaryColor,
    textColor,
    bodyBgColor,
    cardBorderColor,
    commonDarkColor,
  } = AppThemeColor[app_theme];

  return (
    <section id='projects' className='projects-section'>
      <div className='container'>
        <div className='section-header row justify-content-center'>
          <div className='col-12'>
            <div className='section-title-header text-center'>
              <h1
                className='projects-section-title'
                style={{ color: textColor }}>
                Projects
              </h1>
            </div>
          </div>
          <div className='col-12'>
            <div className='cards'>
              <div
                className='card card1'
                style={{
                  backgroundColor: bodyBgColor,
                  borderColor: cardBorderColor,
                }}>
                <div className='container'>
                  <img src={Coding3} alt='Coding' />
                </div>
                <div className='details'>
                  <a href='https://jetmanlabs.com/'>
                    <h3 style={{ color: textColor }}>Jetmanlabs</h3>
                  </a>
                  <p style={{ color: cardBorderColor }}>
                    API development platform for design development, test,
                    automation to documention and marketplace for API first
                    digital world.
                  </p>
                </div>
              </div>
              <div
                className='card card2'
                style={{
                  backgroundColor: bodyBgColor,
                  borderColor: cardBorderColor,
                }}>
                <div className='container'>
                  <img src={Coding2} alt='new york city' />
                </div>
                <div className='details'>
                  <a href='https://truckstop.com/blog/truckstop-com-launches-loadpay-transactional-payment-network/'>
                    <h3 style={{ color: textColor }}>Truckstop ( Loadpay )</h3>
                  </a>
                  <p style={{ color: cardBorderColor }}>
                    LoadPay allows carriers to decide when and how they are
                    paid, including a PayMeNow™ instant payment feature, based
                    on their cash flow needs.
                  </p>
                </div>
              </div>
              <div
                className='card card3'
                style={{
                  backgroundColor: bodyBgColor,
                  borderColor: cardBorderColor,
                }}>
                <div className='container'>
                  <img src={Coding1} alt='paris' />
                </div>
                <div className='details'>
                  <a href='#'>
                    <h3 style={{ color: textColor }}>HP ( Net Promo Frame )</h3>
                  </a>
                  <p style={{ color: cardBorderColor }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem pariatur neque eligendi voluptatum magni dolorem
                    ipsam similique ducimus architecto ipsum!
                  </p>
                </div>
              </div>
            </div>
          </div>
          {expandMoreProjects && (
            <div className='col-12'>
              <div className='section-title-header text-center mt-3'>
                <button
                  className='btn project-see-more-btn'
                  style={{ background: primaryColor, color: commonDarkColor }}>
                  See More
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
