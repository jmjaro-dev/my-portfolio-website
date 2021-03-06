import React, { useState } from 'react';
// material-ui
import { makeStyles } from '@material-ui/core/styles';
import { 
  Box, 
  Container, 
  Card, 
  CardActionArea, 
  CardMedia, 
  CardContent, 
  Chip,
  Divider, 
  Grid, 
  Typography 
} from '@material-ui/core';
import { green, lightBlue, grey }  from '@material-ui/core/colors';
import Skeleton from '@material-ui/lab/Skeleton';
// Projects Info
import { projectsData } from './projectsData';
// imgModal
import ImgModal from '../layout/ImgModal'; 
// Github Icon
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingTop: "2em",
    paddingBottom: "3em"
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
  imgModal: {
    position: 'absolute',
    top: 50,
    left: 50,
    transform: 'translate(-50, -50)'
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
  repository: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1em auto"
  },
  githubIcon: {
    marginRight: "0.5em"
  },
  repositoryLink: {
    fontFamily: "Poppins",
    fontSize: "0.8em",
    color: "#333",
    textDecoration: "none",
    "&:hover": {
      color: lightBlue[900]
    }
  },
  desc: {
    color: grey[700],
    fontSize: "0.9em",
    textAlign: "justify",
    marginBottom: "1em"
  },
  statusContainer: {
    float: "right",
    paddingTop: "0.2em",
  },
  statusText: {
    fontSize: "0.8em",
    color: green[600]
  },
  indicator_online: {
    display: "inline-block",
    width: 10,
    height: 10,
    marginRight: "0.5em",
    borderRadius: "50%",
    backgroundColor: green[600]
  },
  gutter: {
    height: "1em",
    marginBottom: "1em"
  }
}));

const Projects = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [imgUrl, setImageUrl] = useState(null);
  
  const handleOpen = e => {
    e.preventDefault();
    setImageUrl(e.target.src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container fixed className={classes.root}>
      <Grid container spacing={3} direction="row" justify="center" alignItems="center" className={classes.container}>
        <ImgModal url={imgUrl} open={open} handleClose={handleClose} className={classes.imgModal} />
        {/* Header */}
        <Grid item xs={12} className={classes.headerContainer}>
          <Typography variant="h4" className={classes.headerText} id="projectsHeader">
            Projects
          </Typography>
        </Grid>
        
        <Grid item xs={12} className={classes.underline} id="projectsLine">
          <span className={classes.lineCenter}></span>
        </Grid>
          
        {/* Projects */}
        <Grid container spacing={2} >
          {projectsData.map(data => (
            <Grid item xs={12} sm={12} md={6} key={data.title} className="projects">
              <Card className={classes.logoContainer} variant="outlined">
                <CardActionArea onClick={handleOpen}>
                  <CardMedia component="img" image={data.img} className={classes.img}/>
                </CardActionArea>
                <CardContent className={classes.logoLabel}>
                  <Typography variant="subtitle1" className={classes.subHeader}>
                    <a href={data.url} className={classes.links} target="_blank" rel="noopener noreferrer">
                      {data.title}
                    </a>

                    <a href={data.url} target="_blank" rel="noopener noreferrer" className={classes.statusText}>
                      <Skeleton variant="rect" className={classes.statusContainer} >
                        <span className={data.status === "Online" ? classes.indicator_online : classes.indicator_dev } />
                        {data.status}
                      </Skeleton>
                    </a>
                  </Typography>

                  <Typography variant="body1" className={classes.desc} gutterBottom>
                    {data.desc}
                  </Typography>

                  <Divider />

                  <Typography variant="body1" className={classes.repository}>
                    <GitHubIcon fontSize="small" className={classes.githubIcon} /> 
                    <a href={data.repository} className={classes.repositoryLink} target="_blank" rel="noopener noreferrer">Repository Link Here</a>
                  </Typography>
                  
                  <Divider />
                  
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