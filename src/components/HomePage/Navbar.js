import React from 'react';
import './styles/Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <Link to="/">
                <h1 className="brand">BRANDNAME</h1>
                </Link>
                
                <ul className="nav-pills">
                <Link to ="/">
                    <li className="list-item">
                        <a href="" className="anchor-item">Hostels</a>
                    </li>
                </Link>
                <Link to ="/login">
                <li className="list-item">
                    <a href="" className="anchor-item">Login</a>
                </li> 
                </Link>
                    
                <Link to ="/contact">
                <li className="list-item">
                    <a href="" className="anchor-item">Contact Us</a>
                </li>
                </Link>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
