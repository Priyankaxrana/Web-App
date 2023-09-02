import React, { useState } from 'react';

function Navigation() {
  // Define state to track the button click status
  const [buyClicked, setBuyClicked] = useState(false);
  const [sellClicked, setSellClicked] = useState(false);

  // Function to handle the "BUY" button click
  const handleBuyClick = () => {
    setBuyClicked(true);
    setSellClicked(false);
  };

  // Function to handle the "SELL" button click
  const handleSellClick = () => {
    setSellClicked(true);
    setBuyClicked(false);
  };

  return (
    <nav>
      <div className="button-container">
        <button
          onClick={handleBuyClick}
          className={`nav-button ${buyClicked ? 'active' : 'inactive'}`}
        >
          BUY
        </button>
        <button
          onClick={handleSellClick}
          className={`nav-button ${sellClicked ? 'active' : 'inactive'}`}
        >
          SELL
        </button>
      </div>
    </nav>
  );
}

export default Navigation;


