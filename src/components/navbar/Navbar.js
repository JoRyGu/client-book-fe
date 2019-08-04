import React from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {AttachMoney, DateRangeOutlined, PeopleOutlined} from '@material-ui/icons';
import {withTheme} from '@material-ui/core/styles';

import styles from './styles';
import useNavbar from "../../hooks/useNavbar";
import {useSelector} from "react-redux";
import history from "../../helpers/history";

const Navbar = ({theme}) => {
  const css = styles();
  const isMobile = useNavbar(theme.breakpoints.values);
  const isSignedIn = useSelector(state => state.auth.isSignedIn);

  const renderDesktop = () => (
    <>
      <Button color="inherit"
              className={css.textButtons}
              disabled={!isSignedIn}
              onClick={() => history.push('/clients')}>Clients</Button>
      <Button color="inherit"
              className={css.textButtons}
              disabled={!isSignedIn}
              onClick={() => history.push('/appointments')}>Appointments</Button>
      <Button color="inherit"
              className={css.textButtons}
              disabled={!isSignedIn}
              onClick={() => history.push('/services')}>Services</Button>
    </>
  );

  const renderMobile = () => (
    <>
      <IconButton color="inherit">
        <PeopleOutlined/>
      </IconButton>
      <IconButton color="inherit">
        <DateRangeOutlined/>
      </IconButton>
      <IconButton color="inherit">
        <AttachMoney/>
      </IconButton>
    </>
  );

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant={isMobile ? "h6" : "h5"} className={css.header}>My Client Book</Typography>
          {isMobile ? renderMobile() : renderDesktop()}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withTheme(Navbar);
