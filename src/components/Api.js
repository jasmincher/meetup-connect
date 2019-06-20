import React from 'react';
import axios from 'axios';
import Form from './Form';
import { Redirect } from 'react-router-dom';
import Results from './Results';

import { Link } from 'react-router-dom';
import ResultsCard from './ResultsCard';
import FullStack from '../images/fullstack.png';

class Api extends React.Component {
        state = {
            events: [],
            found: false
        }
   

    searchEvent = (e) => {
        // console.log("we got here")

        let baseUrl = 'https://www.eventbriteapi.com/v3';

        e.preventDefault();
        let userInput1 = document.getElementById('input5').value;
        let userInput2 = document.getElementById('input4').value;

        console.log(userInput1);
        console.log(userInput2);

        axios.get(baseUrl + '/events/search/?q=' + userInput1 + '&location.address=' + userInput2 + '&token=3SUYOF72RJQ2UOWNNTHD')
            .then((resolve) => {

                // console.log(resolve.data.events);
                // console.log(resolve.data.events[0].name.text);
                // console.log(resolve.data.events[0].url);
                // console.log(resolve.data.events[0].start.local);

                this.setState({ events: resolve.data.events, found: true });
            })

            .catch((err) => {
                console.log(err);
                console.log("Something went wrong");
                this.setState({ found: false });
            });

      
    }

    render() {
        console.log("yerrrr");
        console.log(this.state.events);

        const resultCards =this.state.events.map(event => <ResultsCard event={event} />)

        console.log(resultCards)

        if (this.state.found) {

            // return <Redirect to={{ pathname: "/Results", state: { data: this.state.events } }} />
            return (
               <div className = "container" >
                    {resultCards}

                    <div className="home">
                        <h4 className="heading">Connect to other women with the same interest near you</h4>

                        <div className="button">

                            <Link to="/Connect">
                                <button className="btn btn-dark">Lets Go</button>
                            </Link>
                        </div>


                    </div>
  </div >
            )
        }

        return (
            <div>
                <Form searchEvent={this.searchEvent} />
            </div>
        );
    }
}

export default Api;













