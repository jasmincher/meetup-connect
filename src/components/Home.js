import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => (
    <div>
        <h4>Find meetups near you that match your interests</h4>

        <Link to="/Form">
            <button>Lets Go</button>
        </Link>
    </div>
)

export default Home;
