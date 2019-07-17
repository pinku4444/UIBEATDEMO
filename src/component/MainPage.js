import React from "react";
import Sidebar from './layout/sidebar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Dashboard from './customer/Dashboard'
import useStyles from "../style/dashboard";


const MainPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Router>
        <Sidebar />
        <Switch>
            <Route path="/" component={Dashboard} />
        </Switch>
    </Router>
    </div>
    
        
        
  );
}

export default MainPage;
