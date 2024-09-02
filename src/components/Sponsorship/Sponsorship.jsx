import React from 'react';
import './Sponsorship.css';

const Sponsorship = () => {
  const sponsorsTop = Array(10).fill(null);
  const sponsorsBottom = Array(20).fill(null);

  const renderSlider = (sponsors, width, height, reverse = false) => (
    <div 
      className={`slider ${reverse ? 'reverse' : ''}`}
      style={{
        '--width': `${width}px`,
        '--height': `${height}px`,
        '--quantity': sponsors.length
      }}
    >
      <div className="slider-track">
        {[...sponsors, ...sponsors].map((_, index) => (
          <div key={index} className="item">
            <div className="circle"></div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="sponsorship-container">
      <h1 className="sponsorship-title">Sponsorship</h1>
      {renderSlider(sponsorsTop, 90, 90, true)}
      {renderSlider(sponsorsBottom, 60, 60)}
    </main>
  );
};

export default Sponsorship;