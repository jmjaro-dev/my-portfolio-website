import sr from './scrollReveal';

const trainings = () => {

  // animations
  const headers = {
    opacity: 0,
    distance: "50px",
    origin: "bottom",
    easing: "ease-in-out",
    duration: 500,
    reset: true
  }

  const certificate = {
    opacity: 0,
    distance: "50px",
    origin: "bottom",
    easing: "ease-in-out",
    duration: 600,
    reset: true
  }

  const subHeaders = {
    opacity: 0,
    distance: "50px",
    origin: "bottom",
    easing: "ease-in-out",
    duration: 800,
    reset: true
  }

  const trainings = {
    opacity: 0,
    distance: "50px",
    origin: "bottom",
    easing: "ease-in-out",
    duration: 600,
    interval: 200,
    delay: 100,
    reset: true
  }

  sr.reveal("#trainingsHeader", headers);  
  sr.reveal("#trainingsLine", headers);
  sr.reveal("#trainingTitle", headers);
  sr.reveal(".trainingDetails", trainings);
  sr.reveal(".certTraining", subHeaders);
  sr.reveal(".certAwards", subHeaders);
  sr.reveal(".certOfTraining", certificate);
  sr.reveal(".awardsCert", certificate);
}

export default trainings;