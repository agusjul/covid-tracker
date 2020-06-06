import React, {useEffect, useState} from 'react';
import {NativeSelect, FormControl } from '@material-ui/core';
import {fetchCountries} from '../../api/index';
import styles from './Countrypicker.module.css';

const Countrypicker = ({handleCountryChange}) =>{

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(()=>{
        const fetcheAPI = async () =>{
            setFetchedCountries(await fetchCountries());
        }

        fetcheAPI();
    },[setFetchedCountries]);

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}


export default Countrypicker;