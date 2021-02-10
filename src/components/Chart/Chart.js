import React from 'react';
import styles from './Chart.module.css';
import { Line, Bar }  from "react-chartjs-2";

/* using react-chartJS for getting a chart effect, and with different information for country choosen */

function Chart({dailyCovidData, modifiedCountry, modifiedDailyData}) {

    const lineChart = (
       
        dailyCovidData ?
        <Line
        data={{
            labels: dailyCovidData.map(({ date }) => date),
            datasets: [{
                data: dailyCovidData.map(({ confirmed }) => confirmed),
                label: "Infected",
                borderColor: "rgba(0, 0, 255, 0.5)",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                fill: true,
            }, {
                data: dailyCovidData.map(({ deaths }) => deaths),
                label: "Deaths",
                borderColor: '#d50000',
                backgroundColor: "rgba(255, 0, 0, 0.5)",
                fill: true,
            }]
        }} 
        /> : null 
        );

        const barChart = (
            modifiedDailyData.confirmed ?
            <Bar 
            data = {{
              labels: ["Infected", "Recovered", "Deaths"],
              datasets: [{
                 label: "People",
                 backgroundColor: [
                     "rgba(0, 0, 255, 0.5)", 
                     "rgba(0, 255, 98, 0.5)", 
                     "rgba(255, 0, 0, 0.5)",
                 ],
                 data: [modifiedDailyData.confirmed.value , modifiedDailyData.recovered.value , modifiedDailyData.deaths.value ],
              }]
            }}
            options = {{
                legend: {display: false},
            }} 
         /> : null
        );

    return (
        <div className={styles.container}>
        {modifiedDailyData.confirmed ? barChart : lineChart}
        </div>
    );
}

export default Chart;
