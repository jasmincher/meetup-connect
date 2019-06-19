import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Home.css'


const Home = () => (
    <div>
        <h4 className="home">Find meetups near you that match your interests</h4>

        <Link to="/Form">
            <button className="btn btn-primary">Lets Go</button>
        </Link>
    </div>
)

export default Home;
