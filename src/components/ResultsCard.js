import React from 'react';
import '../css/ResultsCard.css'
import placeholder from '../images/event.png'




function ResultsCard(props) {
    console.log(props.event);
    var utcDate = props.event.start.utc;
    var localDate = new Date(utcDate);


    localDate = localDate.toLocaleString()


    if (!props.event.logo) {
        let url = placeholder;
        props.event['logo'] = {};
        props.event.logo['url'] = url;

    }

    console.log(localDate);

    return (
        <a href={props.event.url} target="_blank">

            <div className="results-card">

                <img src={props.event.logo.url} className="results-img" />

                <div className="details">


                    <strong>
                        <p> {props.event.name.text}</p>

                    </strong>
                    <p> {localDate}</p>

                </div>

            </div>
        </a>
    );
}


export default ResultsCard;
