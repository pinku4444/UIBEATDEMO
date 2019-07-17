import React from 'react';
import { Chart } from "react-google-charts";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {connect} from "react-redux"



const Weekly = (props) => {
    const options = {
        hAxis: { title: "Week", viewWindow: { min: 1, max: 4 } },
        vAxis: { title: "Customer", viewWindow: { min: 0, max: 500  } },
        legend: "none"
      };

    const data=props.visitData.weeklyData;
    return (
        <Grid container>
            <Grid item xs={12} >
                <Card>
                    <CardContent>
                        <Typography  variant="h6" component="h6">
                            Weekly Visit
                        </Typography>
                        <Chart
                        chartType="LineChart"
                        data={data}
                        options={options}
                        graphID="LineChart"
                        width="100%"
                        height="400px"
                    
                    />
                    </CardContent>
                </Card>
            </Grid>

        </Grid>
    );
};

const mapsStateToProps = (state) => {
    return {
        visitData : state.visit 
    }
}


export default connect(mapsStateToProps)(Weekly);