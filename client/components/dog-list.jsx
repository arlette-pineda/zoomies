import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DogCard from './dog-list-card';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary
//   }
// }));

export default class DogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: []
    };
  }

  // const classes = useStyles();

  componentDidMount() {
    console.log('this is mounted');
    this.getDogs();
  }

  getDogs() {
    fetch('/api/search')
      .then(response => response.json())
      .then(dogs => this.setState({
        dogs: dogs
      }))
      .catch(error => console.error(
        'error:', error.message
      ));
  }

  render() {
    return (
      <div>
        {this.state.dogs.map(dog => {
          return (<DogCard key={dog.id} dog={dog}
          />);
        })
        }
        {/* // <Grid container spacing={3}>
      //   <Grid item xs={6} sm={3}>
      //     <Paper className={classes.paper}>xs=6 sm=3</Paper>
      //   </Grid>
      //   <Grid item xs={6} sm={3}>
      //     <Paper className={classes.paper}>xs=6 sm=3</Paper>
      //   </Grid>
      //   <Grid item xs={6} sm={3}>
      //     <Paper className={classes.paper}>xs=6 sm=3</Paper>
      //   </Grid>
      //   <Grid item xs={6} sm={3}>
      //     <Paper className={classes.paper}>xs=6 sm=3</Paper>
      //   </Grid>
      // </Grid> */}
      </div>
    );
  }
}
