import React from 'react';
import AppThemeColor from '../../AppThemeColor';
import { useSelector } from 'react-redux';
import Coding1 from '../../Assets/Images/gallery/coding.jpg';
import Coding2 from '../../Assets/Images/gallery/coding2.jpg';
import Coding3 from '../../Assets/Images/gallery/coding3.jpg';
import Coding4 from '../../Assets/Images/gallery/coding4.jpg';
import Coding5 from '../../Assets/Images/gallery/coding5.jpg';
import Coding6 from '../../Assets/Images/gallery/coding6.jpg';

const Projects = () => {
  const app_theme = useSelector((state) => state.appTheme);

  const { primaryColor, textColor, bodyBgColor, cardBorderColor } =
    AppThemeColor[app_theme];

  const coding_images = [Coding1, Coding2, Coding3, Coding4, Coding5, Coding6];

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
                  <img
                    src={
                      coding_images[
                        Math.floor(Math.random() * coding_images.length)
                      ]
                    }
                    alt='Coding'
                  />
                </div>
                <div className='details'>
                  <h3>Las Vegas</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem pariatur neque eligendi voluptatum magni dolorem
                    ipsam similique ducimus architecto ipsum!
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
                  <img
                    src={
                      coding_images[
                        Math.floor(Math.random() * coding_images.length)
                      ]
                    }
                    alt='new york city'
                  />
                </div>
                <div className='details'>
                  <h3>New York City</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem pariatur neque eligendi voluptatum magni dolorem
                    ipsam similique ducimus architecto ipsum!
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
                  <img
                    src={
                      coding_images[
                        Math.floor(Math.random() * coding_images.length)
                      ]
                    }
                    alt='paris'
                  />
                </div>
                <div className='details'>
                  <h3>Paris</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem pariatur neque eligendi voluptatum magni dolorem
                    ipsam similique ducimus architecto ipsum!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className='section-title-header text-center mt-3'>
              <button className='btn btn-primary'>See More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
