import React, { useState, useEffect } from 'react';

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  useEffect(() => {
    setRandomNumber(generateRandomNumber());
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  function generateRandomNumber() {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit random number
  }

  return (
    <div>
      <p>Form No: {randomNumber}</p>
      
    </div>
  );
};

export default RandomNumberGenerator;
