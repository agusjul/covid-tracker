import axios from 'axios';

const url ='https://covid19.mathdro.id/api';

export const fetchData = async() =>{
    try {
        const { data : {confirmed, recovored,deaths,lastUpdate} } = await axios.get(url);

        return { confirmed, recovored, deaths, lastUpdate};
        
    } catch (error) {
        
    }
}