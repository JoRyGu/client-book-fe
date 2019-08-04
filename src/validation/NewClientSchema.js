import * as Yup from 'yup';

const NewClientSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Name must be one or more characters long.')
    .max(40, 'Name must not exceed 40 characters.')
    .required('Name is required.'),
  phoneNumber: Yup.string()
    .test('is-empty', 'Phone Number is required.', value => {
      return !(value === undefined);
    })
    .test('is-valid', 'Invalid phone number.', value => {
      let numberCount = 0;
      if (value !== undefined) {
        for (let i = 0; i < value.length; i++) {
          if (/[0-9]/.test(value[i])) {
            numberCount++;
          }
        }

        return numberCount === 10;
      } else {
        return false;
      }
    }),
  email: Yup.string()
    .email('Invalid email entered.'),
  birthday: Yup.string()
    .required('Birthday is required.')
});

export default NewClientSchema;
