import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';



const Header = () => (
    <div className="header">
        <Link to="/">
            <h1>This is Header</h1>
        </Link>
    </div>
)

export default Header;
