import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: '30px',
    marginBottom: '10px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  bgColor: {
    backgroundColor: '#fec700de'
  },
  ellipsis: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  }
});

export default function DogCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          className="card-img-height"
          image={props.dog.photos.medium ? props.dog.photos.medium : '/images/doge-edited.png'}
          title="Contemplative Reptile" // fix this later --> props.dog.age + props.dog.breed.primary
        />
        <CardContent >
          <Typography gutterBottom component="h2" className={`${classes.bgColor} ${classes.ellipsis} card-title`}>
            {props.dog.name}
          </Typography>
          {/* </div> */}
          <Typography gutterBottom variant="body2" color="textSecondary" component="p" className={`${classes.ellipsis} card-age-breed`}>
            {props.dog.age} - {props.dog.breed.primary}
          </Typography>
          <Typography className={`${classes.ellipsis} card-location`}>
            {props.dog.location.city}, {props.dog.location.state}
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}
