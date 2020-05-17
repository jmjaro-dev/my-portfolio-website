import React from 'react';
import { Container, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// Components
import About from './about/About';
import Technologies from './technologies/Technologies';
import Projects from './projects/Projects';
import Trainings from './trainings/Trainings';
import Contact from './contact/Contact';
import Footer from './layout/Footer';
// react-scroll
import { Element } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div>
      <Container fixed className={classes.root}>
        <Element name="aboutme">
          <About />
        </Element>
        <Divider />
        <Element name="technologies">
          <Technologies />
        </Element>
        <Divider />
        <Element name="projects">
          <Projects />
        </Element>
        <Divider />
        <Element name="trainings">
          <Trainings />
        </Element>
        <Divider />
      </Container>
      <Element name="contactme">
        <Contact />
        <Footer />
      </Element>  
    </div>
  )
}

export default Main;
