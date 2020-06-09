import React, { useEffect } from 'react';
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
// Page Animations
import about from './animation/about';
import technologies from './animation/technologies';
import trainings from './animation/trainings';
import projects from './animation/projects';
import contact from './animation/contact';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

const Main = () => {
  useEffect(() => {
    about();
    technologies();
    trainings();
    projects();
    contact();
  }, []);

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
        <Divider />
        <Element name="trainings">
          <Trainings />
        </Element>
        <Element name="projects">
          <Projects />
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
