import React from 'react';
import {Field, Form, Formik} from 'formik';
import {TextField} from 'formik-material-ui';
import Button from '@material-ui/core/Button';

import useStyles from './styles';
import SignInSchema from '../../validation/SignInSchema';
import useSignInEventHandlers from '../../hooks/useSignInEventHandlers';

function SignInForm() {
  const css = useStyles();
  const [signInRef, handleFormSubmit, handleFieldClick] = useSignInEventHandlers();

  return (
    <div className={css.signInContainer}>
      <h2 className={css.signInHeader}>Sign In</h2>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={SignInSchema}
        onSubmit={handleFormSubmit}
        ref={signInRef}
      >
        {({dirty, errors}) => (
          <Form className={css.signInForm}>
            <Field
              name="email"
              label="Email"
              type="email"
              margin="normal"
              component={TextField}
              onClick={(e) => handleFieldClick(dirty, errors)}
              fullWidth
            />
            <Field
              name="password"
              label="Password"
              type="password"
              component={TextField}
              margin="normal"
              onClick={(e) => handleFieldClick(dirty, errors)}
              fullWidth
            />
            <Button
              variant="contained"
              color="secondary"
              className={css.signInButton}
              type="submit"
            >
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignInForm;
