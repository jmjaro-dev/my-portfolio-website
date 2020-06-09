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
import FirebaseLogo from '../../assets/logos/firebase-logo.png';
import MySQLLogo from '../../assets/logos/mysql-logo.png';
import PostgreSQLLogo from '../../assets/logos/postgresql-logo.png';
import ExpressLogo from '../../assets/logos/express-logo.png';
import ReactJSLogo from '../../assets/logos/react-logo.png';
import NodeJSLogo from '../../assets/logos/node-logo.png';
import MUILogo from '../../assets/logos/material-ui-logo.png';
import MaterializeCSSLogo from '../../assets/logos/materializecss-logo.png';
import TailwindCSSLogo from '../../assets/logos/tailwind-logo.png';
import BootstrapLogo from '../../assets/logos/bootstrap-logo.png';
import InsomniaLogo from '../../assets/logos/insomnia-logo.png';
import PostmanLogo from '../../assets/logos/postman-logo.jpeg';
import FigmaLogo from '../../assets/logos/figma-logo.png';
import IllustratorLogo from '../../assets/logos/adobe-illustrator-logo.png';
import VSCodeLogo from '../../assets/logos/vs-code-logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "2em",
    paddingBottom: "3em"
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
    display: "flex",
    margin: "0 auto",
    padding: "1em 1em",
    width: 130,
    height: 130,
    justifyContent: "center",
    aligntItems: "center"
  },
  img1: {
    margin: "0 auto",
    padding: "1em 1em",
    width: 100,
    height: 130
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
          <Typography variant="h4" className={classes.headerText} id="techHeader">
            Technologies
          </Typography>
        </Grid>
        
        <Grid item xs={12} className={classes.underline} id="techLine">
          <span className={classes.lineCenter}></span>
        </Grid>

        {/* Core Languages */}
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.subHeader} id="languagesHeader">
            Core Languages
          </Typography>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3} className="items">
            <Card className={classes.logoContainer}>
              <CardMedia component="img" image={HTML5Logo} className={classes.img} />
              <CardContent className={classes.logoLabel}>
                <Typography variant="subtitle1">
                  HTML5
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3} className="items">
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
          <Box boxShadow={3} className="items">
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
          <Box boxShadow={3} className="items">
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
          <Typography variant="h6" className={classes.subHeader} id="CSSHeader">
            CSS Preproccesor
          </Typography>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3} className="items">
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

        {/* Front-end Frameworks or Libraries */}
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.subHeader} id="frontEndHeader">
            Front-end Framework/Library
          </Typography>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3} className="items">
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

        {/* Back-end Languages */}
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.subHeader} id="backEndHeader">
            Back-end Languages
          </Typography>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3} className="items">
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
          <Box boxShadow={3} className="items">
            <Card className={classes.logoContainer}>
              <CardMedia component="img" image={FirebaseLogo} className={classes.img}/>
              <CardContent className={classes.logoLabel}>
                <Typography variant="subtitle1">
                  Firebase
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3} className="items">
            <Card className={classes.logoContainer}>
              <CardMedia className={classes.img}> 
                <img src={MySQLLogo} height="65px" alt="MySQL Logo" style={{ marginTop: "25px" }} />
              </CardMedia>
              <CardContent className={classes.logoLabel}>
                <Typography variant="subtitle1">
                  MySQL
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3} className="items">
            <Card className={classes.logoContainer}>
              <CardMedia component="img" image={PostgreSQLLogo} className={classes.img}/>
              <CardContent className={classes.logoLabel}>
                <Typography variant="subtitle1">
                  PostgreSQL
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        {/* CSS Frameworks */}
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.subHeader} id="cssFrameworkHeader">
            CSS Frameworks
          </Typography>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3} className="items">
            <Card className={classes.logoContainer}>
              <CardMedia component="img" image={MUILogo} className={classes.img} />
              <CardContent className={classes.logoLabel}>
                <Typography variant="subtitle1">
                  Material-UI
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3} className="items">
            <Card className={classes.logoContainer}>
              <CardMedia className={classes.img}> 
                <img src={MaterializeCSSLogo} height="50px" alt="Materialize CSS Logo" style={{ marginTop: "25px" }} />
              </CardMedia>
              <CardContent className={classes.logoLabel}>
                <Typography variant="subtitle1">
                  MaterializeCSS
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3} className="items">
            <Card className={classes.logoContainer}>
              <CardMedia className={classes.img}> 
                <img src={TailwindCSSLogo} height="45px" alt="Tailwind CSS Logo" style={{ marginTop: "30px", marginLeft: "15px"}} />
              </CardMedia>
              <CardContent className={classes.logoLabel}>
                <Typography variant="subtitle1">
                  Tailwind
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3} className="items">
            <Card className={classes.logoContainer}>
              <CardMedia component="img" image={BootstrapLogo} className={classes.img}/>
              <CardContent className={classes.logoLabel}>
                <Typography variant="subtitle1">
                  Bootstrap
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid> 
        
        {/* REST API Clients */}
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.subHeader} id="APIClientsHeader">
            API Clients
          </Typography>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3} className="items">
            <Card className={classes.logoContainer}>
              <CardMedia component="img" image={InsomniaLogo} className={classes.img}/>
              <CardContent className={classes.logoLabel}>
                <Typography variant="subtitle1">
                  Insomnia
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3} className="items">
            <Card className={classes.logoContainer}>
              <CardMedia component="img" image={PostmanLogo} className={classes.img}/>
              <CardContent className={classes.logoLabel}>
                <Typography variant="subtitle1">
                  Postman
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        
        {/* UI/UX Design Tools */}
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.subHeader} id="UIUXHeader">
            UI/UX Design Tools
          </Typography>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3} className="items">
            <Card className={classes.logoContainer}>
              <CardMedia className={classes.img}> 
                <img src={FigmaLogo} height="100px" alt="Figma Logo" style={{ padding: "0 auto"}} />
              </CardMedia>
              <CardContent className={classes.logoLabel}>
                <Typography variant="subtitle1">
                  Figma
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        
        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3} className="items">
            <Card className={classes.logoContainer}>
              <CardMedia component="img" image={IllustratorLogo} className={classes.img}/>
              <CardContent className={classes.logoLabel}>
                <Typography variant="subtitle1">
                  Adobe Illustrator
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        
        {/* Code Editor */}
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.subHeader} id="codeEditorHeader">
            Code Editor
          </Typography>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3} className="items">
            <Card className={classes.logoContainer}>
              <CardMedia component="img" image={VSCodeLogo} className={classes.img}/>
              <CardContent className={classes.logoLabel}>
                <Typography variant="subtitle1">
                  VS Code
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        {/* Tech Stack */}
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.subHeader} id="stackHeader">
            Tech Stack
          </Typography>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Box boxShadow={3} className="items">
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
          <Box boxShadow={3} className="items">
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
          <Box boxShadow={3} className="items">
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
          <Box boxShadow={3} className="items">
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