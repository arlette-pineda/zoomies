import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(2)
    }
  },
  labelStyle: {
    fontWeight: 900,
    fontSize: '1.2rem',
    marginLeft: '6%'
  },
  buttonsDiv: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '40px'
  },
  buttonStyle: {
    borderRadius: '20px',
    fontWeight: 'bold',
    flexGrow: 1,
    marginLeft: '6%',
    marginRight: '6%',
    backgroundColor: '#fec700'
  },
  searchGroup: {
    width: '100%',
    marginTop: '4%'
  },
  inputWidth: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
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
  const [localBreed, setLocalBreed] = useState('');
  const [localAge, setLocalAge] = useState('');
  const [localSize, setLocalSize] = useState('');

  useEffect(() => {
    fetch('/api/dogBreeds')
      .then(response => response.json())
      .then(res => setBreedList(res))
      .catch(() => setErrors(true));
  },
  []);

  const handleSubmit = evt => {
    evt.preventDefault();
    props.setBreed(localBreed);
    props.setSize(localSize);
    props.setAge(localAge);
    props.setPage(1);
  };

  const handleReset = evt => {
    evt.preventDefault();
    props.setBreed('');
    props.setSize('');
    props.setAge('');
    props.setPage(1);
    setLocalBreed('');
    setLocalSize('');
    setLocalAge('');
  };

  return (
    <form noValidate onSubmit={handleSubmit} onReset={handleReset}>
      <div className={`${classes.root} ${classes.searchGroup} search-form-margin-lg`}>
        <InputLabel className={classes.labelStyle} id="input-label-breed">
          Breed
        </InputLabel>
        <Autocomplete
          id="combo-box-demo"
          options={breedList}
          getOptionLabel={option => option}
          value={props.breed || null}
          onSelect={e => setLocalBreed(e.target.value)}
          className={`${classes.inputWidth} search-input-styling`}
          renderInput={params => <TextField {...params} variant="outlined" />}
        />
      </div>
      <div className={`${classes.root} ${classes.searchGroup} search-form-margin-lg`}>
        <InputLabel className={classes.labelStyle} id="input-label-age">
          Age
        </InputLabel>
        <Autocomplete
          id="combo-box-demo"
          options={ages}
          getOptionLabel={option => option}
          value={props.age || null}
          onSelect={e => setLocalAge(e.target.value)}
          className={`${classes.inputWidth} search-input-styling`}
          renderInput={params => <TextField {...params} variant="outlined" />}
        />
      </div>
      <div className={`${classes.root} ${classes.searchGroup} search-form-margin-lg`}>
        <InputLabel className={classes.labelStyle} id="input-label-size">
          Size
        </InputLabel>
        <Autocomplete
          id="combo-box-demo"
          options={sizes}
          getOptionLabel={option => option}
          value={props.size || null}
          className={`${classes.inputWidth} search-input-styling`}
          onSelect={e => setLocalSize(e.target.value)}
          renderInput={params => <TextField {...params} variant="outlined" />}
        />
      </div>
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
