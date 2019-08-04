import clientBook from "../api/clientBook";
import {NO_TOKEN_IN_LOCAL, SET_TOKEN_FROM_LOCAL, SIGN_IN, SIGN_OUT, SIGN_UP} from "./types";
import history from "../helpers/history";
import tokenIsExpired from "../helpers/tokenIsExpired";

export const signIn = formValues => async dispatch => {
  try {
    const res = await clientBook.post('/auth/sign-in', formValues);
    localStorage.setItem('accessToken', res.data.accessToken);
    dispatch({type: SIGN_IN, payload: {...res.data}});
    history.push('/overview');
  } catch (err) {
    throw(err);
  }
};

export const signUp = formValues => async dispatch => {
  try {
    const values = {...formValues};
    delete values.confirmPassword;

    await clientBook.post('/auth/signup', values);
    const res = await clientBook.post('/auth/sign-in', {email: values.email, password: values.password});
    localStorage.setItem('accessToken', res.data.accessToken);
    dispatch({type: SIGN_UP, payload: {...res.data}});
    history.push('/overview');
  } catch (err) {
    throw(err);
  }
};

export const signOut = () => dispatch => {
  dispatch({type: SIGN_OUT});
  history.push('/');
};

export const setTokenFromLocalStorage = () => async dispatch => {
  const token = localStorage.getItem('accessToken');

  if (token && !tokenIsExpired()) {
    dispatch({type: SET_TOKEN_FROM_LOCAL, payload: {accessToken: token}});
  } else {
    dispatch({type: NO_TOKEN_IN_LOCAL, payload: {accessToken: null}});
  }
};
