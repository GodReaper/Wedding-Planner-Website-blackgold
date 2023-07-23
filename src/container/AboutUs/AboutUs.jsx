import React from 'react';
import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.D} alt="" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="" />
        <p className="p__opensans">Lorem ipsum dolor sit amet. Qui voluptas similique et veritatis harum non impedit inventore! Et nesciunt asperiores eum magni eligendi est explicabo voluptate. Ut accusantium necessitatibus eum consequatur similique aut assumenda laborum ut exercitationem commodi ea alias cumque et quia aspernatur! Nam sint ipsum sit fugit consequatur ad quia consequuntur.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.empty} alt="" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="" />
        <p className="p__opensans">Lorem ipsum dolor sit amet. Qui voluptas similique et veritatis harum non impedit inventore! Et nesciunt asperiores eum magni eligendi est explicabo voluptate. Ut accusantium necessitatibus eum consequatur similique aut assumenda laborum ut exercitationem commodi ea alias cumque et quia aspernatur! Nam sint ipsum sit fugit consequatur ad quia consequuntur.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
