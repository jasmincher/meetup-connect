import React from 'react';
import '../css/ResultsCard.css'




function ResultsCard(props) {
    console.log(props.event);
 

    return (
        <div className="results-card">

            {/* <img src={props.event.logo.original.url} className="results-img" /> */}

            <div className="details">

                <a href={props.event.url}>
                    <p> {props.event.name.text}</p>
                </a>
                <p> {props.event.start.local}</p>
                <p>{props.event.url}</p>


            </div>

        </div>
    );
}


export default ResultsCard;
