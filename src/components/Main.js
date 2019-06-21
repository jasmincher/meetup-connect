import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import Results from './Results';
import Connect from './Connect';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import Api from './Api';



function Main({ location }) {

  return (

    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <section className="route-section">


            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/Form" component={Api} />
              <Route path="/Results" component={Results} />
              <Route path="/Connect" component={Connect} />
            </Switch>

          </section>

        </CSSTransition>
      </TransitionGroup>
    </Wrapper>

  )
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: .02;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export default withRouter(Main);