import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import tech from '../images/women-in-tech.jpg';


const Header = () => (

    <div className="header" style={{backgroundImage: "url(" + tech + ")" }}>
        <div className="header-overlay">
            <Link to="/" style={{textDecoration: 'none'}}>
                <h1 className="header-title">Meetup Connect</h1>
            </Link>
        </div>
    </div>
)

export default Header;
