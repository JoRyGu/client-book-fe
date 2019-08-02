import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button } from '@material-ui/core';

import useStyles from './styles';
import SignUpSchema from '../../validation/SignUpSchema';
import useSignUpEventHandlers from "../../hooks/useSignUpEventHandlers";

const SignUpForm = () => {
  const css = useStyles();

  const [signUpRef, handleFormSubmit] = useSignUpEventHandlers();

  return (
    <div className={css.signInContainer}>
      <h2 className={css.signInHeader}>Sign Up</h2>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={SignUpSchema}
        onSubmit={handleFormSubmit}
        ref={signUpRef}
      >
        {() => (
          <Form className={css.signInForm}>
            <Field
              name="firstName"
              label="First Name"
              type="text"
              margin="normal"
              fullWidth
              component={TextField}
            />
            <Field
              name="lastName"
              label="Last Name"
              type="text"
              margin="normal"
              fullWidth
              component={TextField}
            />
            <Field
              name="email"
              label="Email"
              type="email"
              margin="normal"
              fullWidth
              component={TextField}
            />
            <Field
              name="password"
              label="Password"
              type="password"
              margin="normal"
              fullWidth
              component={TextField}
            />
            <Field
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              margin="normal"
              fullWidth
              component={TextField}
            />
            <Button
              variant="contained"
              color="primary"
              className={css.signInButton}
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUpForm;
