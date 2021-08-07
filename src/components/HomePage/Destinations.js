import React from 'react'
import './styles/Destinations.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

import Delhi from '../Products/Delhi/Delhi';

function Destinations() {

    // const scrollx = () => {
    //     window[`scrollTo`]({ width: 300, behavior: `smooth`});
    //     console.log("clicked");
    // }

    return (
       
        <div className="destinations-container">
            <div className="destinations-head">
                <h2>BRANDNAME DESTINATIONS</h2>
            </div>
            <div className="destinations-card">
                <div className="card card-1">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/268029938.jpg?k=4b142d4f59ce983d1867b826d6620fdc6a2d58ba1ed04c1a9d276d3f5bab9c12&o=&hp=1" alt="destination" className="destination-img" />
                    <h2 className="destination-name">
                    <Link to='/delhi'> Delhi </Link>
                    </h2>
                </div>
                <div className="card card-2">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/268029938.jpg?k=4b142d4f59ce983d1867b826d6620fdc6a2d58ba1ed04c1a9d276d3f5bab9c12&o=&hp=1" alt="destination" className="destination-img" />
                    <h2 className="destination-name">
                    <Link to='/kerala'>  Kerala </Link>
                   </h2>
                </div>
                <div className="card card-3">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/268029938.jpg?k=4b142d4f59ce983d1867b826d6620fdc6a2d58ba1ed04c1a9d276d3f5bab9c12&o=&hp=1" alt="destination" className="destination-img" />
                    <h2 className="destination-name">
                    <Link to='/mumbai'> Mumbai  </Link>
                    </h2>
                </div>
                <div className="card card-4">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/268029938.jpg?k=4b142d4f59ce983d1867b826d6620fdc6a2d58ba1ed04c1a9d276d3f5bab9c12&o=&hp=1" alt="destination" className="destination-img" />
                    <h2 className="destination-name">
                    <Link to='/rajasthan'>Rajasthan  </Link></h2>
                </div>
                <div className="card card-5">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/268029938.jpg?k=4b142d4f59ce983d1867b826d6620fdc6a2d58ba1ed04c1a9d276d3f5bab9c12&o=&hp=1" alt="destination" className="destination-img" />
                    <h2 className="destination-name">Destination 5</h2>
                </div>
                <div className="card card-6">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/268029938.jpg?k=4b142d4f59ce983d1867b826d6620fdc6a2d58ba1ed04c1a9d276d3f5bab9c12&o=&hp=1" alt="destination" className="destination-img" />
                    <h2 className="destination-name">Destination 6</h2>
                </div>
                <div className="card card-4">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/268029938.jpg?k=4b142d4f59ce983d1867b826d6620fdc6a2d58ba1ed04c1a9d276d3f5bab9c12&o=&hp=1" alt="destination" className="destination-img" />
                    <h2 className="destination-name">Destination 7</h2>
                </div>
                <div className="card card-5">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/268029938.jpg?k=4b142d4f59ce983d1867b826d6620fdc6a2d58ba1ed04c1a9d276d3f5bab9c12&o=&hp=1" alt="destination" className="destination-img" />
                    <h2 className="destination-name">Destination 8</h2>
                </div>
            </div>
        </div>

        
    )
}

export default Destinations
