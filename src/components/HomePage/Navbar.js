import React from 'react';
import './styles/Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
               <a href='/'><h1 className="brand">BrandName</h1></a> 
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
