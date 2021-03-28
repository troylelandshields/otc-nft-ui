import React, { Component } from 'react';
// import Radium from 'radium';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/nav/NavBar.js';
import Home from './components/pages/Home.js';
import Counterfeit from './components/pages/Counterfeit.js';
import Custom from './components/pages/Custom.js';
import TakeOwnership from './components/pages/TakeOwnership.js';

import './App.css';
import config from './services/config';

class App extends Component {
  render() {

    return (
      <div style={{fontFamily: "'Raleway', sans-serif", bottom:"0px"}}>
          <NavBar></NavBar>

          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/counterfeit" component={Counterfeit} />
              <Route exact path="/custom" component={Custom} />
              <Route exact path="/own" component={TakeOwnership} />
              {/* <Route path="/settings/:userId" component={Settings} /> */}
            </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
