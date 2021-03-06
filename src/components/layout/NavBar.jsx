import React, { useState } from 'react';
// react-scroll
import { Link } from "react-scroll";
// material-ui/styles
import {  makeStyles } from '@material-ui/core/styles';
// material-ui/core
import { 
  AppBar,
  Avatar,
  Button,
  Container, 
  Drawer,
  Divider,
  Hidden,
  IconButton, 
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography, 
  useScrollTrigger 
} from '@material-ui/core';
// material-ui/icons
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SchoolIcon from '@material-ui/icons/School';
// material-ui/colors
import { lightBlue, grey } from '@material-ui/core/colors';
// brand-logo
import Logo from '../../assets/logos/brand-logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    color: lightBlue[900]
  },
  title: {
    flexGrow: 1,
    padding: "0.5em 0 0.3em 0"
  },
  navBar: {
    backgroundColor: "#fff"
  },
  navLinks: {
    color: "#000",
    textDecoration: "none",
    "&:hover": {
      color: lightBlue[900],
      textDecoration: "none",
      transition: "0.3s ease-in"
    }
  },
  icon: {
    marginRight: theme.spacing(3)
  },
  links: {
    color: grey[800],
    textDecoration: "none",
    "&.active": {
      backGroundColor: lightBlue[800],
      textDecoration: "none",
      transition: "0.3s ease-in"
    },
    "&:hover": {
      color: lightBlue[800],
      textDecoration: "none",
      transition: "0.3s ease-in"
    }
  },
  mainList : {
    display: "inline-block",
    float: "right",
    '& li': {
      display: "inline"
    }
  },
  list: {
    width: "100vw",
  },
  appSideBarIcon: {
    marginRight: theme.spacing(3),
    color: lightBlue[900]
  },
  sideBarLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  sideBarCloseIcon: {
    position: "absolute",
    right: 10
  },
  sideBarIcon: {
    backgroundColor: lightBlue[800],
    color: "#fff" 
  },
  sideBarLink: {
    color: lightBlue[900]
  }
}));

const ElevationScroll = props => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const NavBar = props => {
  const [state, setState] = useState(false);
  const classes = useStyles();

  const MainNavListItemLink = props => {

    const closeDrawer = () => {
      setState(false);
    };
  
    return (
      <Link
        activeClass="activeLink"
        to={props.href}
        spy={true}
        hashSpy={true}
        smooth={true}
        offset={-55}
        duration= {800}
        onClick={closeDrawer}
        className={classes.links}
        {...props}
      >
        <ListItem {...props}/>
      </Link>
    );
  }

  const ListItemLink = props => {

    const closeDrawer = () => {
      setState(false);
    };
  
    return (
      <Link
        activeClass="active"
        to={props.href}
        spy={true}
        hashSpy={true}
        smooth={true}
        offset={-70}
        duration= {800}
        onClick={closeDrawer}
        className={classes.links}
        {...props}
      >
        <ListItem {...props}/>
      </Link>
    );
  }

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  
    setState(open);
  };
  
  const mainNav = () => (
    <List className={classes.mainList}>
      <MainNavListItemLink href="aboutme" >
        <Button className={classes.navLinks} >
          About Me
        </Button>
      </MainNavListItemLink>
      <MainNavListItemLink href="technologies" >
        <Button className={classes.navLinks} >
          Technologies
        </Button>
      </MainNavListItemLink>
      <MainNavListItemLink href="trainings" >
        <Button className={classes.navLinks} >
          Trainings
        </Button>
      </MainNavListItemLink>
      <MainNavListItemLink href="projects" >
        <Button className={classes.navLinks} >
          Projects
        </Button>
      </MainNavListItemLink>
      <MainNavListItemLink href="contactme" >
        <Button className={classes.navLinks} >
          Contact Me
        </Button>
      </MainNavListItemLink>
    </List>
  )

  const mobileNav = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItemLink className={classes.sideBarLogo}>
          <img src={Logo} alt="Jerome Mico Jaropojop | Web Developer" height="55px" />
          <IconButton className={classes.sideBarCloseIcon}>
            <CloseIcon />
          </IconButton>
        </ListItemLink>
        <Divider/>
        <ListItemLink href="aboutme" >
          <ListItemIcon>
            <Avatar className={classes.sideBarIcon}>
              <InfoIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText className={classes.links}>
            About Me
          </ListItemText>
        </ListItemLink>
        <ListItemLink href="technologies" >
          <ListItemIcon>
            <Avatar className={classes.sideBarIcon}>
              <CodeIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText className={classes.links}>
            Technologies
          </ListItemText>
        </ListItemLink>
        <ListItemLink href="trainings" >
          <ListItemIcon>
            <Avatar className={classes.sideBarIcon}>
              <SchoolIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText className={classes.links}>
            Trainings
          </ListItemText>
        </ListItemLink>
        <ListItemLink href="projects" >
          <ListItemIcon>
            <Avatar className={classes.sideBarIcon}>
              <DashboardIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText className={classes.links}>
            Projects
          </ListItemText>
        </ListItemLink>
        <ListItemLink href="contactme" >
          <ListItemIcon>
            <Avatar className={classes.sideBarIcon}>
              <MailOutlineIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText className={classes.links}>
            Contact Me
          </ListItemText>
        </ListItemLink>
      </List>
    </div>
  )
  
  return (
    <div className={classes.root}>
      <ElevationScroll {...props} >
        <AppBar className={classes.navBar}>
          <Container>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                <img src={Logo} alt="Jerome Mico Jaropojop | Web Developer" height="55px" />
              </Typography>
              <Hidden only={[ 'xs', 'sm' ]}>
                {mainNav()}  
              </Hidden>
              <Hidden only={[ 'md', 'lg' ]}>
                <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                  <MenuIcon />
                </IconButton>
                <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
                  {mobileNav()}
                </Drawer>  
              </Hidden>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </div>
  )
}

export default NavBar;