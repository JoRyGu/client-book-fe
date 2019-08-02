import { createMuiTheme } from '@material-ui/core';

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#2691c7'
    },
    secondary: {
      main: '#f24153'
    },
    error: {
      main: '#eb7a34'
    }
  }
});