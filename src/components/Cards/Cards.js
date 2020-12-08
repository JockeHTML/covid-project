import React from 'react';
import  { Card, CardContent, Typography, Grid} from "@material-ui/core";
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from "classnames";

function Cards({  covidData:  { confirmed, recovered, deaths, lastUpdate } }) {

    if (!confirmed) {
        return "Loading..";
    }

    return (
        
        <div>
           <div className={styles.container}>
               <Grid container spacing={3} justify="center">
                    <Grid item component={Card} xs={8} md={3} className={cx(styles.card, styles.infected)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Infected</Typography>
                            <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={1} separator=","/>
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Active cases of COVID-19</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={8} md={3} className={cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={recovered.value} duration={1} seperator={","} />
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Cases recovered from COVID-19</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={8} md={3} className={cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={1} seperator={","}/>
                            </Typography>
                            <Typography color="textSecondary">REAL DATE</Typography>
                            <Typography variant="body2">Cases died from COVID-19</Typography>
                        </CardContent>
                    </Grid>
               </Grid>
           </div> 
        </div>
    );
}

export default Cards;