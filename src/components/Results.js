import React from 'react';
import { Link } from 'react-router-dom';


const Results = () => (
    <div className="home">
        <h4>Connect to other women with the same interest near you</h4>
      <Link to="/Connect">
       <button className="btn btn-primary">Lets Go</button>
      </Link> 
    </div>
)

export default Results;
