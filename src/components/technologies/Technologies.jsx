import React from 'react';
// material-ui
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Box, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { lightBlue, grey }  from '@material-ui/core/colors';
// logos
import HTML5Logo from '../../assets/logos/html5-logo.png';
import CSSLogo from '../../assets/logos/css3-logo.png';
import JSLogo from '../../assets/logos/javascript-logo.png';
import PHPLogo from '../../assets/logos/php-logo.png';
import SASSLogo from '../../assets/logos/sass-logo.png';
import MongoDBLogo from '../../assets/logos/mongodb.png';
import ExpressLogo from '../../assets/logos/express-logo.png';
import ReactJSLogo from '../../assets/logos/react-logo.png';
import NodeJSLogo from '../../assets/logos/node-logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "1em"
  },
  headerContainer: {
    paddingTop: "2em !important",
  },
  headerText: {
    fontFamily: "Poppins",
    textAlign: "center",
    fontWeight: 600,
    margin: 0
  },
  underline: {
    textAlign: "center",
    height: "50px",
    padding: "0 !important",
    margin: "0 !important"
  },
  lineCenter: {
    display: "inline-block",
    borderTop: "4px solid",
    borderColor: lightBlue[900],
    height: "30px",
    width: "55px"
  },
  subHeader: {
    fontFamily: "Poppins",
    textAlign: "center",
    fontWeight: 400,
    padding: "1em 0"
  },
  logoLabel: {
    fontFamily: "Poppins",
    textAlign: "center",
    padding: 0,
    fontWeight: 500,
    color: grey[700]
  },
  img: {
    margin: "0 auto",
    padding: "1em 1em",
    width: 130,
    height: 130
  }, 
  hiddenAnchor: {
    position: "relative",
    top: "-120px"
  },
  gutter: {
    height: "1em",
    marginBottom: "1em"
  }
}));

const Technologies = () => {
  const classes = useStyles();

  return (
    <Container fixed className={classes.root}>
      <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
        {/* Header */}
        <Grid item xs={12} className={classes.headerContainer}>
          <Typography variant="h4" className={classes.headerText}>
            Technologies
          </Typography>
          <div id="technologies" className={classes.hiddenAnchor}></div>
        </Grid>
        
        <Grid item xs={12} className={classes.underline}>
          <span className={classes.lineCenter}></span>
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
                <Typography variant="subtitle1">
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
                <Typography variant="subtitle1">
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
                <Typography variant="subtitle1">
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
                <Typography variant="subtitle1">
                  PHP
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid> 

        {/* CSS Preprocessor */}
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.subHeader}>
            CSS Preproccesor
          </Typography>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3}>
            <Card className={classes.logoContainer}>
              <CardMedia component="img" image={SASSLogo} className={classes.img}/>
              <CardContent className={classes.logoLabel}>
                <Typography variant="subtitle1">
                  SASS
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        {/* Tech Stack */}
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.subHeader}>
            Tech Stack
          </Typography>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3}>
            <Card className={classes.logoContainer}>
              <CardMedia component="img" image={MongoDBLogo} className={classes.img}/>
              <CardContent className={classes.logoLabel}>
                <Typography variant="subtitle1">
                  MongoDB
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3}>
            <Card className={classes.logoContainer}>
              <CardMedia className={classes.img}> 
                <img src={ExpressLogo} height="21px" alt="Express Logo" style={{ marginTop: "45px" }} />
              </CardMedia>
              <CardContent className={classes.logoLabel}>
                <Typography variant="subtitle1">
                  Express
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3}>
            <Card className={classes.logoContainer}>
              <CardMedia component="img" image={ReactJSLogo} className={classes.img}/>
              <CardContent className={classes.logoLabel}>
                <Typography variant="subtitle1">
                  React JS
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3}>
            <Card className={classes.logoContainer}>
              <CardMedia className={classes.img}> 
                <img src={NodeJSLogo} height="28px" alt="Node JS Logo" style={{ marginTop: "35px" }} />
              </CardMedia>
              <CardContent className={classes.logoLabel}>
                <Typography variant="subtitle1">
                  Node JS
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.gutter} />
      </Grid>
    </Container>
  )
}

export default Technologies;