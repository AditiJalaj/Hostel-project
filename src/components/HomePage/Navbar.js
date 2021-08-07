import React from 'react';
import './styles/Navbar.css';

function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
               <a href='/'><h1 className="brand">BRANDNAME</h1></a> 
                <ul className="nav-pills">
                    <li className="list-item">
                        <a href="" className="anchor-item">Hostels</a>
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
