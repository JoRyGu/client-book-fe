import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../actions';

function useSignUpEventHandlers() {
	const signUpRef = useRef();
	const dispatch = useDispatch();

	const handleFormSubmit = async values => {
		try {
			await dispatch(signUp(values));
		} catch (err) {
			if (err.response.status === 409) {
				signUpRef.current.setErrors({
					email: 'User already exists for that email.',
				});
				signUpRef.current.setSubmitting(false);
			} else if (err.response.status === 400) {
				signUpRef.current.setErrors({
					email: 'Invalid email address.'
				});
				signUpRef.current.setSubmitting(false);
			}
		}
	};

	return [signUpRef, handleFormSubmit];
}

export default useSignUpEventHandlers;
