import React from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div id="container" className="sm:p-4 md:p-8 lg:p-10 container mx-auto relative">
      <Grid container spacing={3} justify="center">
        <CardComponent
        id="infected"
          className=""
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
        id="recovered"
          className=""
          cardTitle="Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
        id="deaths"
          className=""
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;