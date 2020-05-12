import React from 'react';
// material-ui
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { lightBlue, grey }  from '@material-ui/core/colors';
// icons
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import CallIcon from '@material-ui/icons/Call';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  icon: {
    color: lightBlue[900],
  },
  links: {
    fontFamily: "Poppins",
    color: grey[900],
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
  contactInfo: {
    fontFamily: "Poppins",
    fontWeight: 500,
    padding: "1em",
    borderRadius: "10px"
    
  },
  mobileNetwork: {
    marginLeft: "0.5em",
    fontSize: "0.8em",
    color: lightBlue[900]
  },
  gutter: {
    height: "1em",
    marginBottom: "1em"
  }
}));

const Contact = () => {
  const classes = useStyles();
  
  return (
    <Container fixed className={classes.root}>
      <Grid container spacing={3} direction="row" justify="center" alignItems="center" className={classes.container}>
        {/* Header */}
        <Grid item xs={12} className={classes.headerContainer}>
          <Typography id="contactme" variant="h4" className={classes.headerText}>
            Contact Me
          </Typography>
        </Grid>
        
        <Grid item xs={12} className={classes.underline}>
          <span className={classes.lineCenter}></span>
        </Grid>
        
        {/* Contact Details */}
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12}>
            <Box boxShadow={3} className={classes.contactInfo}>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem>
                  <ListItemIcon>
                    <AlternateEmailIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText> 
                    <a href="mailto:jmjaropojop92@gmail.com" className={classes.links} target="_blank" rel="noopener noreferrer">jmjaropojop92@gmail.com</a>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LinkedInIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText> 
                    <a href="https://www.linkedin.com/in/jerome-mico-jaropojop-142350171" className={classes.links} target="_blank" rel="noopener noreferrer">Jerome Mico Jaropojop</a>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CallIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText> 
                    <span>+63929-308-7991</span> {' '} 
                    <span className={classes.mobileNetwork}>[SMART]</span>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GitHubIcon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText> 
                    <a href="https://github.com/jmjaro-dev" className={classes.links} target="_blank" rel="noopener noreferrer">jmjaro-dev</a>
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      
        <Grid item xs={12} className={classes.gutter} />
      </Grid>
    </Container>
  )
}

export default Contact;