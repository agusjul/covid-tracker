import React from 'react';

import {Cards, Chart, Countrypicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component{

    async componentDidMount(){
        const data = await fetchData();

        console.log(data);
    }

    render(){
        return(
            <div className={styles.container}>
                <Cards/>
                <Chart/>
                <Countrypicker/>
            </div>
        )
    }
}


export default App;