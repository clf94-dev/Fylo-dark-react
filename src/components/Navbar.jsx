import React from 'react'
import Logo from './images/logo.svg';
import './styles/App.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <img src={Logo} alt=""/>
                <ul className="nav-menu">
                    <li className="nav-item">Features</li>
                    <li className="nav-item">Team</li>
                    <li className="nav-item">Sign In</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
