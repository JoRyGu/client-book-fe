import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchClients} from "../actions";

const useFetchAllClients = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    if (state.auth.isSignedIn === true) {
      dispatch(fetchClients());
    }
  }, [dispatch, state.auth.isSignedIn]);

  const {allClients} = state.clients;

  return allClients;
};

export default useFetchAllClients;
