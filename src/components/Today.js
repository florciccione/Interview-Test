import React from 'react';

//CSS
import './Today.css';

//Material
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Today ({current}) {
    console.log("current",current)
    return(
    <CardContent classes={{ root: "today"}}>

       <Grid container direction="column" className="containerWeather" spacing={2}>
            {current.weather ? (
               <div className="imageWeather" >
                    <Grid classes={{ root: "icon"}} item >
                        <img 
                            src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                            width="120" 
                            height="120" 
                            alt="weather icon" 
                        />
                    </Grid>
                    <Grid item>
                        <Typography classes={{ h5: "description"}} variant="h5">
                            {current.weather[0].main}
                        </Typography>
                    </Grid>
                </div>
            ) : null}
        </Grid>
        {current.main ? (
             <Grid container className="containerTemperature" spacing={2}>
                <Grid item container className="temperature" spacing={2}>
                    <Grid item >
                        <Typography variant="h2" classes={{ h2: "currentTemp"}}>
                            {`${current.main.temp.toFixed(1)}º`}
                        </Typography>
                        <Typography classes={{ h6: "feelsLike"}} variant="h6">
                            {`Feels like:  ${current.main.feels_like.toFixed(1)}º`}
                        </Typography>
                        <Typography classes={{ subtitle2: "humidity"}} variant="subtitle2">
                            {`Humidity: ${current.main.humidity} %`}
                        </Typography>
                    </Grid>
                </Grid>
                {/* <Grid item >
                    <Typography classes={{ subtitle2: "text"}} variant="subtitle2">
                        {`Humidity: ${current.main.humidity} %`}
                    </Typography>
                    
                    <Typography classes={{ body2: "text"}} variant="body2">
                        {current.main.main}
                    </Typography>
                </Grid> */}
            </Grid>
        ) : null}
       
    </CardContent>
    )
}
export default Today