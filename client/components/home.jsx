import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  imgStyle: {
    maxWidth: '100%',
    // position: 'absolute',
    objectFit: 'cover',
    objectPosition: 'center'
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0
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
  homeUlStyle: {
    marginTop: 0,
    marginBottom: '30px'
  },
  homeH2Style: {
    border: '3px solid #fec700',
    padding: '20px 30px',
    margin: '0 15% 30px'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <img src="/images/homepage.jpg" alt="woman looking happy hugging dog" className={classes.imgStyle} />
      <div className={classes.homeInfo}>
        <h1 className={classes.homeH1Style}>Did you know?</h1>
        <div className={classes.homeUlStyle}>
          <ul>
            <li>
              Interacting with a friendly pet can help many physical and mental issues.
            </li>
            <li>
              It can help reduce blood pressure and improve overall cardiovascular health.
            </li>
            <li>
              It can also release endorphins that produce a calming effect.
            </li>
            <li>
              This can help alleviate pain, reduce stress, and improve your overall psychological state.
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.testimonials}>
        <h2 className={classes.homeH2Style}>
          &quot;A baby chiweenie named Simon running around for a treat was just the pick me up I needed to
          get me through a rough day.&quot; -Cori V.
        </h2>
        <h2 className={classes.homeH2Style}>
          &quot;A baby chiweenie named Simon running around for a treat was just the pick me up I needed to
          get me through a rough day.&quot; -Jose X.
        </h2>
      </div>
    </div>
  );
}
