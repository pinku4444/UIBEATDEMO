import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import useStyles from "../../style/dashboard";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const Revenue = props => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item md={12}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography color="primary" className={classes.title} variant="h6" component="h6">
                            Total Revenue
                        </Typography>
                        <Typography  component="p">
                        ${props.revenue}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardactions}>
                        <Typography component="p">
                            Total Growth : <span>{props.totalGrowth}</span>
                        </Typography>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
        
    );
};

Revenue.propTypes = {
    revenue:PropTypes.number,
    totalGrowth : PropTypes.number
};

export default Revenue;