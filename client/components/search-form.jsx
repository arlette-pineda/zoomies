import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      // width: '25ch'
      display: 'flex',
      justifyContent: 'center'
    }
  },
  labelStyle: {
    fontFamily: 'Bubbler One, Helvetica, Arial, sans- serif',
    fontWeight: 900
  },
  buttonDiv: {
    display: 'flex',
    justifyContent: 'space-evenly',
    borderRadius: '30px'
  },
  buttonRadius: {
    borderRadius: '30px'
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

export default function SearchForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <InputLabel className={classes.labelStyle} id="demo-simple-select-placeholder-label-label">
        Breed
      </InputLabel>
      <Autocomplete
        id="combo-box-demo"
        options={top100Films}
        getOptionLabel={option => option.title}
        className="circle-radius"
        renderInput={params => <TextField {...params} variant="outlined" />}
      />
      <InputLabel id="demo-simple-select-placeholder-label-label">
        Age
      </InputLabel>
      <Autocomplete
        id="combo-box-demo"
        options={top100Films}
        getOptionLabel={option => option.title}
        className="circle-radius"
        renderInput={params => <TextField {...params} variant="outlined" />}
      />
      <InputLabel id="demo-simple-select-placeholder-label-label">
        Size
      </InputLabel>
      <Autocomplete
        id="combo-box-demo"
        options={top100Films}
        getOptionLabel={option => option.title}
        className="circle-radius"
        renderInput={params => <TextField {...params} variant="outlined" />}
      />
      <div className={classes.buttonDiv}>
        <Button variant="contained" className={classes.buttonRadius}>
        Clear All
        </Button>
        <Button variant="contained" className={classes.buttonRadius}>
        Apply
        </Button>
      </div>
    </form>
  );
}
