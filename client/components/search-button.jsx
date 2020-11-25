import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '4%',
    display: 'flex',
    justifyContent: 'center'
  },
  buttonStyling: {
    borderRadius: '30px',
    textTransform: 'capitalize',
    fontFamily: 'Bubbler One, Helvetica, Arial, sans- serif',
    fontWeight: 'bold',
    width: '90%'
  }
}));

export default function SearchButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" className={classes.buttonStyling}>
        Search <ExpandMoreIcon/>
      </Button>
    </div>
  );
}
