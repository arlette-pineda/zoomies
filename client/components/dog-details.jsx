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
    backgroundColor: 'white',
    height: '35vh',
    borderRadius: '25px 25px 0 0',
    paddingLeft: '30px'
  },
  aboutMeSection: {
    backgroundColor: 'white',
    height: '30vh',
    paddingLeft: '30px',
    paddingRight: '30px',
    borderRadius: '0 0 25px 25px',
    filter: 'drop-shadow(0 2mm 0.3mm lightgray)'
  },
  nameSub: {
    backgroundColor: 'white',
    borderRadius: '25px 0 0 25px',
    paddingLeft: '30px',
    textShadow: '0 6px 14px #454545a1',
    letterSpacing: '1px'
  },
  scheduleArea: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '0 25px 25px 0',
    textAlign: 'center',
    paddingTop: '10px'
  },
  detailItems: {
    textShadow: '0 6px 14px #454545a1',
    color: 'black',
    fontSize: '0.95rem'
  },
  breedsStyle: {
    color: 'gray',
    filter: 'none',
    textShadow: 'none',
    letterSpacing: 'normal'
  },
  secondaryBreedStyle: {
    marginTop: '3px'
  },
  detailSpans: {
    textShadow: 'none',
    color: '#5b5959',
    paddingLeft: '10px'
  },
  descriptionStyle: {
    fontSize: '0.95rem',
    color: '#5b5959'
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
                <h3 className={classes.breedsStyle}>{thisDog.breed.primary}
                  {(thisDog.breed.secondary) ? <h5 className={classes.secondaryBreedStyle}> & {thisDog.breed.secondary}</h5>
                    : null} </h3>
              </Grid>
              <Grid item xs={4} className={classes.scheduleArea}>
                <h3>Schedule Meet!</h3>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.detailsSection}>
              <h2>Details</h2>
              <div className={classes.detailItems}>
                <p>Age: <span className={classes.detailSpans}>   {thisDog.age}</span></p>
                <p>Size: <span className={classes.detailSpans}>   {thisDog.size}</span></p>
                <p>Coat: <span className={classes.detailSpans}>  {thisDog.coat}</span></p>
                <p>Color: <span className={classes.detailSpans}>   {thisDog.color.primary}</span></p>
                <p>Gender: <span className={classes.detailSpans}>   {thisDog.gender}</span></p>
                <p>Location: <span className={classes.detailSpans}>   {thisDog.location.city}, {thisDog.location.state}</span></p>
              </div>
            </Grid>
            <Grid item xs={12} className={classes.aboutMeSection}>
              <h2>About Me </h2>
              <p className={classes.descriptionStyle}>{thisDog.description}</p>
              <a href={thisDog.url} target="_blank" rel="noopener noreferrer">Adopt Me</a>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  } else {
    return (null);
  }
}
