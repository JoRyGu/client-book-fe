import clientBook from "../api/clientBook";
import {ADD_NEW_CLIENT, FETCH_CLIENTS} from "./types";

export const fetchClients = () => async (dispatch, getState) => {
  try {
    const res = await clientBook.get('/clients', {
      headers: {
        'Authorization': `Bearer ${getState().auth.token}`
      }
    });

    dispatch({type: FETCH_CLIENTS, payload: res.data});
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
