import React from 'react';
import { Link } from 'react-router-dom';
import ResultsCard from './ResultsCard';


const Results = () => (

  <div className="container">

    <ResultsCard eventName="coffeencoded" eventInfo="html n css" />
    
    <div className="home">
      <h4 className="heading">Connect to other women with the same interest near you</h4>
      
      <div className="button">

      <Link to="/Connect">
        <button className="btn btn-primary">Lets Go</button>
      </Link>
      </div>
    
    
    </div>
  </div>
)

export default Results;
