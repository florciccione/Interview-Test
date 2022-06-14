import React from 'react';

//Material
import Typography from '@mui/material/Typography';

//CSS
import './styles/CityNotFound.css';

function CityNotFound() {
  return (
    <Typography variant="h5">
      We couldn't find that city or it doesn't exist, please try another one
    </Typography>
  );
};

export default CityNotFound;