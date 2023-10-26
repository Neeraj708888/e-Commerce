import React from 'react';
import './Hero.css';
import hero from '../Assets/hero.jpg';
import hand from '../Assets/hand.png';
import rightarrow from '../Assets/rightarrow.png';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2><i>NEW ARRIVAL ONLY</i></h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={hand} alt="Icon" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>

                <div className="hero-letest-btn">
                    <div>Letest Collection</div>
                    <img src={rightarrow} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img className='hero-img' src={hero} alt="" />
            </div>
        </div>
    )
}

export default Hero;
