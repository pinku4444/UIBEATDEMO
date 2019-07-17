import React from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from '@material-ui/core/CardActions';
import useStyles from "../../style/dashboard";
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

const LinkPage = props => {
    const classes = useStyles();
    return (
        <div>
           <Grid container className={props.isMarginNeeded ? classes.marginTen : ""}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography className={classes.title} variant="h6" component="h6">
                                {props.pageTitle}
                            </Typography>
                            <Typography className={classes.linkTypography}  >
                                {props.link1Title}: <Link className={classes.link} to={props.link1}>{props.link1Description}</Link>
                            </Typography>
                            <Typography  className={classes.linkTypography}>
                                {props.link2Title}: <Link className={classes.link} to={props.link2}>{props.link2Description}</Link>
                            </Typography>
                            <Typography  className={classes.linkTypography}>
                                {props.link3Title}: <Link className={classes.link} to={props.link3}>{props.link3Description}</Link>
                            </Typography>
                        </CardContent>
                        <CardActions >
                            <Typography className={classes.linkcardactiontypo}  >
                                <Link className={classes.cardactionlink} to={props.managementLink}>{props.managementTiltle}</Link>
                            </Typography>
                         </CardActions>
                    </Card>
                    
                </Grid>
           </Grid>
        </div>
    );
};

LinkPage.propTypes = {
    pageTitle : PropTypes.string,
    link1Title : PropTypes.string,
    link2Title : PropTypes.string,
    link3Title : PropTypes.string,


};

export default LinkPage;