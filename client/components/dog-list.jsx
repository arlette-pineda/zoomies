import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DogCard from './dog-list-card';
import SearchButton from './search-button';
import QueryString from 'query-string';
import { useHistory } from 'react-router-dom';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  cardStyle: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  textMargin: {
    margin: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Bubbler One, Helvetica, Arial, sans- serif',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  }
}));

export default function DogList(props) {
  const classes = useStyles();
  const [dogs, setDogs] = useState();
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [size, setSize] = useState('');
  const [hasError, setErrors] = useState(false);
  // const [firstLoad, setFirstLoad] = useState(true);
  // const [search, setSearch] = useState(false);
  // const [reset, setReset] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const dogSearch = () => {
    const searchResult = QueryString.stringify({ breed, age, size });
    console.log('search resulted');
    setIsLoading(true);
    history.push({ pathname: location.pathname, search: searchResult });
    fetch(`/api/search?${searchResult}`)
      .then(response => response.json())
      .then(res => {
        setDogs(res);
        // setFirstLoad(false);
        // setSearch(false);
        // setReset(false);
        setIsLoading(false);
        console.log('end of res');
      })
      .catch(() => setErrors(true));
  };

  useEffect(() => {
    // if (firstLoad) {
    const parsed = QueryString.parse(location.search);
    setBreed(parsed.breed);
    setAge(parsed.age);
    setSize(parsed.size);
    console.log({ parsed });
    // }
  }, []);

  useEffect(() => {
    console.log({ breed });
    console.log({ age });
    console.log({ size });
    // if (firstLoad || search || reset) {
    dogSearch();
    // }
  }, [breed, age, size]);

  return (
    <div className={classes.root}>
      <SearchButton
        breed={breed} setBreed={setBreed}
        age={age} setAge={setAge}
        size={size} setSize={setSize}
        // setSearch={setSearch} setReset={setReset}
      />
      {dogs == null || isLoading
        ? (<div className={classes.textMargin}>Loading <HourglassEmptyIcon /> </div>)
        : dogs.length === 0
          ? <div>
            <h6 className={classes.textMargin}>Sorry, those doggies are currently unavailable. Try another search!</h6>
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
