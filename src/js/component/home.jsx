import React, { useState } from 'react';

const colors = ['red', 'yellow', 'green'];

const Semaphore = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  setInterval(() => {
    setCurrentIndex((currentIndex + 1) % colors.length);
  }, 3000);

  const currentColor = colors[currentIndex];

  return (
    <div style={{ width: 100, height: 100, borderRadius: '50%', background: currentColor }}></div>
  );
};

export default Semaphore;

