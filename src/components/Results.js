import React from 'react';
import { Link } from 'react-router-dom';
import ResultsCard from './ResultsCard';
import FullStack from '../images/fullstack.png';

// class Results extends React.Component{


  
  const Results = () => (
    
    <div className="container">

    <ResultsCard img={FullStack} eventName="FullStack Cyber Bootcamp" eventDate="Mon, Sep 16, 7:00am" eventLoc="New York, NY" eventPrice="Free"/>
    
    <ResultsCard img={FullStack} eventName="FullStack Cyber Bootcamp" eventDate="Mon, Oct 13, 9:00am" eventLoc="New York, NY" eventPrice="Free"/>
    

    <div className="home">
      <h4 className="heading">Connect to other women with the same interest near you</h4>
    
      <div className="button">

      <Link to="/Connect">
        <button className="btn btn-dark">Lets Go</button>
      </Link>
      </div>
    
    
    </div>
  </div>
)

// 
export default Results;
