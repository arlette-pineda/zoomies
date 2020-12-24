import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  theMargin: {
    marginLeft: theme.spacing(2)
  },
  chipMargin: {
    marginRight: theme.spacing(0.5)
  }
}));

export default function Chips(props) {
  const classes = useStyles();

  const handleDeleteBreed = () => {
    props.setBreed('');
  };

  const handleDeleteAge = () => {
    props.setAge('');
  };

  const handleDeleteSize = () => {
    props.setSize('');
  };

  return (
    <div className={classes.theMargin}>
      {props.breed
        ? <Chip
          size="small"
          avatar={<Avatar alt="Zoomies icon" src="/images/zoomies-icon.png" />}
          label={props.breed}
          onDelete={handleDeleteBreed}
          className={classes.chipMargin}
        />
        : null
      }
      {props.age
        ? <Chip
          size="small"
          avatar={<Avatar alt="Zoomies icon" src="/images/zoomies-icon.png" />}
          label={props.age}
          onDelete={handleDeleteAge}
          className={classes.chipMargin}
        />
        : null}
      {props.size
        ? <Chip
          size="small"
          avatar={<Avatar alt="Zoomies icon" src="/images/zoomies-icon.png" />}
          label={props.size}
          onDelete={handleDeleteSize}
          className={classes.chipMargin}
        />
        : null
      }
    </div>
  );
}
