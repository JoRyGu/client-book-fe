import {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {signIn} from '../actions';

function useSignInEventHandlers() {
  const signInRef = useRef();
  const dispatch = useDispatch();

  const handleFormSubmit = async values => {
    try {
      await dispatch(signIn(values));
    } catch (err) {
      if (err.response.status === 400 || err.response.status === 401) {
        signInRef.current.setErrors({
          email: 'Invalid Email or Password',
          password: 'Invalid Email or Password'
        });
        signInRef.current.setSubmitting(false);
      }
    }
  };

  const handleFieldClick = (fieldIsDirty, errors) => {
    if (
      fieldIsDirty &&
      errors.email === 'Invalid Email or Password' &&
      errors.password === 'Invalid Email or Password'
    ) {
      signInRef.current.setValues({email: '', password: ''});
    }
  };

  return [signInRef, handleFormSubmit, handleFieldClick];
}

export default useSignInEventHandlers;
