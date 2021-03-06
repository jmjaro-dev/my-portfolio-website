import React from 'react';
// material-ui
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { lightBlue, grey }  from '@material-ui/core/colors';
// image
import photo from '../../assets/img/photo.jpg';
// CV
import CV from '../../assets/docs/JAROPOJOP-JEROME-MICO.docx'
// download icon
import SaveAltIcon from '@material-ui/icons/SaveAlt';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "1em",
    paddingBottom: "3em"
  },
  headerContainer: {
    paddingTop: "6em !important",
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
  imgContainer: {
    margin: "0 auto",
    width: "100%",
    height: "100%"
  },
  roundContainer: {
    margin: "0 auto",
    borderRadius: "50%",
    maxHeight: 230,
    maxWidth: 230,
  },
  img: {
    maxHeight: 230,
    maxWidth: 230
  },
  introContainer: {
    padding: "1.5em 0.5em"
  },
  introText: {
    color: grey[500],
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: '1.2em',
    "& span": {
      color: grey[800]
    }
  },
  introName: {
    color: lightBlue[900],
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "1.43em",
    lineHeight: "1.3em",
    paddingTop: "0.8em"
  },
  introTitle: {
    color: grey[500],
    fontSize: "0.9em",
    fontFamily: "Poppins",
    fontWeight: 400
  },
  introDescription: {
    color: grey[800],
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "1em",
    paddingTop: "1em",
    lineHeight: "1.8em",
    textAlign: "justify"
  },
  downloadCV: {
    color: lightBlue[900],
    borderColor: lightBlue[900],
    marginTop: "1.5em",
    '&:hover': {
      color: lightBlue[900]
    }
  }
}));

const About = () => {
  const classes = useStyles();

  return (
    <Container fixed className={classes.root}>
      <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
        {/* Header */}
        <Grid item xs={12} className={classes.headerContainer} id="aboutme">
          <Typography variant="h4" className={classes.headerText} id="aboutHeader">
            About Me
          </Typography>
        </Grid>
        
        <Grid item xs={12} className={classes.underline} id="aboutLine">
          <span className={classes.lineCenter}></span>
        </Grid>

        {/* Photo */}
        <Grid item xs={12} sm={4} md={5} className={classes.imgContainer} >
          <Box boxShadow={3} className={classes.roundContainer} id="mypic">
            <Card className={classes.roundContainer}>
              <CardMedia component="img" image={photo} className={classes.img}/>
            </Card>
          </Box>
        </Grid>

        {/* Introduction */}
        <Grid item xs={12} sm={8} md={7}>
          <Box className={classes.introContainer}>
            {/* Hello */}
            <Typography variant="body1" gutterBottom className={classes.introText} id="introText">
              <span> Hello</span>, I am
            </Typography>
            {/* Name */}
            <Typography variant="h5" className={classes.introName} id="introName">
              Jerome Mico S. Jaropojop
            </Typography>
            {/* Title */}
            <Typography variant="subtitle1" gutterBottom className={classes.introTitle} id="introTitle">
              Web Developer
            </Typography>
            <Typography variant="body1" className={classes.introDescription} id="introDesc" gutterBottom>
            A Web Developer that is comfortable with front-end or back-end development. I'm a fast-learner, goal-oriented, and self-motivated indiviual that is seeking for a position that will utilize my knowledge and skills in an environment that encourages innovative thinking and professional growth.
            </Typography>
            <Button  
              id="cvButton"
              className={classes.downloadCV}
              variant="outlined"
              startIcon={<SaveAltIcon />}
              href={CV}
            >
              Resume / CV
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About;