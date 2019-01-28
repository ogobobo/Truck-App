import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faTruckMoving,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

library.add(faHeart,
  faTruckMoving,
  faHome);

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    textDecoration: 'none',
    color: '#FFF',
  },
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <Link to="/" className={classes.link} >
            Home <FontAwesomeIcon icon="home"/>
            </Link>
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
          <Link className={classes.link} to="trucks">
            Trucks <FontAwesomeIcon icon="truck-moving" />
            </Link>
          </Typography>
          <Button color="inherit">
              <Link to="favorites" className={classes.link}>
              Favorites <FontAwesomeIcon icon="heart"/></Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);