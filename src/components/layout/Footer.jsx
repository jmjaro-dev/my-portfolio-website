import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { grey }  from '@material-ui/core/colors';

const Footer = () => {
  return (
    <div style={{  backgroundColor: grey[800], height: 200, padding: 0 }}>
      <Container>
        <Grid container style={{  paddingTop: "5em", height: "100%" }}>
          <Grid item xs={12} style={{ color: "#fff", textAlign: "center", padding: "auto" }}>
            <Typography >
              JMJ | Web Developer
            </Typography>
            <Typography >
              &copy; Copyright 2020
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer;
