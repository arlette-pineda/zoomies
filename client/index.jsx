import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './components/app';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Bubbler One, Helvetica, Arial, sans-serif',
    fontWeight: 'bold'
  }
});

ReactDOM.render(
  <MuiThemeProvider theme = { theme }>
    <App />
  </MuiThemeProvider>,
  document.querySelector('#root')
);
