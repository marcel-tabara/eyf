import Navbar from '../components/Navbar.js';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import '../styles.scss';
import routes from '../navigation';
import { CustomAlert } from '../components/CustomAlert';

const useStyles = makeStyles();

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.mainPanel}>
        <Navbar />
        <div className="container">
          <CustomAlert />
          <div className={classes.content}>{routes}</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
