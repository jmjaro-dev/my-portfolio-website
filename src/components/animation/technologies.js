import sr from './scrollReveal';

const technologies = () => {
  
  // animations
  const headers = {
    opacity: 0,
    distance: "50px",
    origin: "bottom",
    easing: "ease-in-out",
    duration: 500,
    reset: true
  }

  const subHeader = {
    opacity: 0,
    distance: "50px",
    origin: "top",
    easing: "ease-in-out",
    duration: 800,
    delay: 300,
    reset: true
  }
  
  const items = {
    opacity: 0,
    distance: "50px",
    origin: "bottom",
    easing: "ease-in-out",
    duration: 800,
    delay: 300,
    interval: 400,
    reset: true
  }

  sr.reveal("#techHeader", headers);  
  sr.reveal("#techLine", headers);
  sr.reveal("#languagesHeader", subHeader);
  sr.reveal("#CSSHeader", subHeader);
  sr.reveal("#stackHeader", subHeader);
  sr.reveal("#frontEndHeader", subHeader);
  sr.reveal("#backEndHeader", subHeader);
  sr.reveal("#cssFrameworkHeader", subHeader);
  sr.reveal("#APIClientsHeader", subHeader);
  sr.reveal("#UIUXHeader", subHeader);
  sr.reveal("#codeEditorHeader", subHeader);
  sr.reveal(".items", items);

}

export default technologies;