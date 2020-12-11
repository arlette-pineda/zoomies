import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
// import QueryString from 'query-string';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center'
    }
  },
  labelStyle: {
    fontFamily: 'Bubbler One, Helvetica, Arial, sans- serif',
    fontWeight: 900,
    fontSize: '1.2rem'
  },
  buttonsDiv: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '40px'
  },
  buttonStyle: {
    borderRadius: '30px',
    fontFamily: 'Bubbler One, Helvetica, Arial, sans- serif',
    fontWeight: 'bold',
    flexGrow: 1,
    marginLeft: '6%',
    marginRight: '6%',
    backgroundColor: '#fec700'
  }
}));

const ages = [
  'Baby',
  'Young',
  'Adult',
  'Senior'
];

const sizes = [
  'Small',
  'Medium',
  'Large',
  'Xlarge'
];

export default function SearchForm(props) {
  const classes = useStyles();
  const [breedList, setBreedList] = useState([]);
  const [hasError, setErrors] = useState(false);

  useEffect(() => {
    fetch('/api/dogBreeds')
      .then(response => response.json())
      .then(res => setBreedList(res))
      .catch(() => setErrors(true));
  },
  []);

  // const history = useHistory();

  const handleSubmit = evt => {
    evt.preventDefault();
    props.dogSearch();
    // const searchResult = QueryString.stringify({ breedname: props.breed, props.age, props.size });
    // history.push({ pathname: '/search', search: searchResult });
    // history.push({ pathname: location.pathname, search: something });
    alert(`Submitting Breed ${props.breed} ${props.age} ${props.size}`);
  };

  const handleReset = evt => {
    evt.preventDefault();
    props.setBreed('');
    props.setSize('');
    props.setAge('');
    props.dogSearch();
    alert(`Form has been cleared ${props.breed} ${props.age} ${props.size}`);
  };

  return (
    <form className={classes.root} noValidate onSubmit={handleSubmit} onReset={handleReset}>
      <InputLabel className={classes.labelStyle} id="input-label-breed">
        Breed
      </InputLabel>
      <Autocomplete
        id="combo-box-demo"
        options={breedList}
        getOptionLabel={option => option}
        value={props.breed || null}
        onSelect={e => props.setBreed(e.target.value)}
        className="search-input-styling"
        renderInput={params => <TextField {...params} variant="outlined" />}
      />
      <InputLabel className={classes.labelStyle} id="input-label-age">
    Age
      </InputLabel>
      <Autocomplete
        id="combo-box-demo"
        options={ages}
        getOptionLabel={option => option}
        value={props.age || null}
        onSelect={e => props.setAge(e.target.value)}
        className="search-input-styling"
        renderInput={params => <TextField {...params} variant="outlined" />}
      />
      <InputLabel className={classes.labelStyle} id="input-label-size">
    Size
      </InputLabel>
      <Autocomplete
        id="combo-box-demo"
        options={sizes}
        getOptionLabel={option => option}
        value={props.size || null}
        className="search-input-styling"
        onSelect={e => props.setSize(e.target.value)}
        renderInput={params => <TextField {...params} variant="outlined" />}
      />
      <div className={classes.buttonsDiv}>
        <Button type="reset" onClick={handleReset} variant="contained" className={classes.buttonStyle}>
        Clear All
        </Button>
        <Button type="submit" variant="contained" className={classes.buttonStyle}>
        Apply
        </Button>
      </div>
    </form>
  );
}
