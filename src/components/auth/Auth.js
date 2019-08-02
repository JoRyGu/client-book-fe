import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import history from "../../history";

const Auth = (props) => {
  const isSignedIn = useSelector(state => state.auth.isSignedIn);

  useEffect(() => {
    if (isSignedIn === false) {
      history.push('/');
    }
  }, [isSignedIn]);

  return (
    <>
      {props.children}
    </>
  );
};

export default Auth;
