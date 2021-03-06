import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3)
  },
  photosSection: {
    backgroundColor: '#cfe8fc',
    height: '30vh'
  },
  titleSection: {
    height: '12vh',
    borderRadius: '25px',
    marginBottom: '35px',
    marginTop: '-55px',
    filter: 'drop-shadow(0 2mm 1mm lightgray)'
  },
  detailsSection: {
    backgroundColor: '#ffcff5',
    height: '35vh',
    borderRadius: '25px 25px 0 0',
    paddingLeft: '30px'
  },
  aboutMeSection: {
    backgroundColor: '#ffe1cf',
    height: '30vh',
    paddingLeft: '30px'
  },
  nameSub: {
    backgroundColor: 'white',
    borderRadius: '25px 0 0 25px',
    paddingLeft: '30px',
    textShadow: '0 6px 14px gray'
  },
  scheduleArea: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '0 25px 25px 0',
    textAlign: 'center',
    paddingTop: '10px'
  },
  detailItems: {
    filter: 'drop-shadow(0 2mm 1mm gray)'
  }
}));

export default function DogDetails(props) {

  const classes = useStyles();
  return (
    <div id="content-wrap">
      <div className={classes.photosSection}>Photos</div>
      <div className={classes.root} >
        <Grid container >
          {/* <Grid item xs={12} className={classes.photosSection}>Photos</Grid> */}
          <Grid container item xs={12} className={classes.titleSection}>
            <Grid item xs={8} className={classes.nameSub}>
              <h2>Dog Name</h2>
              <h3>Dog Breed</h3>
            </Grid>
            <Grid item xs={4} className={classes.scheduleArea}>
              <h3>Schedule Meet!</h3>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.detailsSection}>
            <h2>Details</h2>
            <div className={classes.detailItems}>
              <p>Size: </p>
              <p>Gender: </p>
              <p>Age: </p>
              <p>Coat: </p>
              <p>Color: </p>
              <p>Location: </p>
            </div>
          </Grid>
          <Grid item xs={12} className={classes.aboutMeSection}>
            <h2>About Me</h2>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
