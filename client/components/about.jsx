import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '0 20%',
    fontWeight: '800'
  },
  aboutUsHeader: {
    letterSpacing: '2px'
  },
  searchButtonStyle: {
    borderRadius: '10px',
    backgroundColor: theme.palette.secondary.main,
    marginBottom: '5%',
    fontSize: 'large'
  },
  iconStyling: {
    paddingLeft: '8px'
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.aboutUsHeader}>About Us</h1>
      <p className="about-us-p-lg">Hi there! Zoomies realizes that we are all going through difficult times right now
        and are missing some connection. We’d like to aid in that and why not do it with
        four-legged friends that are sure to leave a smile on anyone’s face!</p>

      <p className="about-us-p-lg">Now you don’t have to worry whether far, allergic, or scared, we have a
        perfect little (or big!) buddy for everybody! </p>

      <p className="about-us-p-lg">Volunteers at our partner organizations are ready to assist and our good boys
        and girls are eager to meet you!</p>
      <Button variant="contained" component={Link} to='/search' className={classes.searchButtonStyle}>
        Search <NavigateNextRoundedIcon className={classes.iconStyling} fontSize="large" />
      </Button>
    </div>
  );
}
