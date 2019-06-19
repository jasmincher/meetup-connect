import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';



const Header = () => (

    <div className="header">
        <div className="header-overlay">
            <Link to="/" style={{textDecoration: 'none'}}>
                <h1 className="header-title">Meetup Connect</h1>
            </Link>
        </div>
    </div>
)

export default Header;
