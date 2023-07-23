import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper-info">
      <SubHeading title="An Exquisite Wedding Experience"/>
      <h1 className='app__header-h1'>The Key to Delightful Celebrations</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Lorem ipsum dolor sit amet. Id dignissimos consequatur ab nobis quibusdam et consequatur omnis.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className="app__wrapper-img">
    <img src={images.head} alt="" />
    </div>
  </div>
);

export default Header;
