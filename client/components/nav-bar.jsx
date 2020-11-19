import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'black',
    backgroundColor: 'white'
  },
  title: {
    flexGrow: 1,
    color: 'black'
  }
}));

function NavBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className='main-color' onClick={anchorEl ? () => handleClose() : undefined}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src="/images/zoomies-img.png" alt="zoomies logo" className="logo-img"/>
          </Typography>
          <IconButton edge="start" className={classes.menuButton} aria-label="simple-menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon/>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
              <MenuItem onClick={handleClose}>Home</MenuItem>
              <MenuItem onClick={handleClose}>About</MenuItem>
              <MenuItem onClick={handleClose}>Search</MenuItem>
            </Menu>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default NavBar;
