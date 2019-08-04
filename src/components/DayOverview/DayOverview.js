import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import history from "../../helpers/history";

const DayOverview = () => {
  const isSignedIn = useSelector(state => state.auth.isSignedIn);
  useEffect(() => {
    if (!isSignedIn) {
      history.push('/');
    }
  }, [isSignedIn]);

  return <h1>Overview Page</h1>
};

export default DayOverview;
