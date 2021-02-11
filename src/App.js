import React, {useEffect, useState} from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import Header from './components/Header/Header';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from "./App.module.css";

const url = "https://covid19.mathdro.id/api";

function App(props) {

    /* different states used with the useState hook */
    const [ covidData, setCovidData ] = useState({});
    const [ dailyCovidData, setDailyCovidData ] = useState([]);
    const [ countries, setCountries ] = useState([]);
    const [ modifiedDailyData, setModifiedDailyData ] = useState({});
    const [ modifiedCountry, setModifiedCountry ] = useState({});

    /* useEffect hook used for getting default information */
    useEffect(() => {
        const defaultData = async () => {
            await fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setCovidData(data);
                });
            }
        defaultData();
        
        /* useEffect hook used for getting daily information */
        const fetchApi = async () =>  {
                await fetch(`${url}/daily`)
                .then((res) => res.json())
                .then((data) => {          
                    const modifiedData = data.map((dailyData) => ({
                    confirmed: dailyData.confirmed.total,
                    deaths: dailyData.deaths.total,
                    date: dailyData.reportDate,
                  }));
                  
                  setDailyCovidData(modifiedData);
              })  
            .catch(err => console.log(err));
            }
            fetchApi();
    }, []);
        
    /* useEffect hook used for getting the information when country changes */
    useEffect(() => {
        const fetchCountries = async () => {
            await fetch(`${url}/countries`)
            .then((res) => res.json())
            .then((data) => {
                const countryName = data.countries.map(({ name }) => name);
                setCountries(countryName);
            })
        .catch(err => console.log(err));
        }
        fetchCountries();
          
    }, [setCountries]);

    /* handle country choosen and getting that information */
    const submitCountry = (countryName) => {
        setModifiedCountry(countryName); 
        if (countryName.length > 0) {
        fetch(`${url}/countries/${countryName}`)
        .then((res) => res.json())
        .then((data) => {
            setModifiedDailyData(data);
            setCovidData(data);
        });
    } else {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setCovidData(data);
            setModifiedDailyData(data);
        })
        .catch(err => console.log(err));
        }
    }
        
    return (
        <div className={styles.container}>
            <Header />
            <Cards covidData={covidData} /> 
            <CountryPicker submitCountry={submitCountry} countries={countries} />
            <Chart modifiedCountry={modifiedCountry} modifiedDailyData={modifiedDailyData} countries={countries} dailyCovidData={dailyCovidData} />
        </div>
    );
}

export default App;