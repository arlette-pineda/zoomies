import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';

const useStyles = makeStyles(theme => ({
  containerTopImage: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  },
  imgStyle: {
    width: '100%',
    maxWidth: '1400px',
    objectFit: 'cover',
    opacity: '75%',
    objectPosition: '30% 20%'
  },
  topImageText: {
    position: 'absolute',
    top: '8px',
    padding: '0 20px',
    fontWeight: 700,
    color: 'white',
    textShadow: '0 1px 10px #4d4751, 0 0 4px #4d4751',
    textAlign: 'center'
  },
  searchButtonStyle: {
    borderRadius: '10px',
    backgroundColor: theme.palette.secondary.main,
    padding: '3px 6px',
    textShadow: 'none',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: '#dfaf04'
    }
  },
  iconStyling: {
    paddingLeft: '8px'
  },
  homeInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '0 5%'
  },
  homeH1Style: {
    marginBottom: 0,
    backgroundColor: theme.palette.secondary.main,
    padding: '0 15px'
  },
  homeH4Style: {
    margin: '1% auto 0'
  },
  homeUlStyle: {
    marginTop: 0,
    marginBottom: '30px',
    color: '#575555'
  },
  homePStyle: {
    border: '3px double #fec700',
    padding: '18px 28px',
    margin: '0 15% 30px'
  },
  spanNameStyle: {
    display: 'inline-block',
    width: '100%',
    textAlign: 'right',
    fontWeight: 600
  },
  solidDivider: {
    borderTop: '2px solid #d4d1d194',
    width: '80%'
  },
  homeIntro: {
    textAlign: 'center',
    padding: '0 20px',
    fontWeight: 700,
    marginTop: '5%',
    fontSize: '1.2rem'
  },
  homeIntroP: {
    filter: 'drop-shadow(0 0 30px #333)'
  },
  testimonials: {
    maxWidth: '500px',
    marginRight: 'auto',
    marginLeft: 'auto'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.containerTopImage}>
        <img src="/images/homepage.jpg" alt="woman looking happy hugging dog" className={`${classes.imgStyle} img-style-lg`} />
        <div className={`${classes.topImageText} top-image-text-lg`}>
          <h1>Schedule a therapy session today</h1>
          <h2>Our furry friends are ready to show off their fastest zoomies!</h2>
          <Button variant="contained" component={Link} to='/search' className={classes.searchButtonStyle}>
            Find a Dog <NavigateNextRoundedIcon className={classes.iconStyling} />
          </Button>
        </div>
      </div>
      <div id='content-wrap'>
        <div className={classes.homeIntro}>
          <img src="/images/yellow-zoomer.png" alt="yellow filled outline of pug"/>
          <p className={classes.homeIntroP}>Zoomies lets clients choose their favorite doggie from anywhere in the country
          for an assisted virtual pet therapy session.</p>
        </div>
        <hr className={classes.solidDivider} />
        <div className={classes.homeInfo}>
          <h1 className={classes.homeH1Style}>Did you know?</h1>
          <h4 className={classes.homeH4Style}>Interacting with a friendly pet can:</h4>
          <div className={classes.homeUlStyle}>
            <ul>
              <li>
              help many physical and mental issues
              </li>
              <li>
              reduce blood pressure and improve overall cardiovascular health
              </li>
              <li>
              release endorphins that produce a calming effect
              </li>
              <li>
              alleviate pain, reduce stress, and improve overall psychological state
              </li>
            </ul>
          </div>
        </div>
        <div className={`${classes.testimonials} testimonials-lg`}>
          <p className={`${classes.homePStyle} home-p-style-lg`}>
          &quot;A baby chiweenie named Simon running around for a treat was just the treat I didn&apos;t know I needed to
          get me through a rough day.&quot; <br /> <span className={classes.spanNameStyle}>-Cori V.</span>
          </p>
          <p className={`${classes.homePStyle} home-p-style-lg`}>
          &quot;Sparkle the senior dalmation helped put a smile on my face during a stressful period.
          I would love to schedule with her again!&quot; <br/> <span className={classes.spanNameStyle}>-Jose X.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
