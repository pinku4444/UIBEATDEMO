import React from 'react';
import Grid from "@material-ui/core/Grid";
import useStyles from "../../style/dashboard";
import Revenue from './Revenue';
import Chart from './Chart';
import LinkPage from './LinkPage';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';


const Dashboard = (props) => {
    const classes = useStyles();
    const {totalRevenue,totalGrowth} = props.revenue;
     return (
        <div className={classes.dashboard}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <Revenue revenue={totalRevenue} totalGrowth={totalGrowth}  />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Revenue revenue={totalRevenue} totalGrowth={totalGrowth}  />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Revenue revenue={totalRevenue} totalGrowth={totalGrowth}  />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Revenue revenue={totalRevenue} totalGrowth={totalGrowth} />
                </Grid>
                
            </Grid>
            <Grid container spacing={3}>
                <Grid item md={6} >
                    <Chart />
                </Grid>
                <Grid item md={6} >
                    <LinkPage 
                        pageTitle ="Pages"
                        link1Title="HomePage"
                        link1="/"
                        link1Description ="This is the main entry page"
                        link2Title="About Us"
                        link2="/"
                        link2Description ="This is the main entry page"
                        link3Description ="This is the main entry page"
                        link3Title="Works"
                        link3="/"
                        managementTiltle = "Go To Page Management"
                        managementLink ="/"
                        isMarginNeeded={false}

                     />
                     <LinkPage 
                        pageTitle ="Blog Article"
                        linkTitle="HomePage"
                        link1Title="HomePage"
                        link1="/"
                        link1Description ="This is the main entry page"
                        link2Title="About Us"
                        link2="/"
                        link2Description ="This is the main entry page"
                        link3Description ="This is the main entry page"
                        link3Title="Works"
                        link3="/"
                        managementTiltle = "Go To Page Management"
                        managementLink ="/"
                        isMarginNeeded={true}
                        
                     />
                </Grid>
            </Grid>
        </div>
        
    );
};

Dashboard.propTypes = {
    revenue:PropTypes.object
};


const mapsStateToProps = (state) => {
    return {
        revenue : state.revenue
    }
}
export default connect(mapsStateToProps)(Dashboard);