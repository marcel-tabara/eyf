import Navbar from '../components/Navbar.js';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import '../styles.scss';
import routes from '../navigation';

const useStyles = makeStyles();

const Main = ({ ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.mainPanel}>
        <Navbar />
        <div className={classes.content}>{routes}</div>
      </div>
    </div>
  );
};

export default Main;
