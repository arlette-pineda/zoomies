import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import SearchForm from './search-form';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    backgroundColor: '#fafafa'
  }
}));

export default function SearchDrawer(props) {
  const classes = useStyles();

  return (
    <Slide direction="right" in={props.open} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <SearchForm setBreed={props.setBreed} breed={props.breed} />
      </div>
    </Slide>
  );
}
