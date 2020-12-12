import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DogCard from './dog-list-card';
import SearchButton from './search-button';
import QueryString from 'query-string';

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
  const [dogs, setDogs] = useState();
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [size, setSize] = useState('');
  const [hasError, setErrors] = useState(false);

  const dogSearch = () => {
    const searchResult = QueryString.stringify({ breed, age, size });
    fetch(`/api/search?${searchResult}`)
      .then(response => response.json())
      .then(res => setDogs(res))
      .catch(() => setErrors(true));
  };

  useEffect(() => {
    dogSearch();

  }, []);

  return (
    <div className={classes.root}>
      <SearchButton
        breed={breed} setBreed={setBreed}
        age={age} setAge={setAge}
        size={size} setSize={setSize}
        dogSearch={dogSearch}
      />
      {dogs == null
        ? null
        : dogs.length === 0
          ? <div>
            <p>Sorry, those doggies are currently unavailable. Try another search!</p>
          </div>
          : <Grid container spacing={3} className={classes.cardStyle}>
            {dogs.map(dog => {
              return (<Grid item xs={6} sm={3} key={dog.id}>
                <DogCard dog={dog} />
              </Grid>);
            })
            }
          </Grid>
      }
    </div>
  );
}
