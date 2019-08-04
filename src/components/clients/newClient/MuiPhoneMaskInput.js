import React from 'react';
import MaskedInput from "react-text-mask";
import {FormControl, FormHelperText, Input, InputLabel} from "@material-ui/core";


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

export default ({field, form}) => {
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
