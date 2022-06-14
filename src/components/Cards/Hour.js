import React from 'react';
import moment from 'moment';

//Material
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

//CSS
import '../styles/Hour.css';

function Hour({hour}) {
  return (
    <Grid container className="hours" spacing={2}>
        <Grid item xs={2}>
          <Typography classes={{ body2: "text"}} variant="body2">
            {moment(hour.dt_txt).format("LT")}
          </Typography>
        </Grid>
        <Grid classes={{ root: "temperature"}} item xs={4}>
          <Typography  variant="h6">
            {`${hour.main.temp_max.toFixed(1)}º / `}
          </Typography>
          <Typography classes={{ body2: "text"}} variant="body2">
            {` ${hour.main.temp_min.toFixed(1)}º`}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography classes={{ body2: "text"}} variant="body2">
            {`${hour.main.humidity} %`}
          </Typography>
        </Grid>
        <Grid classes={{ root: "icon"}} item xs={2}>
          <img 
            src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
            width="45" 
            height="45" 
            alt="" 
          />
        </Grid>
        <Grid className="icon" item xs={2}>
          <Typography classes={{ body2: "text"}} variant="body2">
            {hour.weather[0].main}
          </Typography>
        </Grid>
      </Grid>
  );
};
export default Hour