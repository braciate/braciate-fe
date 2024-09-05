import React from 'react';
import './Sponsorship.css';
import sponsorshipTitle from '/src/assets/img/sponsorship_title.png';

const sponsorImages = [
  'src/assets/img/sponsorship_imgs/slider2_1.png',
  'src/assets/img/sponsorship_imgs/slider2_2.png',
  'src/assets/img/sponsorship_imgs/slider2_3.png',
  'src/assets/img/sponsorship_imgs/slider2_4.png',
  'src/assets/img/sponsorship_imgs/slider2_5.png',
  'src/assets/img/sponsorship_imgs/slider2_6.png',
  'src/assets/img/sponsorship_imgs/slider2_7.png',
  'src/assets/img/sponsorship_imgs/slider2_8.png',
  'src/assets/img/sponsorship_imgs/slider2_9.png',
];

const Sponsorship = () => {
  const renderSlider = (className) => (
    <div className={`slider ${className}`}>
      <div className="slider-track">
        {[...sponsorImages, ...sponsorImages].map((imageUrl, index) => (
          <div key={index} className="item">
            <div className="circle">
              <img src={imageUrl} alt={`Sponsor ${index + 1}`} className="sponsor-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="sponsorship-container">
      <div className="sponsorship-content">
        <div className="sponsorship-title">
          <img src={sponsorshipTitle} alt="Sponsorship" />
        </div>
        <div className="sliders-wrapper">
          {renderSlider('slider-top')}
          {renderSlider('slider-bottom')}
        </div>
      </div>
    </main>
  );
};

document.addEventListener('DOMContentLoaded', () => {
    const sliderTracks = document.querySelectorAll('.slider-track');
  
    sliderTracks.forEach(track => {
      const items = track.querySelectorAll('.item');
  
      items.forEach(item => {
        item.addEventListener('mouseenter', () => {
          track.style.animationPlayState = 'paused';
        });
  
        item.addEventListener('mouseleave', () => {
          track.style.animationPlayState = 'running';
        });
      });
    });
  });

export default Sponsorship;