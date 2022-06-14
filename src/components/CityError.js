import React from 'react';

//Material
import Typography from '@mui/material/Typography';

//CSS
import './styles/CityNotFound.css';

function CityError() {
  return (
    <Typography variant="h5">
      Sorry, an error occurred please try again in a few minutes
    </Typography>
  );
};
export default CityError;