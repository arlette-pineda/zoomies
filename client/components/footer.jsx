import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  text: {
    color: 'black',
    fontSize: 'small'
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#FEC600',
    position: 'unset'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appBar} id="footer">
        <Toolbar>
          <Typography className={classes.text} align="center" variant="h5" gutterBottom>
            &copy; 2021 Zoomies
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
