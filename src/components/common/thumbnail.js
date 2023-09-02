import React from 'react'
import reactLogo from "../../images/appLogo.png";


function listingThumbnail() {
  return (
    <div className="thumbnail-container">
      <div className='productthumbnail'>
      <img src={reactLogo} alt="app logo" className="listingThumbnail"/>
      </div>
      <div className="info-container">
        <h2 className='listingTitle'>Title</h2>
        <h3 className='listingAddress'>Address</h3>
      </div>
    </div>
  )
}
export default listingThumbnail
