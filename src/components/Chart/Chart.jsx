import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api/index';
import {Line, Bar, Doughnut } from 'react-chartjs-2';
import {Card, CardDeck} from 'react-bootstrap';

import styles from './Chart.module.css';

const Chart = ({data : {confirmed,recovered, deaths}, country}) =>{
    const [dailyData, setDailyData] = useState([]);

    useEffect(() =>{
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    },[]);

// terkorfirmasi
    const lineChart1 = (
        dailyData.length
        ?(
        <Line
            data = {{
                labels : dailyData.map(({date}) => date),
                datasets:[{
                    data : dailyData.map(({confirmed})=> confirmed),
                    label :  'Infected',
                    borderColor : '#333fff',
                    fill : true,

                }],
            }}

            options= {{
                scales: {
                    xAxes: [{
                        display: false,
                        gridLines: {
                            display:false
                        }
                    }],
                    yAxes: [{
                        display: false,
                        gridLines: {
                            display:false
                        }   
                    }]
                }
            }}
        />
        ) : null
    )


    const lineChart = (
        dailyData.length
        ?(
        <Line
            data = {{
                labels : dailyData.map(({date}) => date),
                datasets:[{
                    data : dailyData.map(({deaths})=> deaths),
                    label :  'Deaths',
                    borderColor : 'red',
                    backgroundColor : 'rgba(255,0,0,0.5)',
                    fill : true,

                }],
            }}

            options= {{
                scales: {
                    xAxes: [{
                        display: false,
                        gridLines: {
                            display:false
                        }
                    }],
                    yAxes: [{
                        display: false,
                        gridLines: {
                            display:false
                        }   
                    }]
                }
            }}
        />
        ) : null
    )

    const doughnutChart  = (
        confirmed
        ?(
       <Doughnut 
       
       data={{
           labels: ['infected', 'Recovered', 'Deaths'],
           datasets : [{
            label: 'People',
            backgroundColor: [
                'rgba(255,182,77,1)',
                'rgba(64,153,255,1)',
                'rgba(255,83,112,1)',
            ],
            data: [
                confirmed.value, recovered.value, deaths.value
            ],
            
        }]
       }}
       width={100}
       height={50}
       options =  {{maintainAspectRatio: true}}

       />
        ) :null
    )

    const barChart = (
        confirmed
        ? (
            <Bar
            
            data={{
                labels: ['infected', 'Recovered', 'Deaths'],
                datasets : [{
                    label: 'People',
                    backgroundColor: [
                        'rgba(255,182,77,1)',
                        'rgba(64,153,255,1)',
                        'rgba(255,83,112,1)',
                    ],
                    data: [
                        confirmed.value, recovered.value, deaths.value
                    ],
                   
                    
                }]

            }}

            options ={{
                legend: {display:false},
                scales: {
                    xAxes: [{
                        
                        gridLines: {
                            display:false
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display:false
                        }   
                    }]
                }
            }}
            
            />
        ) :null
    )
    
    return(
        <div className={styles.container}>
            <CardDeck className="w-100">               
               <Card border="0">
                   <Card.Title>Global Data</Card.Title>
                   <Card.Body >
                        <Card className="m-2 p-2">
                                {lineChart}
                        </Card>
                        <Card className="m-2 p-2">
                                {lineChart1}
                        </Card>
                   </Card.Body>
                   
               </Card>
               <Card border="0">
                   <Card.Body className="m-o p-2">
                   <Card.Title>Data from {country} : </Card.Title>
                   <Card>
                     {barChart}
                     {doughnutChart}
                   </Card>
                   </Card.Body>
               </Card>
               </CardDeck>
        </div>
    )
}


export default Chart;