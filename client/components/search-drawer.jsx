import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import SearchForm from './search-form';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fafafa'
  }
}));

export default function SearchDrawer(props) {
  const classes = useStyles();

  return (
    <Slide direction="right" in={props.open} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <SearchForm
          breed={props.breed} setBreed={props.setBreed}
          age={props.age} setAge={props.setAge}
          size={props.size} setSize={props.setSize}
          page={props.page} setPage={props.setPage}
        />
      </div>
    </Slide>
  );
}
