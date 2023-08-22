import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href='https://www.linkedin.com/in/puja-kri-singh/' target='_blank'><BsLinkedin/></a>
    </div>
    <div>
      <a href='https://www.facebook.com/profile.php?id=100035434549545' target='_blank'><FaFacebookF/></a>
    </div>
    <div>
      <a href='https://www.instagram.com/__puja._.singh__/' target='_blank'><BsInstagram/></a>
    </div>
  </div>
);

export default SocialMedia;
