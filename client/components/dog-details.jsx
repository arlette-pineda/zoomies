import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.primary.main
  },
  containerOne: {
    backgroundColor: '#cfe8fc',
    height: '30vh'
  },
  containerTwo: {
    height: '15vh',
    borderRadius: '40px',
    paddingLeft: '20px',
    backgroundColor: 'white'
  },
  containerThree: {
    backgroundColor: '#ffcff5',
    height: '35vh',
    borderRadius: '40px 40px 0 0',
    paddingLeft: '20px'
  },
  containerFour: {
    backgroundColor: '#ffe1cf',
    height: '30vh',
    paddingLeft: '20px'
  },
  testOne: {
    backgroundColor: 'white',
    borderRadius: '40px 0 0 40px'
  },
  testTwo: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '0 40px 40px 0'
  }
}));

export default function DogDetails(props) {

  const classes = useStyles();
  return (
    <div className={classes.root} id="content-wrap">
      <Grid container>
        <Grid item xs={12} className={classes.containerOne}>Photos</Grid>
        <Grid container item xs={12} className={classes.containerTwo}>
          <Grid item xs={8} className={classes.testOne}>
            <h2>Dog Name</h2>
            <h3>Dog Breed</h3>
          </Grid>
          <Grid item xs={4} className={classes.testTwo}>
            <h3>Schedule Meet!</h3>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.containerThree}>
          <h3>Details</h3>
          <div>
            <p>Size: </p>
            <p>Gender: </p>
            <p>Age: </p>
            <p>Coat: </p>
            <p>Color: </p>
            <p>Location: </p>
          </div>
        </Grid>
        <Grid item xs={12} className={classes.containerFour}>
          <h3>About Me</h3>
        </Grid>
      </Grid>
    </div>
  );
}
