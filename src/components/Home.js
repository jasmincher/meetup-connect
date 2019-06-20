import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Home.css'


const Home = () => (

    <div className="home">

        <h4 className="heading">Find meetups near you that match your interests</h4>


        <div className="button">
            <Link to="/Form">
                <button className="btn btn-dark">Lets Go</button>
            </Link>

        </div>
    </div>
)

export default Home;
