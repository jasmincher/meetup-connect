import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Home.css'


const Home = () => (



    <div className="home">
        <h4>Find meetups near you that match your interests</h4>

        <Link to="/Form">
            <button className="btn btn-primary">Lets Go</button>
        </Link>

    </div>


)

export default Home;
