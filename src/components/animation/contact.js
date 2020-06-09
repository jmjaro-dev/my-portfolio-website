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
    delay: 200,
    duration: 500,
    reset: true
  }

  const contacts = {
    opacity: 0,
    distance: "50px",
    origin: "bottom",
    easing: "ease-in-out",
    duration: 600,
    delay: 300,
    interval: 200,
    reset: true
  }

  sr.reveal("#contactHeader", headers);  
  sr.reveal("#contactLine", headers);
  sr.reveal("#contactCard", card);
  sr.reveal(".contacts", contacts);
}

export default contact;