import React from 'react'
import './styles/Hero.css';

function Hero() {
    return (
        <div className="hero-conatiner">
            <div className="hero-img-container">
                <img className="hero-img" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/148422957.jpg?k=935d9eda3f3c20e8fdddc2cc0e1f280bbd9b83dca3a11afc2b97333480617d17&o=&hp=1" alt="hero" />
            </div>
            <div className="booking">
                <div className="destination-container">
                    <select className="select-destination" name="select-destination">
                        <option value="select-destination" className="option-destination">SELECT DESTINATION</option>
                        <option value="Delhi" className="option-destination">Delhi</option>
                        <option value="Mumbai" className="option-destination">Mumbai</option>
                        <option value="Rajasthan" className="option-destination">Rajasthan</option>
                        <option value="Kerela" className="option-destination">Kerela</option>
                        <option value="Leh" className="option-destination">Leh</option>
                        <option value="Agra" className="option-destination">Agra</option>
                        <option value="Bir" className="option-destination">Bir</option>
                        <option value="Mussoorie" className="option-destination">Mussoorie</option>
                    </select>
                </div>
                <div className="check-in">
                    <p className="checkin-card">CHECK-IN</p>
                    </div>
                <div className="check-out">
                <p className="checkout-card">CHECK-OUT</p>
                    </div>
                <div className="btn-container">
                    <button className="btn-book">BOOK NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
