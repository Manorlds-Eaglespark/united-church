import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/login_image.png';
import loginImage from '../assets/images/google.png';

const landingPageComponent = () => (
  <div>
    <div className="pageHeading">
      <span className="logo-r">United Church</span>
    </div>

    <div>
    <img className="center landing_image" src={logoImage} alt="" />
    <p className="logo-text color-blue">Sharing across a united CHURCH </p>
    <Link to="/select">
      <img className="center google-login" src={loginImage} alt="" />
    </Link>
  </div>
  </div>
);

export default landingPageComponent;
