import React from 'react';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
import { Card, CardDeck} from 'react-bootstrap';

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const Cards = ({data : {confirmed, recovered, deaths, lastUpdate}}) =>{

    if(!confirmed){
        return 'Loading...'
    }
    console.log(Cards);

    return(
        <div className = {styles.container}>

        <CardDeck>
                <Card className= {styles.confirmed} border="0">
                    <Card.Body>
                        <h1>
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator="." />
                        </h1>
                        <Card.Title>Confirmed</Card.Title>
                    </Card.Body>    
                    <Card.Footer>
                    <small className="text-light">Last updated {new Date(lastUpdate).toLocaleDateString('en-US', options)}</small>
                    </Card.Footer>
                </Card>
            <Card className= {styles.recovered} border="0">
                <Card.Body>
                    <h1>
                    <CountUp start={0} end={recovered.value} duration={2.5} separator="." />
                    </h1>
                    <Card.Title>Recovered</Card.Title>
                </Card.Body>    
                <Card.Footer>
                <small className="text-light">Last updated {new Date(lastUpdate).toLocaleDateString('en-US', options)}</small>
                </Card.Footer>
            </Card>
            <Card className= {styles.deaths} border="0">
                <Card.Body>
                    <h1>
                    <CountUp start={0} end={deaths.value} duration={2.5} separator="." />
                    </h1>
                    <Card.Title>Deaths</Card.Title>
                </Card.Body>    
                <Card.Footer>
                <small className="text-light">Last updated {new Date(lastUpdate).toLocaleDateString('en-US', options)}</small>
                </Card.Footer>
            </Card>
           
        </CardDeck>




            {/* batas material UI */}
            {/* <Grid container spacing={3} justify="center" direction="row">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            separator="."
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString('en-US', options)}</Typography>
                        <Typography variant="body2">Number of active cases of Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator="."
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString('en-US', options)}</Typography>
                        <Typography variant="body2">Number of recoveries from Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"><CountUp
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator="."
                            />
                            </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString('en-US', options)}</Typography>
                        <Typography variant="body2">Number of deaths cause of Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid> */}
            
        </div>
    )
}



export default Cards;