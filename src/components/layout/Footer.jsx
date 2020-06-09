import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { grey }  from '@material-ui/core/colors';
// brand-logo
import Logo from '../../assets/logos/brand-logo.png'

const Footer = () => {
  return (
    <div style={{ height: 200, padding: 0 }}>
      <Container>
        <Grid container style={{  paddingTop: "5em", height: "100%" }}>
          <Grid item xs={12} style={{ color: grey[900], textAlign: "center", padding: "auto" }}>
            <Typography variant="subtitle2" style={{ marginBottom: "1em" }}>
              Created by 
            </Typography>
            <Typography >
              <img src={Logo} alt="Jerome Mico Jaropojop | Web Developer" height="55px" />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer;
