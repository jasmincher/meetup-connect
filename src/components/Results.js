import React from 'react';
import { Link } from 'react-router-dom';
import ResultsCard from './ResultsCard';
import FullStack from '../images/fullstack.png';
import APi from './Api';




const Results = () => (

  <div className="container">

    <ResultsCard img={FullStack} eventName="hi" eventDate="Mon, Sep 16, 7:00am" eventLoc="New York, NY" eventPrice="Free" />

    <ResultsCard img={FullStack} eventName="FullStack Cyber Bootcamp" eventDate="Mon, Oct 13, 9:00am" eventLoc="New York, NY" eventPrice="Free" />


    <div className="home">
      <h4 className="heading">Connect to other women with the same interest near you</h4>

      <div className="button">

        <Link to={"/Connect" + document.getElementById("input5")}>
          <button className="btn btn-dark">Lets Go</button>
        </Link>
      </div>


    </div>
  </div>
)

// }
export default Results;
