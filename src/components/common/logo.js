import React from 'react'
import reactLogo from "../../images/appLogo.png";

function logo() {
    return (
    <div className="container">
    <div className="logo-sub-heading-container">
      <div className="logo-container">
        <img src={reactLogo} alt="app logo" className="logo" />
      </div>
      <div className="sub-heading">
        Hi, I’m Naman. I sell my second-hand fashion pieces to extend their life cycle and rehome them to a new wardrobe. Get in touch if you spot something you like.
      </div>
    </div>
    </div>
  );
}

export default logo