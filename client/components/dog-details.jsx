import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    // width: '90vw',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  containerOne: {
    backgroundColor: '#cfe8fc',
    height: '30vh'
  },
  containerTwo: {
    backgroundColor: '#cfffe2',
    height: '20vh'
  },
  containerThree: {
    backgroundColor: '#ffcff5',
    height: '100vh'
  }
}));

export default function DogDetails(props) {

  const classes = useStyles();
  return (
    <div className={classes.root} id='content-wrap'>
      {/* <Button >Hello</Button>
      <Container className={classes.containerOne}>
        <Typography component="div"/>Container 1</Container>
      <Container maxWidth="sm" className={classes.containerTwo}>
        <Typography component="div"/>Container 2</Container>
      <Container maxWidth="sm" className={classes.containerThree}>
        <Typography component="div"/>Container 3</Container> */}
      <Grid container justify="center">
        <Grid item xs={12}>Item 1</Grid>
        <Grid item xs={12}>Item 2</Grid>
        <Grid item xs={12}>Item 3</Grid>
      </Grid>
    </div>
  );
}
