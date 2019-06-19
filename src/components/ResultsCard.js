import React from 'react';
import '../css/ResultsCard.css'


function ResultsCard(props) {
    return (
        <div className="results-card">
            
            <img src={props.img} className="results-img" />
           
            <div className="details">
                <h6>{props.eventName}</h6>
                <p>{props.eventDate}</p>
                <p>{props.eventLoc}</p>
                <p>{props.eventPrice}</p>

            </div>

        </div>
    );
}


export default ResultsCard;
