import React from 'react';
// material-ui
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Box, Card, CardMedia, CardContent, Chip, Typography } from '@material-ui/core';
import { lightBlue, grey }  from '@material-ui/core/colors';
// Projects Info
import { projectsData } from './projectsData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  container: {
    maxWidth: 780
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  img: {
    height: "auto"
  },
  links: {
    fontFamily: "Poppins",
    color: "#333",
    textDecoration: "none",
    "&:hover": {
      color: lightBlue[900]
    }
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
    fontWeight: 500,
    padding: "1em 0"
  },
  chipList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    marginTop: "1em"
  },
  chip: {
    fontSize: '0.7em',
    color: "#fff",
    backgroundColor: lightBlue[900],
    margin: theme.spacing(0.5),
  },
  desc: {
    color: grey[700],
    fontSize: "0.9em",
    textAlign: "justify",
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

const Projects = () => {
  const classes = useStyles();
  
  return (
    <Container fixed className={classes.root}>
      <Grid container spacing={3} direction="row" justify="center" alignItems="center" className={classes.container}>
        {/* Header */}
        <Grid item xs={12} className={classes.headerContainer}>
          <Typography variant="h4" className={classes.headerText}>
            Projects
          </Typography>
          <div id="projects" className={classes.hiddenAnchor}></div>
        </Grid>
        
        <Grid item xs={12} className={classes.underline}>
          <span className={classes.lineCenter}></span>
        </Grid>
        
        {/* Projects */}
        <Grid container spacing={2} >
          {projectsData.map(data => (
            <Grid item xs={12} sm={12} md={6} key={data.title}>
              <Card className={classes.logoContainer} variant="outlined">
                <CardMedia component="img" image={data.img} className={classes.img}/>
                <CardContent className={classes.logoLabel}>
                  <Typography variant="subtitle1" className={classes.subHeader}>
                    <a href={data.url} className={classes.links} target="_blank" rel="noopener noreferrer">
                      {data.title}
                    </a>
                  </Typography>
                  <Typography variant="body1" className={classes.desc} gutterBottom>
                    {data.desc}
                  </Typography>
                  <Box component="ul" className={classes.chipList}>
                    {data.technologies.map((tech, index) => {
                      return (
                        <li key={index}>
                          <Chip
                            size="small" 
                            label={tech} 
                            className={classes.chip}/>
                        </li>
                      )
                    })}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} className={classes.gutter} />
      </Grid>
    </Container>
  )
}

export default Projects;