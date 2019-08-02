import decode from 'jwt-decode';

import clientBook from '../api/clientBook';
import {SIGN_IN, SET_TOKEN_FROM_LOCAL, NO_TOKEN_IN_LOCAL, SIGN_UP, FETCH_CLIENTS, ADD_NEW_CLIENT} from './types';
import history from "../history";

export const signIn = formValues => async dispatch => {
  try{
    const res = await clientBook.post('/auth/sign-in', formValues);
    localStorage.setItem('accessToken', res.data.accessToken);
    dispatch({ type: SIGN_IN, payload: {...res.data }});
    history.push('/overview');
  } catch(err) {
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
    dispatch({ type: SIGN_UP, payload: {...res.data}});
    history.push('/overview');
  } catch (err) {
    throw(err);
  }
};

export const setTokenFromLocalStorage = () => async dispatch => {
  const token = localStorage.getItem('accessToken');
  const now = new Date().getTime() / 1000;
  const exp = decode(token).exp;

  if (token && now < exp) {
    dispatch({ type: SET_TOKEN_FROM_LOCAL, payload: { accessToken: token }});
  } else {
    dispatch({ type: NO_TOKEN_IN_LOCAL, payload: { accessToken: null }});
  }
};

export const fetchClients = () => async (dispatch, getState) => {
  try {
    const res = await clientBook.get('/clients', {
      headers: {
        'Authorization': `Bearer ${getState().auth.token}`
      }
    });

    dispatch({ type: FETCH_CLIENTS, payload: res.data});
  } catch (err) {
    throw(err);
  }
};

export const addNewClient = formValues => async (dispatch, getState) => {
  try {
    const addedClient = await clientBook.post(
      '/clients',
      formValues,
      {
        headers: {
          'Authorization': `Bearer ${getState().auth.token}`
        }
      }
    );
    dispatch({type: ADD_NEW_CLIENT, payload: addedClient});
    dispatch(fetchClients());
  } catch (err) {
    throw(err);
  }
};
