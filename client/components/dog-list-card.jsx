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
    marginBottom: '10px'
    // marginBottom: theme.spacing(2)
  },
  media: {
    height: 140
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
          className={classes.media}
          image={props.dog.photos.medium ? props.dog.photos.medium : '/images/doge-edited.png'}
          title="Contemplative Reptile" // fix this later --> props.dog.age + props.dog.breed.primary
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2" className={`${classes.bgColor} ${classes.ellipsis}`}>
            {props.dog.name}
          </Typography>
          {/* </div> */}
          <Typography gutterBottom variant="body2" color="textSecondary" component="p" className={classes.ellipsis}>
            {props.dog.age} - {props.dog.breed.primary}
          </Typography>
          <Typography className={classes.ellipsis}>
            {props.dog.location.city}, {props.dog.location.state}
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}
