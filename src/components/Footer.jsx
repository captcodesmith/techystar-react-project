import React from 'react';
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
  AiFillTwitterCircle,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TechyStar</h1>
        <p>@all rights reserved</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          <span>
            <AiFillLinkedin />
          </span>
          <span>
            <AiFillYoutube />
          </span>
          <span>
            <AiFillInstagram />
          </span>
          <span>
            <AiFillTwitterCircle />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
