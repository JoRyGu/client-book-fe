import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .min(4, 'Invalid Email Address')
    .max(100, 'Invalid Email Address')
    .email('Invalid Email Address')
    .required('Email Address is required'),
  password: Yup.string()
    .required('Password is Required')
});

export default SignInSchema;
