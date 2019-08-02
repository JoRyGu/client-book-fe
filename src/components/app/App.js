//From Packages
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

// Components
import LogIn from '../login/LogIn';
import Navbar from "../navbar/Navbar";
import DayOverview from "../DayOverview/DayOverview";
import Clients from '../clients/main/Clients';
import Appointments from "../appointments/Appointments";
import Services from "../services/Services";
import Auth from '../auth/Auth';

// Other Dependencies
import history from "../../history";
import useSetTokenFromLocal from '../../hooks/useSetTokenFromLocal';

const App = () => {
  useSetTokenFromLocal();

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <>
      <Router history={history}>
      <Navbar />

      <Container style={containerStyle}>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Auth>
            <Route path="/overview" component={DayOverview} />
            <Route path="/clients" component={Clients} />
            <Route path="/appointments" component={Appointments} />
            <Route path="/services" component={Services} />
          </Auth>
        </Switch>
      </Container>
    </Router>
    </>
  );
};

export default App;
