import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '4%',
    display: 'flex',
    justifyContent: 'center'
  },
  buttonStyling: {
    borderRadius: '30px',
    paddingLeft: '50px',
    paddingRight: '50px',
    textTransform: 'capitalize'
  }
}));

export default function SearchButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" className={classes.buttonStyling}>V   Search</Button>
    </div>
  );
}
