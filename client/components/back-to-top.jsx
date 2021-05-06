import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

export default function ScrollToTop(props) {
  const classes = useStyles();

  return (
    <div>hello this is scroll to top</div>
  );
}
