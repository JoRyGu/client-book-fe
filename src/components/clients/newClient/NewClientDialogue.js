import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  FormControl,
  InputLabel,
  Input, FormHelperText
} from "@material-ui/core";
import {Form, Formik, Field} from 'formik';
import {TextField} from 'formik-material-ui';
import MaskedInput from 'react-text-mask';

import NewClientSchema from "../../../validation/NewClientSchema";
import styles from './styles';
import useCreateNewClient from "../../../hooks/useCreateNewClient";
import MuiPhoneMaskInput from './MuiPhoneMaskInput';

const NewClientDialogue = ({open, handleClose, fullscreen}) => {
  const [handleClientSubmit] = useCreateNewClient(handleClose);

  const css = styles();

  return (
    <Formik
      initialValues={{
        name: '',
        phoneNumber: '',
        email: '',
        birthday: ''
      }}
      validationSchema={NewClientSchema}
      onSubmit={(values, actions) => handleClientSubmit(values, actions, handleClose)}
      render={(formikProps) => (
        <Dialog open={open}
                onClose={handleClose}
                fullScreen={fullscreen}
        >
          <DialogTitle>Create New Client</DialogTitle>
          <DialogContent>
            <Form>
              <Field name="name"
                     label="Name"
                     type="text"
                     component={TextField}
                     fullWidth
                     margin="normal"
              />
              <Field name="phoneNumber"
                     component={MuiPhoneMaskInput}
              />
              <Field name="email"
                     label="Email Address"
                     type="email"
                     component={TextField}
                     fullWidth
                     margin="normal"
              />
              <Field name="birthday"
                     label="Birthday"
                     type="date"
                     component={TextField}
                     fullWidth
                     InputLabelProps={{shrink: true}}
                     margin="normal"
              />
            </Form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}
                    color="primary"
            >
              Cancel
            </Button>
            <Button onClick={formikProps.handleSubmit}
                    color="primary"
                    disabled={!formikProps.isValid}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      )}
    />

  );
};

const CustomTextMask = (props) => {
  const {inputRef, ...other} = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => inputRef(ref ? ref.inputElement : null)}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    />
  );
};

const MaterialMask = ({ field, form }) => {
  return (
    <FormControl
      fullWidth
      margin="normal"
      error={form.touched['phoneNumber'] === true && form.errors.phoneNumber !== undefined}
      disabled={form.isSubmitting}
    >
      <InputLabel htmlFor="phoneNumberLabel">Phone Number</InputLabel>
      <Input
        id="phoneNumberLabel"
        inputComponent={CustomTextMask} {...field}
      />
      {
        form.touched['phoneNumber'] ? <FormHelperText error>{form.errors.phoneNumber}</FormHelperText> : null
      }
    </FormControl>
  );
};

export default NewClientDialogue;
