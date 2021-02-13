import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { navigate } from '@reach/router';
import React from 'react';
import '../styles.scss';
import FastfoodIcon from '@material-ui/icons/Fastfood';

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  title: { flexGrow: 1 },
}));

const NavBar = () => {
  const go = (route) => navigate(route);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <FastfoodIcon className="brand" onClick={() => go('/')} />
          <Typography variant="h6" className={classes.title}>
            Eat Your Food
          </Typography>
          <Button color="inherit" onClick={() => go('/recipes')}>
            Recipes
          </Button>
          <Button color="inherit" onClick={() => go('/ingredients')}>
            Ingredients
          </Button>
          <Button color="inherit" onClick={() => go('/history')}>
            History
          </Button>
          <Button color="inherit" onClick={() => go('/generate')}>
            Generate
          </Button>
          <Button color="inherit" onClick={() => go('/settings')}>
            Settings
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
