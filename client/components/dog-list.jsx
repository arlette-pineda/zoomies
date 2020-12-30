import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DogCard from './dog-list-card';
import SearchButton from './search-button';
import Chips from './chips';
import QueryString from 'query-string';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import SearchForm from './search-form';
import Hidden from '@material-ui/core/Hidden';

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
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  divOutsideShowMore: {
    marginBottom: '5%',
    marginTop: '5%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  showMoreStyle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    borderRadius: '10px',
    fontFamily: 'inherit'
  },
  resultsStyle: {
    margin: theme.spacing(2),
    fontSize: '1.2rem'
  },
  circProgress: {
    margin: '12px'
  }
  // test: {
  //   marginLeft: 'auto',
  //   marginRight: 'auto'
  // }
}));

export default function DogList(props) {
  const classes = useStyles();
  const [dogs, setDogs] = useState();
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [size, setSize] = useState('');
  const [hasError, setErrors] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [paging, setPaging] = useState({});
  const history = useHistory();

  const dogSearch = () => {
    const searchResult = QueryString.stringify({ breed, age, size, page });
    setIsLoading(true);
    history.push({ pathname: location.pathname, search: searchResult });
    fetch(`/api/search?${searchResult}`)
      .then(response => response.json())
      .then(res => {
        setDogs(res.dogs);
        setPaging(res.paging);
        setIsLoading(false);
      })
      .catch(() => setErrors(true));
  };

  useEffect(() => {
    const parsed = QueryString.parse(location.search);
    setBreed(parsed.breed);
    setAge(parsed.age);
    setSize(parsed.size);
  }, []);

  useEffect(() => {
    dogSearch();
  }, [breed, age, size, page]);

  const limit = 20;
  let startIndex = (page - 1) * limit + 1;
  let endIndex = page * limit;

  if (page === paging.totalPages) {
    endIndex = paging.totalCount;
  }
  if (paging.totalCount === 0) {
    startIndex = 0;
  }

  return (
    <div className={classes.root}>
      <SearchButton
        breed={breed} setBreed={setBreed}
        age={age} setAge={setAge}
        size={size} setSize={setSize}
        page={page} setPage={setPage}
      />
      <div className={classes.resultsStyle}>
        {paging.totalCount === 0
          ? '0 results'
          : (`${startIndex}-${endIndex} of ${paging.totalCount} results`)}
      </div>
      <Chips
        breed={breed} setBreed={setBreed}
        age={age} setAge={setAge}
        size={size} setSize={setSize} />
      {/* Grid for side search form and doggie cards start */}
      <Grid spacing={3}
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item lg={4}>
          <Hidden mdDown>
            <SearchForm
              breed={breed} setBreed={setBreed}
              age={age} setAge={setAge}
              size={size} setSize={setSize}
            >
            </SearchForm>
          </Hidden>
        </Grid>
        <Grid item lg={8}>
          {dogs == null || isLoading
            ? (<div className={classes.textMargin}>Loading  <CircularProgress className={classes.circProgress} />
            </div>)
            : dogs.length === 0
              ? <div>
                <h6 className={classes.textMargin}>Sorry, those doggies are currently unavailable. Try another search!</h6>
              </div>
              : <Grid container spacing={3} className={classes.cardStyle}>
                {dogs.map(dog => {
                  return (<Grid item xs={6} sm={3} key={dog.id} >
                    <DogCard dog={dog} />
                  </Grid>);
                })
                }
              </Grid>
          }
        </Grid>
      </Grid>
      <div className={classes.divOutsideShowMore}>
        {page > 1
          ? (<Button variant="contained" onClick={() => setPage(page - 1)} className={classes.showMoreStyle}> <ChevronLeftIcon /> Previous Page  </Button>)
          : null
        }
        {page < paging.totalPages
          ? <Button variant="contained" onClick={() => setPage(page + 1)} className={classes.showMoreStyle}>  Next Page <ChevronRightIcon /></Button>
          : null}
      </div>
    </div>
  );
}
