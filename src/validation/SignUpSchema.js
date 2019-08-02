import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(1, 'First name must be longer than 3 characters.')
    .max(40, 'First name must be shorter than 41 characters.')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(1, 'Last name must be longer than 3 characters.')
    .max(40, 'Last name must be shorter than 41 characters.')
    .required('Last Name is Required'),
  email: Yup.string()
    .email('Invalid Email Address')
    .required('Email Address is Required'),
  password: Yup.string()
    .min(8, 'Passwords must be at least 8 characters.')
    .max(255, 'Passwords cannot be longer than 255 characters.')
    .required('Password is Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords Do Not Match')
    .required('Password Confirmation is Required')
});

export default SignUpSchema;
