import React, {useState} from 'react';
import './App.css';
import Login from './components/Login';
import Topup from './components/Topup';
import Menu from './components/Menu';
import Home from './components/Home';
import Register from './components/Register';
import AccountDetails from './components/AccountDetails';
import {Segment, Grid, Dimmer, Loader} from 'semantic-ui-react';
import { AppProvider } from './contexts/app';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const state = {isLoading, setIsLoading}
  return (
    <AppProvider value={state}>
      <Dimmer active={isLoading}>
         <Loader/>
      </Dimmer>
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
                  <Route exact path="/">
                    <Home/>
                  </Route>
                  <Route exact path="/Login">
                    <Login/>
                  </Route>
                  <Route exact path="/topup">
                    <Topup/>
                  </Route>
                  <Route exact path="/account">
                    <AccountDetails/>
                  </Route>
                  <Route exact path="/register">
                    <Register/>
                  </Route>
                </Switch>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
