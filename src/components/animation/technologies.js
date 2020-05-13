import sr from './scrollReveal';

const technologies = () => {
  // const random = () => {
  //   let x = Math.floor(Math.random() * 4) + 1;
  //   let origin;

  //   switch(x) {
  //     case 1:
  //       return origin = "top"
  //     case 2:
  //       return origin = "left"
  //     case 3:
  //       return origin = "bottom"
  //     case 4:
  //       return origin = "right"
  //     default:
  //       return origin; 
  //   }
  // };

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
    distance: "30px",
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
  sr.reveal(".items", items);

}

export default technologies;