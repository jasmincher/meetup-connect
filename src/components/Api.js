import React from 'react';
import axios from 'axios';
import Form from './Form';
import {Redirect} from 'react-router-dom';
import Results from './Results';

class Api extends React.Component {

    constructor(props) {
        super(props);
        this.redirect = false;
        // x
        this.state = {
            events: [],
            found: false
        }
    }

    searchEvent = (e) => {
        console.log("we got here")

        let baseUrl = 'https://www.eventbriteapi.com/v3';

        e.preventDefault();
        let userInput1 = document.getElementById('input5').value;
        let userInput2 = document.getElementById('input4').value;

        console.log(userInput1);
        console.log(userInput2);

        axios.get(baseUrl + '/events/search/?q=' + userInput1 + '&location.address=' + userInput2 + '&token=3SUYOF72RJQ2UOWNNTHD')
        .then((resolve) => {

            console.log(resolve.data.events);

            console.log(resolve.data.events[0].name.text);

            // console.log(resolve.data.events[0].start.local);
            console.log(resolve.data.events[0].url);
            console.log(resolve.data.events[0].start.local);
           


            this.setState({ events: resolve.data.events, found: true });
        })

            .catch((err) => {
                console.log(err);
                console.log("something wrong jeff");
                this.setState({ found: false });
            });

        this.redirect = true;

    }


    render() {
        console.log("here first")
        console.log(this.state)
       // console.log(this.events)
        if(this.redirect){
            return <Redirect to={ {pathname:"/Results", state:{data: this.state.events}}} />
        }

        return(
            <div>
                <Form searchEvent={this.searchEvent}/>
            </div>
        );
    }
}

    export default Api;













