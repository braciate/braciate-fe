import React, {useState} from 'react';
import GlitterLeft from '../assets/img/glitterfilosofi-left.svg';
import GlitterRight from '../assets/img/glitterfilosofi-right.svg';
import FilosofiLogoImg from '../assets/img/filosofilogo-text.svg';
import logo1 from '../assets/img/filosofilogo-1.svg';
import logo2 from '../assets/img/filosofilogo-2.svg';
import logo3 from '../assets/img/filosofilogo-3.svg';
import logo4 from '../assets/img/filosofilogo-4.svg';
import logo5 from '../assets/img/filosofilogo-5.svg';
import './FilosofiLogo.css';

const FilosofiLogo = () => {
    const slides = [
        <div className='slide-1'>
            <img src={logo1} alt="" />
        </div>,
        <div className='slide-2'>
            <img src={logo2} alt="" />
        </div>,
        <div className='slide-3'>

        </div>,
        <div className='slide-4'>

        </div>,
        <div className='slide-5'>

        </div>
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };

    return (
        <main className='filosofi-logo'>
            <div className='filosofi-glitter'>
                <img src={GlitterLeft} alt="" />
            </div>
            <img src={FilosofiLogoImg} alt="" id='filosofi-logo-img'/>
            <div className='carousel'>
                <div className='carousel-inner' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className='carousel-slide'>
                            {slide}
                        </div>
                    ))}
                </div>
            </div>
            <div className='carousel-controls'>
                <button onClick={goToPrevious}>Previous</button>
                <div className='carousel-indicators'>
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
                <button onClick={goToNext}>Next</button>
            </div>
        </main>
    );
}

export default FilosofiLogo;