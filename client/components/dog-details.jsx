import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    // width: '90vw',
    // display: 'flex',
    // justifyContent: 'center'
    // flexDirection: 'column'
    margin: theme.spacing(3)
  },
  containerOne: {
    backgroundColor: '#cfe8fc',
    height: '30vh'
  },
  containerTwo: {
    backgroundColor: '#cfffe2',
    height: '15vh',
    borderRadius: '40px'
  },
  containerThree: {
    backgroundColor: '#ffcff5',
    height: '40vh'
  },
  containerFour: {
    backgroundColor: '#ffe1cf',
    height: '30vh'
  },
  testOne: {
    backgroundColor: '#ffe1cf'
  },
  testTwo: {
    backgroundColor: '#fff2cf'
  }
}));

export default function DogDetails(props) {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Button >Hello</Button>
      <Container className={classes.containerOne}>
        <Typography component="div"/>Container 1</Container>
      <Container maxWidth="sm" className={classes.containerTwo}>
        <Typography component="div"/>Container 2</Container>
      <Container maxWidth="sm" className={classes.containerThree}>
        <Typography component="div"/>Container 3</Container> */}
      <Grid container justify="center">
        <Grid item xs={12} className={classes.containerOne}>Photos</Grid>
        <Grid container item xs={12} className={classes.containerTwo}>
          <Grid item xs={8} className={classes.testOne}>Hellow</Grid>
          <Grid item xs={4} className={classes.testTwo}>Hellow</Grid>
        </Grid>
        <Grid item xs={12} className={classes.containerThree}>Dog Stats</Grid>
        <Grid item xs={12} className={classes.containerFour}>Dog About</Grid>
      </Grid>
    </div>
  );
}
