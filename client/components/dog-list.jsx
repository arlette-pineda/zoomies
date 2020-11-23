import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DogCard from './dog-list-card';

const useStyles = theme => ({
  root: {
    flexGrow: 1
  },
  cardStyle: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

class DogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: []
    };
  }

  componentDidMount() {
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
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={1} className={classes.cardStyle}>
          <Grid item xs={6} sm={3} >
            {this.state.dogs.map(dog => {
              return (<DogCard key={dog.id} dog={dog}
              />);
            })
            }
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(DogList);
