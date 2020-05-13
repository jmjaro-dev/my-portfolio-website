import sr from './scrollReveal';

const projects = () => {

  // animations
  const headers = {
    opacity: 0,
    distance: "50px",
    origin: "bottom",
    easing: "ease-in-out",
    duration: 500,
    reset: true
  }

  const projects = {
    opacity: 0,
    distance: "50px",
    origin: "bottom",
    easing: "ease-in-out",
    duration: 800,
    delay: 500,
    reset: true
  }

  sr.reveal("#projectsHeader", headers);  
  sr.reveal("#projectsLine", headers);
  sr.reveal(".projects", projects);
}

export default projects;