import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3)
  },
  photosSection: {
    backgroundColor: '#e5e5e5',
    height: '40vh',
    display: 'flex',
    justifyContent: 'center'
  },
  imgStyling: {
    height: '40vh',
    position: 'relative'
  },
  backButtonStyling: {
    backgroundColor: 'white',
    height: '50px',
    width: '50px',
    minWidth: '50px',
    top: '90px',
    borderRadius: '30px',
    position: 'absolute',
    left: '30px'
  },
  titleSection: {
    // height: '12vh',
    borderRadius: '25px',
    // marginBottom: '35px',
    marginTop: '-55px',
    filter: 'drop-shadow(0 2mm 1mm lightgray)'
  },
  detailsSection: {
    backgroundColor: 'white',
    minHeight: '35vh',
    borderRadius: '25px 25px 0 0',
    paddingLeft: '30px',
    paddingRight: '30px',
    marginTop: '30px'
  },
  aboutMeSection: {
    backgroundColor: 'white',
    minHeight: '30vh',
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
    display: 'flex',
    alignItems: 'center'
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
    display: 'block',
    // marginTop: '3px',
    fontSize: '.85rem'
  },
  detailSpans: {
    textShadow: 'none',
    color: '#5b5959',
    paddingLeft: '10px'
  },
  descriptionStyle: {
    fontSize: '0.95rem',
    color: '#5b5959'
  },
  adoptDiv: {
    display: 'flex',
    justifyContent: 'center'
  },
  urlButtonStyling: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '25px',
    marginBottom: '7%'
  },
  adoptUrlStyling: {
    letterSpacing: '1px',
    textDecoration: 'none',
    color: 'black',
    padding: '0px 5px',
    display: 'flex',
    textTransform: 'none'
  },
  progressDiv: {
    height: '60vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  progressCircle: {
    color: 'grey'
  }
}));

export default function DogDetails(props) {
  const classes = useStyles();
  const { dogId } = useParams();
  const [thisDog, setThisDog] = useState(null);
  const [hasError, setErrors] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getDogId = () => {
    // setIsLoading(false);
    fetch(`/api/dogs/${dogId}`)
      .then(response => response.json())
      .then(res => {
        setThisDog(res);
        setIsLoading(false);
      })
      .catch(() => setErrors(true));
  };

  useEffect(() => {
    getDogId();
  }, [dogId]);

  if (isLoading) {
    return <div className={classes.progressDiv}><CircularProgress className={classes.progressCircle} /></div>;
  } else if (thisDog != null) {
    return (
      <div id="content-wrap">
        <div className={classes.photosSection}>
          <img className={classes.imgStyling} src={(thisDog.photos.length !== 0) ? thisDog.photos[0].medium : '/images/doge-edited.png'} alt=""/>
          <Button className={classes.backButtonStyling}><ArrowBackIcon/></Button>
        </div>
        <div className={classes.root} >
          <Grid container >
            <Grid container item xs={12} className={classes.titleSection}>
              <Grid item xs={8} className={classes.nameSub}>
                <h2>{thisDog.name}</h2>
                <h3 className={classes.breedsStyle}>{thisDog.breed.primary}
                  {(thisDog.breed.secondary) ? <span className={classes.secondaryBreedStyle}> & {thisDog.breed.secondary}</span>
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
              <div className={classes.adoptDiv}>
                <Button className={classes.urlButtonStyling}><a href={thisDog.url} className={classes.adoptUrlStyling} target="_blank" rel="noopener noreferrer">
                  <KeyboardArrowRightIcon /> Adopt Me <KeyboardArrowLeftIcon /></a>
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  } else {
    return (null);
  }
}
