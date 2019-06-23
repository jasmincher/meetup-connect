import React from 'react';
import '../css/ConnectCard.css';
import Woman from '../images/placeholder-woman.jpg'



function ConnectCard(props) {
    return (
        <div className="connect-card">
            
            <img src={Woman} className="person-img" />
           
            <div className="info">
                <p>{props.co.FirstName} {props.co.LastName}</p>
                <p>{props.co.Email}</p>
            </div>

        </div>
    );
}


export default ConnectCard;
