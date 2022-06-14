import React, {useMemo} from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

//CSS
import './HomePage.css';

//Material
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Components
import Nav from '../components/Nav';
import Today from "../components/Today";
import NextDay from "../components/NextDay";

function HomePage() {
  const { list: cityWeather, city: cityName, current } = useSelector(state => state.weather);

  const listPerDay = useMemo(() => {
    let newList = []
    cityWeather.forEach(day => {
      if(!newList.hasOwnProperty(moment(day.dt_txt).format("D"))){
        newList[moment(day.dt_txt).format("D")] = [day];
      } else {
        newList[moment(day.dt_txt).format("D")].push(day);
      };
    });
    return newList;
   }, [cityWeather])

  const date = moment().format("LL");

  return (
    <>
      <Nav />
      <Grid container classes={{ root: "card_container"}} justifyContent="center">
        {cityName && cityWeather ? (
          <Card classes={{ root: "card"}}>
            <Typography classes={{ h3: "title"}} variant="h3">
              {cityName}
            </Typography>
            <Typography classes={{ body2: "date"}} variant="body2">
              {date}
            </Typography>
          {current ? <Today current={current}/> : null}
          {listPerDay ? listPerDay.map((day,index)=>(
            <NextDay key={index} day={day}/>
         )) : null}
       </Card>
       ) : null}
      </Grid>
    </>
  );
};

export default HomePage;