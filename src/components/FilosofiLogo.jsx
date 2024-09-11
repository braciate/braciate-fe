import React, { useState } from 'react';
import GlitterLeft from '../assets/img/glitterfilosofi-left.svg';
import GlitterRight from '../assets/img/glitterfilosofi-right.svg';
import FilosofiLogoImg from '../assets/img/filosofilogo-text.svg';
import logo1 from '../assets/img/filosofilogo-1.svg';
import logo2 from '../assets/img/filosofilogo-2.svg';
import logo3 from '../assets/img/filosofilogo-3.svg';
import logo4 from '../assets/img/filosofilogo-4.svg';
import logo5 from '../assets/img/filosofilogo-5.svg';
import panahIcon from '../assets/img/panahdot.svg';
import preview1 from '../assets/img/previewlogo-1.png';
import preview2 from '../assets/img/previewlogo-2.svg';
import preview3 from '../assets/img/previewlogo-3.svg';
import preview4 from '../assets/img/previewlogo-4.svg';
import preview5 from '../assets/img/previewlogo-5.svg';
import previewandro1 from '../assets/img/previewlogoandro-1.svg';
import previewandro2 from '../assets/img/previewlogoandro-2.svg';
import previewandro3 from '../assets/img/previewlogoandro-3.svg';
import previewandro4 from '../assets/img/previewlogoandro-4.svg';
import previewandro5 from '../assets/img/previewlogoandro-5.svg';
import './FilosofiLogo.css';

const FilosofiLogo = () => {
    const slides = [
        <div className='slide'>
            <img src={logo1} alt="" />
            <div className='logo-info'>
                <h1>KILAU EMAS KEJAYAAN</h1>
                <p>Warna emas melambangkan prestasi, kemakmuran, dan keberhasilan yang diraih oleh seluruh Simpul Brawijaya, mencerminkan kekuatan dan pencapaian yang terus bersinar.</p>
            </div>
        </div>,
        <div className='slide'>
            <img src={logo2} alt="" />
            <div className='logo-info'>
                <h1>BINTANG PRESTASI</h1>
                <p>Bintang mewakili pencapaian yang gemilang dan menjadi simbol penghargaan yang diberikan kepada Simpul Brawijaya, menegaskan kualitas dan keunggulan yang diakui.</p>
            </div>
        </div>,
        <div className='slide'>
            <img src={logo3} alt="" />
            <div className='logo-info'>
                <h1>MAHKOTA PERJUANGAN</h1>
                <p>Ikon maskot yang menuju mahkota menggambarkan perjalanan penuh dedikasi dan usaha dari lembaga dalam meraih puncak prestasi, menunjukkan tekad yang kuat untuk mencapai kemenangan.</p>
            </div>
        </div>,
        <div className='slide'>
            <img src={logo4} alt="" />
            <div className='logo-info'>
                <h1>GELOMBANG UKIRAN ABADI</h1>
                <p>Gelombang ukiran yang memutar menggambarkan perjalanan panjang dan penuh arti dari lembaga dalam merajut kisah sukses, setiap likuan adalah jejak  dari dedikasi dalam mencapai tujuan besar.</p>
            </div>
        </div>,
        <div className='slide'>
            <img src={logo5} alt="" />
            <div className='logo-info'>
            <h1>LINGKARAN TEKAD TAK TERBATAS</h1>
            <p>Pecahan lingkaran yang mengelilingi logo mencerminkan  tekad tak tergoyahkan lembaga untuk melampaui batas-batas dan mencapai keberhasilan,  dengan semangat yang terus berputar tanpa henti.</p>
            </div>
        </div>
    ];

    const previews = [preview1, preview2, preview3, preview4, preview5];
    const previewsAndro = [previewandro1, previewandro2, previewandro3, previewandro4, previewandro5];
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
            <img src={FilosofiLogoImg} alt="" id='filosofi-logo-img' />
            <div className='carousel-and-preview'>
                <img src={previews[currentIndex]} alt="" className='preview-logo'/>
                <div className='carousel-and-indicators'>
                    <div className='carousel'>
                        <div className='carousel-inner' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {slides.map((slide, index) => (
                                <div key={index} className='carousel-slide'>
                                    {slide}
                                </div>
                            ))}
                        </div>
                    </div>
                    <img src={previewsAndro[currentIndex]} alt="" className='preview-logo-andro'/>
                    <div className='carousel-controls'>
                        <img src={panahIcon} onClick={goToPrevious} id='panah-kiri' alt="" />
                        <div className='carousel-indicators'>
                            {slides.map((_, index) => (
                                <div
                                    key={index}
                                    className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>
                        <img src={panahIcon} onClick={goToNext} id='panah-kanan' alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default FilosofiLogo;
