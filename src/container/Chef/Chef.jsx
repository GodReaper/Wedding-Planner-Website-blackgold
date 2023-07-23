import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'> 
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.owners} alt="" />

    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Word from the Owner"></SubHeading>
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="" />
          <p className="p__opensans">Lorem ipsum dolor sit amet. </p>
        
      </div>
      <p className="p__opensans">Et officia nobis in provident corrupti ut eius voluptas est eligendi beatae. Ut maiores fuga et illo rerum non ipsa animi sit maxime tenetur nam reprehenderit saepe. Est molestiae tempore ut eligendi officia a accusantium sint quo cumque quod cum nihil minus est nulla fuga.</p>
      </div>
      <div className="app__chef-sign">
        <p>Bipul Bhattacharjee</p>
        <p className='p__opensans'>CEO & Founder</p>
        <img src={images.signs} alt="" />
      </div>
    </div>

  </div>
);

export default Chef;
