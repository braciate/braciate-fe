import React from 'react';
import EventThemeTitle from '../assets/img/eventheme-text.svg';
import EventThemeImg from '../assets/img/anargya-text.svg';
import GlitterBg from '../assets/img/glitter-eventtheme.png';
import './EventTheme.css';

const EventTheme = () => {
    return (
        <main className='event-theme'>
            <div className='glitter-bg'>
                <img src={GlitterBg} alt="" />
            </div>
            <img src={EventThemeTitle} alt="" />
            <img src={EventThemeImg} alt="" id='anargya-text'/>
            <p>Cita-cita untuk menjadikan Universitas Brawijaya sebagai tempat yang berharga dan bermanfaat bagi seluruh simpul Brawijaya.</p>
        </main>
    );
}

export default EventTheme;