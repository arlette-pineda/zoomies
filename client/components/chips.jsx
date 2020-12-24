import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  theMargin: {
    marginLeft: theme.spacing(2)
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

  return (
    <div className={classes.theMargin}>
      {props.breed
        ? <Chip
          size="small"
          avatar={<Avatar alt="Natacha" src="/images/zoomies-icon.png" />}
          label={props.breed}
          onDelete={handleDeleteBreed}
        />
        : null
      }
      {props.age
        ? <Chip
          size="small"
          avatar={<Avatar alt="Natacha" src="/images/zoomies-icon.png" />}
          label={props.age}
          onDelete={handleDeleteAge}
        />
        : null}
      {props.size
        ? <Chip
          size="small"
          avatar={<Avatar alt="Natacha" src="/images/zoomies-icon.png" />}
          label={props.size}
          // onDelete={handleDelete}
        />
        : null
      }
    </div>
  );
}
