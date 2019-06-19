import React from 'react';
import '../css/ConnectCard.css';

function ConnectCard(props) {
    return (
        <div className="connect-card">
            
            <img src={props.img} className="person-img" />
           
            <div className="info">
                <p>{props.name}</p>
                <p>{props.email}</p>
            </div>

        </div>
    );
}


export default ConnectCard;
