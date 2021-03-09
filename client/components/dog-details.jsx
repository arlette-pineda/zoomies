import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3)
  },
  photosSection: {
    backgroundColor: '#cfe8fc',
    height: '30vh'
  },
  titleSection: {
    height: '12vh',
    borderRadius: '25px',
    marginBottom: '35px',
    marginTop: '-55px',
    filter: 'drop-shadow(0 2mm 1mm lightgray)'
  },
  detailsSection: {
    backgroundColor: '#ffcff5',
    height: '35vh',
    borderRadius: '25px 25px 0 0',
    paddingLeft: '30px'
  },
  aboutMeSection: {
    backgroundColor: '#ffe1cf',
    height: '30vh',
    paddingLeft: '30px',
    borderRadius: '0 0 25px 25px'
  },
  nameSub: {
    backgroundColor: 'white',
    borderRadius: '25px 0 0 25px',
    paddingLeft: '30px',
    textShadow: '0 6px 14px gray'
  },
  scheduleArea: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '0 25px 25px 0',
    textAlign: 'center',
    paddingTop: '10px'
  },
  detailItems: {
    filter: 'drop-shadow(0 2mm 1mm gray)'
  }
}));

export default function DogDetails(props) {
  const classes = useStyles();
  const { dogId } = useParams();
  const [thisDog, setThisDog] = useState(null);
  const [hasError, setErrors] = useState(false);

  const getDogId = () => {
    fetch(`/api/dogs/${dogId}`)
      .then(response => response.json())
      .then(res => {
        setThisDog(res);
      })
      .catch(() => setErrors(true));
  };

  useEffect(() => {
    getDogId();
  }, [dogId]);

  if (thisDog != null) {
    return (
      <div id="content-wrap">
        <div className={classes.photosSection}>Photos</div>
        <div className={classes.root} >
          <Grid container >
            <Grid container item xs={12} className={classes.titleSection}>
              <Grid item xs={8} className={classes.nameSub}>
                <h2>{thisDog.name}</h2>
                <h3>{thisDog.breed.primary}</h3>
              </Grid>
              <Grid item xs={4} className={classes.scheduleArea}>
                <h3>Schedule Meet!</h3>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.detailsSection}>
              <h2>Details</h2>
              <div className={classes.detailItems}>
                <p>Size: {thisDog.size}</p>
                <p>Gender: {thisDog.gender}</p>
                <p>Age: {thisDog.age}</p>
                <p>Coat: {thisDog.coat}</p>
                <p>Color: {thisDog.color.primary}</p>
                <p>Location: {thisDog.location.city},{thisDog.location.state}</p>
              </div>
            </Grid>
            <Grid item xs={12} className={classes.aboutMeSection}>
              <h2>About Me </h2>
              <p>{thisDog.description}</p>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  } else {
    return (null);
  }
}
