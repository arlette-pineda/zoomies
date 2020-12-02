import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

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

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 }
];

const ages = [
  'baby',
  'young',
  'adult',
  'senior'
];

const size = [
  'small',
  'medium',
  'large',
  'xlarge'
];

export default function SearchForm(props) {
  const classes = useStyles();
  // const [breed, setBreed] = useState('');
  // const [age, setAge] = useState('');
  // const [size, setSize] = useState('');
  const [breedList, setBreedList] = useState([]);
  const [hasError, setErrors] = useState(false);

  useEffect(() => {
    fetch('/api/dogBreeds')
      .then(response => response.json())
      .then(res => setBreedList(res))
      .catch(() => setErrors(true));
  }, []);

  const handleSubmit = evt => {
    evt.preventDefault();
    alert(`Submitting Name ${name}`);
  };

  return (
    <form className={classes.root} noValidate onSubmit={handleSubmit}>
      <InputLabel className={classes.labelStyle} id="input-label-breed">
        Breed
      </InputLabel>
      <Autocomplete
        id="combo-box-demo"
        options={breedList}
        getOptionLabel={option => option}
        className="search-input-styling"
        renderInput={params => <TextField {...params} variant="outlined" />}
      />
      <InputLabel className={classes.labelStyle} id="input-label-age">
    Age
      </InputLabel>
      <Autocomplete
        id="combo-box-demo"
        options={top100Films}
        getOptionLabel={option => option.title}
        className="search-input-styling"
        renderInput={params => <TextField {...params} variant="outlined" />}
      />
      <InputLabel className={classes.labelStyle} id="input-label-size">
    Size
      </InputLabel>
      <Autocomplete
        id="combo-box-demo"
        options={top100Films}
        getOptionLabel={option => option.title}
        className="search-input-styling"
        // onChange={e => setSize(e.target.value)}
        renderInput={params => <TextField {...params} variant="outlined" />}
      />
      <div className={classes.buttonsDiv}>
        <Button variant="contained" className={classes.buttonStyle}>
        Clear All
        </Button>
        <Button variant="contained" className={classes.buttonStyle}>
        Apply
        </Button>
      </div>
    </form>
  );
}
