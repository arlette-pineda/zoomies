import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';

const useStyles = makeStyles(theme => ({
  containerTopImage: {
    position: 'relative'
    // textAlign: 'center'
    // color: 'white'
  },
  imgStyle: {
    maxWidth: '100%',
    objectFit: 'cover',
    opacity: '75%',
    objectPosition: 'center'
    // paddingLeft: '300px',
    // boxSizing: 'borderBox',
    // boxShadow: 'inset -250px 0 50px 10px #FFF'
  // top: 0,
  // bottom: 0,
  // left: 0,
  // right: 0
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
  // topImageH3: {
  // },
  searchButtonStyle: {
    borderRadius: '10px',
    backgroundColor: theme.palette.secondary.main,
    padding: '3px 6px'
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
    marginBottom: 0
  },
  homeH4Style: {
    margin: '0 auto'
  },
  homeUlStyle: {
    marginTop: 0,
    marginBottom: '30px'
  },
  homePStyle: {
    border: '3px double #fec700',
    padding: '20px 30px',
    margin: '0 15% 30px'
  },
  spanNameStyle: {
    display: 'inline-block',
    width: '100%',
    textAlign: 'right'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.containerTopImage}>
        <img src="/images/homepage.jpg" alt="woman looking happy hugging dog" className={classes.imgStyle} />
        <div className={classes.topImageText}>
          <h1>Schedule a session today</h1>
          <h2>Our furry friends are full of energy and ready to show off their fastest zoomies!</h2>
          {/* <h3 className={classes.topImageH3}></h3> */}
          <Button variant="contained" component={Link} to='/search' className={classes.searchButtonStyle}>
            Search <NavigateNextRoundedIcon className={classes.iconStyling} />
          </Button>
        </div>
      </div>
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
      <div className={classes.testimonials}>
        <p className={classes.homePStyle}>
          &quot;A baby chiweenie named Simon running around for a treat was just the treat I didn&apos;t know I needed to
          get me through a rough day.&quot; <br /> <span className={classes.spanNameStyle}>-Cori V.</span>
        </p>
        <p className={classes.homePStyle}>
          &quot;Sparkle the senior dalmation helped put a smile on my face during a stressful period.
          I would love to schedule with her again!&quot; <br/> <span className={classes.spanNameStyle}>-Jose X.</span>
        </p>
      </div>
    </div>
  );
}
