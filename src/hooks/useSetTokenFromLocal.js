import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTokenFromLocalStorage } from '../actions';

function useSetTokenFromLocal() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTokenFromLocalStorage());
  }, [dispatch]);
}

export default useSetTokenFromLocal;