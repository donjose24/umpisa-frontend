import React from 'react';
import './App.css';
import Login from './components/Login';
import Topup from './components/Topup';
import Menu from './components/Menu';
import {Segment, Grid} from 'semantic-ui-react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Menu />
        <Grid columns={3}>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Switch>
                <Route path="/">
                  <Login/>
                </Route>
                <Route path="/topup">
                  <Topup/>
                </Route>
              </Switch>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
      </Router>
    </div>
  );
}

export default App;
