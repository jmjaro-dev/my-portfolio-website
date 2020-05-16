import sr from './scrollReveal';

const contact = () => {

  // animations
  const headers = {
    opacity: 0,
    distance: "50px",
    origin: "bottom",
    easing: "ease-in-out",
    duration: 500,
    reset: true
  }

  const card = {
    opacity: 0,
    distance: "50px",
    origin: "bottom",
    easing: "ease-in-out",
    delay: 300,
    duration: 500,
    reset: true
  }

  const contacts = {
    opacity: 0,
    distance: "50px",
    origin: "bottom",
    easing: "ease-in-out",
    duration: 800,
    delay: 500,
    interval: 300,
    reset: true
  }

  sr.reveal("#contactHeader", headers);  
  sr.reveal("#contactLine", headers);
  sr.reveal("#contactCard", card);
  sr.reveal(".contacts", contacts);
}

export default contact;