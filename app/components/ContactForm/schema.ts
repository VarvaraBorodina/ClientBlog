import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  query: yup.string().required(),
  message: yup.string().required(),
});
