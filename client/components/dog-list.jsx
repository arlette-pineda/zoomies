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
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  showMoreStyle: {
    fontWeight: 'bold',
    borderRadius: '10px',
    fontFamily: 'inherit',
    marginLeft: '1.5%',
    marginRight: '1.5%'
  },
  resultsStyle: {
    margin: theme.spacing(2),
    fontSize: '1.1rem'
  },
  circProgress: {
    margin: '12px',
    color: 'blue'
  },
  searchGridLg: {
    marginTop: '2%'
  }
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

  const limit = 24;
  let startIndex = (page - 1) * limit + 1;
  let endIndex = page * limit;

  if (page === paging.totalPages) {
    endIndex = paging.totalCount;
  }
  if (paging.totalCount === 0) {
    startIndex = 0;
  }

  return (
    <div className={classes.root} id='content-wrap'>
      <SearchButton
        breed={breed} setBreed={setBreed}
        age={age} setAge={setAge}
        size={size} setSize={setSize}
        page={page} setPage={setPage}
      />
      <Hidden lgUp>
        <div className={classes.resultsStyle}>
          {paging.totalCount === 0
            ? '0 results'
            : !isLoading
              ? (`${startIndex}-${endIndex} of ${paging.totalCount} results`)
              : null }
        </div>
        <Chips
          breed={breed} setBreed={setBreed}
          age={age} setAge={setAge}
          size={size} setSize={setSize} />
      </Hidden>
      {/* Grid for side search form and doggie cards start */}
      <Grid spacing={3}
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        className={classes.searchGridLg}
      >
        <Hidden mdDown>
          <Grid item lg={4}>
            <SearchForm
              breed={breed} setBreed={setBreed}
              age={age} setAge={setAge}
              size={size} setSize={setSize}
              page={page} setPage={setPage}
            >
            </SearchForm>
          </Grid>
        </Hidden>
        <Grid item lg={8}>
          {dogs == null || isLoading
            ? (<div className={classes.textMargin}>Loading  <CircularProgress className={classes.circProgress} />
            </div>)
            : dogs.length === 0
              ? <div>
                <h6 className={classes.textMargin}>Sorry, those doggies are currently unavailable. Try another search!</h6>
              </div>
              : <div>
                <Hidden mdDown>
                  <div className={classes.resultsStyle}>
                    {paging.totalCount === 0
                      ? '0 results'
                      : (`${startIndex}-${endIndex} of ${paging.totalCount} results`)}
                  </div>
                  <Chips
                    breed={breed} setBreed={setBreed}
                    age={age} setAge={setAge}
                    size={size} setSize={setSize} />
                </Hidden>
                <Grid container spacing={4} className={classes.cardStyle}>
                  {dogs.map(dog => {
                    return (<Grid item xs={6} sm={4} md={3} lg={4} key={dog.id} >
                      <DogCard dog={dog} />
                    </Grid>);
                  })
                  }
                </Grid>
              </div>
          }
          <div className={classes.divOutsideShowMore}>
            {page > 1 && !isLoading
              ? (<Button variant="contained" onClick={() => setPage(page - 1)} className={`${classes.showMoreStyle} show-more-style-margin`}> <ChevronLeftIcon /> Previous Page  </Button>)
              : null
            }
            {page < paging.totalPages && !isLoading
              ? (<Button variant="contained" onClick={() => setPage(page + 1)} className={`${classes.showMoreStyle} show-more-style-margin`}>  Next Page <ChevronRightIcon /></Button>)
              : null}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
