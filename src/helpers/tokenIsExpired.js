import decode from 'jwt-decode';

export default () => {
  if (!localStorage.getItem('accessToken')) {
    return true;
  } else {
    const token = localStorage.getItem('accessToken');
    const exp = decode(token).exp;
    const now = new Date().getTime() / 1000;

    return now > exp;
  }
};
