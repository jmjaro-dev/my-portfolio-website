import React, { useState } from 'react';
// font-awesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// material-ui/styles
import {  makeStyles } from '@material-ui/core/styles';
// material-ui/core
import { 
  AppBar,
  Avatar, 
  Toolbar, 
  Drawer, 
  Divider, 
  List,
  ListItem,
  ListItemIcon,
  ListItemText, 
  Typography, 
  IconButton 
} from '@material-ui/core';
// material-ui/icons
import MenuIcon from '@material-ui/icons/Menu';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/Dashboard';
// import GitHubIcon from '@material-ui/icons/GitHub';
// material-ui/colors
import { lightBlue } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor: lightBlue[900]
    // background: "linear-gradient(90deg, rgba(2,9,15,1) 0%, rgba(0,73,130,1) 64%)"
  },
  icon: {
    marginRight: theme.spacing(3)
  },
  list: {
    width: 320,
  },
  appTitle: {

  },
  appSideBarIcon: {
    marginRight: theme.spacing(3),
    color: lightBlue[900]
  },
  sideBarIcon: {
    backgroundColor: lightBlue[800],
    color: "#fff"
    
  },
  sideBarLink: {
    color: lightBlue[900]
  }
}));

const NavBar = () => {
  const [state, setState] = useState(false);

  const classes = useStyles();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  
    setState(open);
  };
  
  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <ListItemText>
            <h2>
              JMJ | Web Developer
            </h2>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <Avatar className={classes.sideBarIcon}>
              <InfoIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="About Me"/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Avatar className={classes.sideBarIcon}>
              <CodeIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="Technologies"/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Avatar className={classes.sideBarIcon}>
              <DashboardIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="My Works"/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Avatar className={classes.sideBarIcon}>
              <MailOutlineIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="Contact Me"/>
        </ListItem>
      </List>
    </div>
  )
  
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            JMJ | Web Developer
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;