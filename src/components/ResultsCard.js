import React from 'react';
import '../css/ResultsCard.css'




function ResultsCard(props) {
    console.log(props.event.name.text);
    return (
        <div className="results-card">
            
            {/* <img src={props.event.logo.original.url} className="results-img" /> */}
          
            <div className="details">
               
                <a href={props.event.url}>
                        <h6> {props.event.name.text}</h6>
                    </a>
                    <p> {props.event.start.local}</p>
                    <p>{props.event.url}</p>
               

            </div>

        </div>
    );
}


export default ResultsCard;
