import {ADD_NEW_CLIENT, FETCH_CLIENTS} from "../actions/types";

const INITIAL_STATE = {
  allClients: [],
  lastAddedClient: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CLIENTS:
      return {
        ...state,
        allClients: action.payload
      };

    case ADD_NEW_CLIENT:
      return {
        ...state,
        lastAddedClient: action.payload
      };

    default:
      return state;
  }
};
