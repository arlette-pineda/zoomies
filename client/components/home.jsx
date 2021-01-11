import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  containerTopImage: {
    position: 'relative'
    // textAlign: 'center'
    // color: 'white'
  },
  imgStyle: {
    maxWidth: '100%',
    // position: 'absolute',
    objectFit: 'cover',
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
    left: '16px',
    fontWeight: 700
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
  homeH2Style: {
    border: '3px double #fec700',
    padding: '20px 30px',
    margin: '0 15% 30px'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.containerTopImage}>
        <img src="/images/homepage.jpg" alt="woman looking happy hugging dog" className={classes.imgStyle} />
        <div className={classes.topImageText}>Many of our furry friends are full of energy and ready to show off their fastest zoomies.
          Schedule a Zoom session today!</div>
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
        <h2 className={classes.homeH2Style}>
          &quot;A baby chiweenie named Simon running around for a treat was just the treat I didn&apos;t know I needed to
          get me through a rough day.&quot; -Cori V.
        </h2>
        <h2 className={classes.homeH2Style}>
          &quot;Sparkle the senior dalmation helped put a smile on my face during a stressful period.
          I would love to schedule with her again!&quot; -Jose X.
        </h2>
      </div>
    </div>
  );
}
