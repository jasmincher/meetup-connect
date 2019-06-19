import React from 'react';
import '../css/ResultsCard.css'


function ConnectCard(props) {
    return (
        <div className="results-card">
            
            {/* <img src={props.img} /> */}
           
            <div className="details">
                <p>{props.eventName}</p>
                <p>{props.eventInfo}</p>
            </div>

        </div>
    );
}


export default ConnectCard;
