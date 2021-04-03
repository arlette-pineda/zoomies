import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PetsIcon from '@material-ui/icons/Pets';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2)
  },
  photosSection: {
    backgroundColor: '#e5e5e5',
    height: '40vh',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '260px'
  },
  imgStyling: {
    height: '40vh',
    minHeight: '250px',
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
    borderRadius: '25px',
    marginTop: '-55px',
    filter: 'drop-shadow(0 2mm 1mm lightgray)'
  },
  detailsSection: {
    backgroundColor: 'white',
    minHeight: '35vh',
    borderRadius: '25px 25px 0 0',
    paddingLeft: '25px',
    paddingRight: '25px',
    filter: 'drop-shadow(0 2mm 1mm lightgray)'
  },
  aboutMeSection: {
    backgroundColor: 'white',
    minHeight: '30vh',
    paddingLeft: '25px',
    paddingRight: '25px',
    borderRadius: '0 0 25px 25px',
    filter: 'drop-shadow(0 2mm 1mm lightgray)'
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
    alignItems: 'center',
    justifyContent: 'center'
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
    fontSize: '.85rem'
  },
  detailSpans: {
    textShadow: 'none',
    color: '#5b5959',
    paddingLeft: '10px'
  },
  descriptionStyle: {
    fontSize: '0.9rem',
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
  },
  adSection: {
    border: '2px solid #fec700',
    borderRadius: '25px',
    height: '480px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 30px',
    lineHeight: '1.5',
    fontSize: '1.1rem',
    filter: 'drop-shadow(0 2mm 1mm lightgray)'
  },
  aboutH2: {
    marginTop: 0,
    paddingTop: '5px'
  },
  locationP: {
    marginBottom: 0,
    paddingBottom: '30px'
  },
  detailsH2: {
    paddingTop: '20px',
    marginTop: 0
  },
  scheduleH3: {
    fontSize: 'large'
  },
  detailsAboutAd: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
    marginBottom: '3%'
  }
}));

export default function DogDetails(props) {
  const history = useHistory();
  const classes = useStyles();
  const { dogId } = useParams();
  const [thisDog, setThisDog] = useState(null);
  const [hasError, setErrors] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getDogId = () => {
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

  const goBackToSearch = () => {
    history.goBack();
  };

  if (isLoading) {
    return <div className={classes.progressDiv}><CircularProgress className={classes.progressCircle} /></div>;
  } else if (thisDog != null) {
    let doggieDescription = thisDog.description;
    if (doggieDescription) {
      doggieDescription = doggieDescription.replaceAll('&amp;#34;', '"').replaceAll('&amp;#39;', "'")
        .replaceAll('&#039;', "'").replaceAll('&amp;amp;', '&').replaceAll('&amp;', '&');
    }
    return (
      <div id="content-wrap">
        <div className={classes.photosSection}>
          <img className={classes.imgStyling} src={(thisDog.photos.length !== 0) ? thisDog.photos[0].medium : '/images/doge-edited.png'} alt=""/>
          <Button onClick={goBackToSearch} className={classes.backButtonStyling}><ArrowBackIcon/></Button>
        </div>

        <div className={classes.root} id="details-root-lg">

          <Grid container >

            <Grid container item xs={12} lg={10} className={classes.titleSection}>
              <Grid item xs={8} className={classes.nameSub}>
                <h2>{thisDog.name}</h2>
                <h3 className={classes.breedsStyle}>{thisDog.breed.primary}
                  {(thisDog.breed.secondary) ? <span className={classes.secondaryBreedStyle}> & {thisDog.breed.secondary}</span>
                    : null} </h3>
              </Grid>
              <Grid item xs={4} className={classes.scheduleArea}>
                <h3 className={classes.scheduleH3}>Schedule Meet!</h3>
              </Grid>
            </Grid>

            <Grid item lg={12} className={classes.detailsAboutAd} >

              <Grid item lg={8} xs={12}>

                <Grid item xs={12} className={classes.detailsSection}>
                  <h2 className={classes.detailsH2}>Details</h2>
                  <div className={classes.detailItems}>
                    <p>Age: <span className={classes.detailSpans}>   {thisDog.age}</span></p>
                    <p>Size: <span className={classes.detailSpans}>   {thisDog.size}</span></p>
                    <p>Coat: <span className={classes.detailSpans}>  {thisDog.coat}</span></p>
                    <p>Color: <span className={classes.detailSpans}>   {thisDog.color.primary}</span></p>
                    <p>Gender: <span className={classes.detailSpans}>   {thisDog.gender}</span></p>
                    <p className={classes.locationP}>Location: <span className={classes.detailSpans}>   {thisDog.location.city}, {thisDog.location.state}</span></p>
                  </div>
                </Grid>

                <Grid item xs={12} className={classes.aboutMeSection}>
                  <h2 className={classes.aboutH2}>About </h2>
                  <p className={classes.descriptionStyle}>{doggieDescription}</p>
                  <div className={classes.adoptDiv}>
                    <Button className={classes.urlButtonStyling}>
                      <a href={thisDog.url} className={classes.adoptUrlStyling} target="_blank" rel="noopener noreferrer">
                  Adopt Me <PetsIcon fontSize="small" /></a>
                    </Button>
                  </div>
                </Grid>
              </Grid>

              <Hidden mdDown>
                <Grid item lg={3}>
                  <Grid item className={classes.adSection}>
                    <div>Hi this is something related to the website!</div>
                  </Grid>
                </Grid>
              </Hidden>

            </Grid>

          </Grid>
        </div>
      </div>
    );
  } else {
    return (null);
  }
}
