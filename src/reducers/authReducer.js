import {NO_TOKEN_IN_LOCAL, SET_TOKEN_FROM_LOCAL, SIGN_IN, SIGN_OUT, SIGN_UP} from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  token: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        token: action.payload.accessToken
      };

    case SIGN_UP:
      return {
        ...state,
        isSignedIn: true,
        token: action.payload.accessToken
      };

    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        token: null
      };

    case SET_TOKEN_FROM_LOCAL:
      return {
        ...state,
        isSignedIn: true,
        token: action.payload.accessToken
      };

    case NO_TOKEN_IN_LOCAL:
      return {
        ...state,
        isSignedIn: false,
        token: null
      };

    default:
      return state;
  }
};
