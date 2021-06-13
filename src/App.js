import logo from './logo.svg';
import './App.css';
import React, { Component, useContext } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { Menu, Button, Container, Message, Divider, Icon } from "semantic-ui-react";
import { Context as AuthContext } from './context/fhirAuth';

import Launch from "./components/Launch";
import Redirect from "./components/Redirect";

const App = () => {
  const { state } = useContext(AuthContext);
  const credentials = state.credentials;

  return (
      <React.Fragment>
        <Menu inverted color="red" attached>
          <Menu.Item header>
            HealthDecision &ndash; Browser-Based FHIR Integration
          </Menu.Item>
        </Menu>
          <Switch>
              <Route path="/fhir/epic/launch" exact component={Launch} />
              <Route path="/fhir/epic/redirect" exact component={Redirect} />
              {/*<Route path="*" component={NotFound} />*/}
          </Switch>
      </React.Fragment>
  );
};

export default App;
