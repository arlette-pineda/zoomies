import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DogCard from './dog-list-card';
import SearchButton from './search-button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  cardStyle: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

export default function DogList(props) {
  const classes = useStyles();
  const [dogs, setDogs] = useState([]);
  const [hasError, setErrors] = useState(false);

  useEffect(() => {
    fetch('/api/search')
      .then(response => response.json())
      .then(res => setDogs(res))
      .catch(() => setErrors(true));
  },
  []);

  return (
    <div className={classes.root}>
      <SearchButton />
      <Grid container spacing={3} className={classes.cardStyle}>
        {dogs.map(dog => {
          return (<Grid item xs={6} sm={3} key={dog.id}>
            <DogCard dog={dog} />
          </Grid>);
        })
        }

      </Grid>
    </div>
  );
}
