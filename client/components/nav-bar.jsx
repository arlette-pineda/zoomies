import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'relative'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'black',
    backgroundColor: 'white'
  },
  title: {
    flexGrow: 1,
    color: 'black',
    width: '50%'
  },
  menuButtonsLg: {
    fontWeight: '800',
    fontSize: '2.4rem',
    letterSpacing: '1px',
    color: 'black',
    margin: '0 9px',
    '&:hover': {
      background: 'none',
      color: 'white',
      borderRadius: 0,
      borderBottom: '3px solid white'
    }
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
      <AppBar position="relative" className='main-color header-size' onClick={anchorEl ? () => handleClose() : undefined}>
        <Toolbar>
          <Typography component={Link} to='/' variant="h6" className={classes.title}>
            <img src="/images/zoomies-img.png" alt="zoomies logo" className="logo-img"/>
          </Typography>
          <Hidden lgUp>
            <IconButton edge="start" id="menu-button-lg" className={`${classes.menuButton}`} aria-label="simple-menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <MenuIcon id="menu-icon-button-lg"/>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              >
                <MenuItem component={Link} to='/'>Home</MenuItem>
                <MenuItem component={Link} to='/about'>About</MenuItem>
                <MenuItem component={Link} to='/search'>Search</MenuItem>
              </Menu>
            </IconButton>
          </Hidden>
          <Hidden mdDown>
            <Button className={classes.menuButtonsLg} component={Link} to='/' color="inherit">Home</Button>
            <Button className={classes.menuButtonsLg} component={Link} to='/about' color="inherit">About</Button>
            <Button className={classes.menuButtonsLg} component={Link} to='/search' color="inherit">Search</Button>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default NavBar;
