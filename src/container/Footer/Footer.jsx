import React from 'react';
import { images } from '../../constants';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
      <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Kolkata</p>
        <p className="p__opensans">+91 9835110970</p>
        <p className="p__opensans">+91 9471155998</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.deeve} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" alt='' style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
         <a href="#"> <FiFacebook /> </a>
          <FiTwitter />
          <FiInstagram />
        </div>
    </div>
    <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 &#169; Delight Events. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
