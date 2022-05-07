import React from 'react';
import Img1 from '../images/img_1.jpg';
import Img2 from '../images/img_2.jpg';
import Img3 from '../images/img_3.jpg';
import Img4 from '../images/img_4.jpg';
import Img5 from '../images/img_5.jpg';
import Img6 from '../images/img_6.webp';

export default function HeroCard() {
    return (
        <div className="hero-card">
            <div className="hero-pics">
                <img src={Img1} alt="" />
                <img src={Img2} alt="" />
                <img src={Img3} alt="" />
                <img src={Img4} alt="" />
                <img src={Img5} alt="" />
                <img src={Img6} alt="" />
            </div>
            <div className='hero-content'>
                <h1 className='title'>
                    Online Experiences
                </h1>
                <p className='hero-text'>
                    Join unique interactive activities led by
                    one-of-a-kind hosts — all without leaving home.
                </p>
            </div>
        </div>
    )
}