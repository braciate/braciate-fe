import React, { useState, useEffect } from 'react';
import heroTitle from '../assets/img/herotitlenotrophy.svg';
import pialaImg from '../assets/img/piala.png';
import heroTitleAndro from '../assets/img/braciate-title-andro.svg';
import './HeroSection.css';

const HeroSection = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <main className='hero-section'>
            <div className='hero-title'>
                <img id='piala-img' src={pialaImg} alt="" />
                <img id='title-hero' src={isMobile ? heroTitleAndro : heroTitle} alt="Hero Title" />
            </div>
        </main>
    );
}

export default HeroSection;
