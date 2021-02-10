import React from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';

import styles from "./CountryPicker.module.css";

/* scroll menu with all the countries, and function for picking up the name of the country choosen */

function CountryPicker({countries, submitCountry}) {
    
    const handleCountry = (event) => {
        const countryName = event.target.value;
        submitCountry(countryName);
    }

    return (
            <FormControl className={styles.FormControl}> 
                <NativeSelect defaultValue="" onChange={handleCountry}>
                    <option value="">Global</option>
                    {countries.map((country, index) => <option value={country} key={index}>{country}</option>)}
                </NativeSelect>
            </FormControl>
    );
}


export default CountryPicker;

