import React, { Component } from 'react';
// import Radium from 'radium';
import { Container, Row } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/nav/NavBar.js';
import Home from './components/pages/Home.js';
import Counterfeit from './components/pages/Counterfeit.js';
import Custom from './components/pages/Custom.js';
import TakeOwnership from './components/pages/TakeOwnership.js';
import FAQ from './components/pages/FAQ.js';

import './App.css';
import config from './services/config';

class App extends Component {
  render() {

    return (
      <div style={{fontFamily: "'Raleway', sans-serif"}}>
          <NavBar></NavBar>

          <Container style={{marginBottom:"75px"}}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/counterfeit" component={Counterfeit} />
              <Route exact path="/custom" component={Custom} />
              <Route exact path="/own" component={TakeOwnership} />
              <Route exact path="/faq" component={FAQ} />
              {/* <Route path="/settings/:userId" component={Settings} /> */}
            </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
