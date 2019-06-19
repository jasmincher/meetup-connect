import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import Results from './Results';
import Connect from './Connect';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../css/Main.css'




const Main = () => (
    
    <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
    
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Form" component={Form} />
        <Route path="/Results" component={Results} />
        <Route path="/Connect" component={Connect} />


    </Switch>
    </ReactCSSTransitionGroup>

)



export default Main;