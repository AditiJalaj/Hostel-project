import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <h1 className="brand">BRANDNAME</h1>
                <ul className="nav-pills">
                    <li className="dropdown-item list-item">
                        <a href="" className="dropdown anchor-item">Hostels</a>
                    
                        <div className="hostels-container">
                            <div className="dropdown-destinations-menu">
                                <h3 className="dropdown-destination">Destination</h3>
                            </div>
                            <div className="dropdown-destinations-menu">
                                <h3 className="dropdown-destination">Destination</h3>
                            </div>
                            <div className="dropdown-destinations-menu">
                                <h3 className="dropdown-destination">Destination</h3>
                            </div>
                            <div className="dropdown-destinations-menu">
                                <h3 className="dropdown-destination">Destination</h3>
                            </div>
                            <div className="dropdown-destinations-menu">
                                <h3 className="dropdown-destination">Destination</h3>
                            </div>
                            <div className="dropdown-destinations-menu">
                                <h3 className="dropdown-destination">Destination</h3>
                            </div>
                            <div className="dropdown-destinations-menu">
                                <h3 className="dropdown-destination">Destination</h3>
                            </div>
                            <div className="dropdown-destinations-menu">
                                <h3 className="dropdown-destination">Destination</h3>
                            </div>
                        </div>

                    </li>
                    <li className="list-item">
                        <a href="" className="anchor-item">Longstays</a>
                    </li>
                    <li className="list-item">
                        <a href="" className="anchor-item">Adventures</a>
                    </li>
                    <li className="list-item">
                        <a href="" className="anchor-item">Blog</a>
                    </li>
                    <li className="list-item">
                        <a href="" className="anchor-item">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
