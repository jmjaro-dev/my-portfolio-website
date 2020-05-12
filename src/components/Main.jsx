import React from 'react';
import { Container, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// Components
import About from './about/About';
import Technologies from './technologies/Technologies';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

const Main = () => {
  const classes = useStyles();

  return (
    <Container fixed className={classes.root}>
      <About />
      <Divider />
      <Technologies />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
    </Container>
  )
}

export default Main;
