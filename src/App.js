import React, { Component } from 'react';
// import Radium from 'radium';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
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
      <Container>
        <div>
            <NavBar></NavBar>

            <Route exact path="/" component={Home} />
            <Route path="/counterfeit" component={Counterfeit} />
            <Route path="/custom" component={Custom} />
            <Route path="/own" component={TakeOwnership} />
            {/* <Route path="/settings/:userId" component={Settings} /> */}
        </div>

      </Container>
    );
  }
}

export default App;
