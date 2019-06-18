import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import Results from './Results';
import Connect from './Connect';


const Main = () => (

    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Form" component={Form} />
        <Route path="/Results" component={Results} />
        <Route path="/Connect" component={Connect} />


    </Switch>
)

export default Main;