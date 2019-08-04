import React, {useEffect} from 'react';
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import {useSelector} from "react-redux";
import history from "../../helpers/history";

function TabContainer(props) {
  const {children, dir} = props;

  return (
    <Typography component="div" dir={dir} style={{padding: 8 * 3}}>
      {children}
    </Typography>
  );
}

export default function FloatingActionButtonZoom() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const isSignedIn = useSelector(state => state.auth.isSignedIn);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/overview');
    }
  }, [isSignedIn]);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Sign In"/>
          <Tab label="Sign Up"/>
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>
          <SignInForm/>
        </TabContainer>
        <TabContainer dir={theme.direction}>
          <SignUpForm/>
        </TabContainer>
      </SwipeableViews>
    </div>
  );
}
