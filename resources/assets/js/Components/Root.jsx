import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui-icons/Home';
import Grid from 'material-ui/Grid';
import {Link} from 'react-router-dom';

import Login from './Container/Login';
import CreatePostButton from './Container/CreatePostButton';
import NewPostDialog from './Container/NewPostDialog';


const styles = theme => ({
  root: {
    width: '100%',
    minHeight: '100%'
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  grid: {
      height: '100%',
      marginTop: theme.spacing.unit * 3,
  },
  homelink: {
      textDecoration: 'none',
      color: 'inherit'
  }
});

const Root = ({ classes, children, onLogin, onLogout }) => (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Link to="/" className={classes.homelink}>
                    <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                        <HomeIcon />
                    </IconButton>
                </Link>
                <Typography type="title" color="inherit" className={classes.flex}>
                    <Link to="/" className={classes.homelink}>
                        Maxime's blog
                    </Link>
                </Typography>
                <Login onLogin={onLogin} onLogout={onLogout} />
            </Toolbar>
        </AppBar>

        <Grid container justify="center" className={classes.grid}>
            {children}
        </Grid>

        <CreatePostButton />
        <NewPostDialog />
    </div>
);

Root.propTypes = {
  classes: PropTypes.object.isRequired,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func
};

export default withStyles(styles)(Root);
