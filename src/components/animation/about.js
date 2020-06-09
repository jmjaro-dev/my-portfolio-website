import sr from './scrollReveal';

const about = () => {
  
  // animations
  const headers = {
    opacity: 0,
    distance: "50px",
    origin: "bottom",
    easing: "ease-in-out",
    duration: 500,
    reset: true
  }

  const introtext = {
    opacity: 0,
    distance: "50px",
    origin: "bottom",
    easing: "ease-in-out",
    duration: 800,
    delay: 300,
    reset: true
  }
  
  const name = {
    opacity: 0,
    distance: "50px",
    origin: "right",
    easing: "ease-in-out",
    duration: 600,
    delay: 800,
    reset: true
  }

  const photo = {
    opacity: 0,
    distance: "80px",
    origin: "top",
    duration: 1200,
    delay: 300,
    reset: true
  }

  const title = {
    opacity: 0,
    distance: "80px",
    origin: "left",
    easing: "ease-in-out",
    duration: 800,
    delay: 1200,
    reset: true
  }

  const desc = {
    opacity: 0,
    distance: "50px",
    origin: "right",
    duration: 800,
    delay: 1700,
    reset: true
  }

  const resume = {
    opacity: 0,
    distance: "50px",
    origin: "right",
    duration: 600,
    delay: 1700,
    reset: true
  }

  sr.reveal("#aboutHeader", headers);  
  sr.reveal("#aboutLine", headers);
  sr.reveal("#introText", introtext);
  sr.reveal("#introName", name);
  sr.reveal("#mypic", photo);
  sr.reveal("#introTitle", title);
  sr.reveal("#introDesc", desc);
  sr.reveal("#cvButton", resume);
}

export default about;