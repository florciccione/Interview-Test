import React from 'react';
import moment from 'moment';

//Material
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

//CSS
import '../styles/NextDay.css';

//Components
import Hour from "./Hour";

function NextDay({day}) {
  return (
    <CardContent classes={{ root: "next"}}>
      <Typography classes={{ h6: "dayTitle"}} variant="h6">
        {moment(day[0].dt_txt).format("LL")}
      </Typography>
      {day ? day.map((hour, index) => (
        <Hour key={index} hour={hour} />
      )) : null}
    </CardContent>
  );
};
export default NextDay