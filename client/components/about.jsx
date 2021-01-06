import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '0 20%',
    fontWeight: '800'
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>About Us</h1>
      <p>Hi there! Zoomies realizes that we are all going through difficult times right now
        and are missing some connection. We’d like to aid in that and why not do it with
        four-legged friends that are sure to leave a smile on anyone’s face!</p>

      <p>Now you don’t have to worry whether far, allergic, or scared, we have a
        perfect little (or big!) buddy for everybody! </p>

      <p>Volunteers at our partner organizations are ready to assist and our good boys
        and girls are eager to meet you!</p>
    </div>
  );
}
