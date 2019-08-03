import {useDispatch} from "react-redux";
import { addNewClient} from "../actions";
import tokenIsExpired from "../helpers/tokenIsExpired";
import {signOut} from "../actions/authActions";

const useCreateNewClient = (handleClose) => {
  const dispatch = useDispatch();

  const handleClientSubmit = async (values, actions) => {
    try {
      if (tokenIsExpired()) {
        actions.setSubmitting(false);
        actions.resetForm();
        handleClose();
        dispatch(signOut());
      }

      const sanitizedValues = {...values};
      const regex = /[()\s-]+/g;
      sanitizedValues.phoneNumber = sanitizedValues.phoneNumber.replace(regex, '');

      const year = sanitizedValues.birthday.substring(0, 4);
      const month = sanitizedValues.birthday.substring(5, 7);
      const day = sanitizedValues.birthday.substring(8);

      sanitizedValues.birthday = {year, month, day};

      dispatch(addNewClient(sanitizedValues));

      actions.setSubmitting(false);
      actions.resetForm();
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  return [handleClientSubmit];
};

export default useCreateNewClient;
