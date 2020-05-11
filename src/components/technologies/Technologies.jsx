import React from 'react';
// material-ui
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Box, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { grey }  from '@material-ui/core/colors';
// logos
import HTML5Logo from '../../assets/logos/html5-logo.png';
import CSSLogo from '../../assets/logos/css3-logo.png';
import JSLogo from '../../assets/logos/javascript-logo.png';
import PHPLogo from '../../assets/logos/php-logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "1em"
  },
  headerText: {
    fontFamily: "Poppins",
    textAlign: "center",
    fontWeight: 600,
    padding: "1em 0"
  },
  subHeader: {
    fontFamily: "Poppins",
    textAlign: "center",
    fontWeight: 400
  },
  logoLabel: {
    fontFamily: "Poppins",
    textAlign: "center",
    paddingTop: "0.5em",
    fontWeight: 500,
    color: grey[700]
  },
  img: {
    margin: "0 auto",
    padding: "1em 1em",
    width: 130,
    height: 130
  }
}));

const Technologies = () => {
  const classes = useStyles();

  return (
    <Container fixed className={classes.root}>
      <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
        {/* Header */}
        <Grid item xs={12} >
          <Typography variant="h4" className={classes.headerText}>
            Technologies
          </Typography>
        </Grid>

        {/* Languages */}
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.subHeader}>
            Languages
          </Typography>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3}>
            <Card className={classes.logoContainer}>
              <CardMedia component="img" image={HTML5Logo} className={classes.img}/>
              <CardContent className={classes.logoLabel}>
                <Typography variant="subheader1">
                  HTML5
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3}>
            <Card className={classes.logoContainer}>
              <CardMedia component="img" image={CSSLogo} className={classes.img}/>
              <CardContent className={classes.logoLabel}>
                <Typography variant="subheader1">
                  CSS3
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3}>
            <Card className={classes.logoContainer}>
              <CardMedia component="img" image={JSLogo} className={classes.img}/>
              <CardContent className={classes.logoLabel}>
                <Typography variant="subheader1">
                  Vanilla JS
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3}>
            <Card className={classes.logoContainer}>
              <CardMedia component="img" image={PHPLogo} className={classes.img}/>
              <CardContent className={classes.logoLabel}>
                <Typography variant="subheader1">
                  PHP
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid> 

        {/* CSS Preprocessor */}
        <Grid item xs={12} sm={8} md={7}>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Technologies;