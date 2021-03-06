import Covid19Thumbnail from '../../assets/thumbnails/covid-19-tracker-thumbnail.png';
import ITTicketingSystemThumbnail from '../../assets/thumbnails/it-ticketing-system-thumbnail.png'
import HEItemBuilderThumbnail from '../../assets/thumbnails/he-item-builder-thumbnail.PNG'

export const projectsData = [
  {
    url: "https://mern-it-ticketing-system.herokuapp.com/",
    img: ITTicketingSystemThumbnail,
    title: "IT Ticketing System",
    repository: "https://github.com/jmjaro-dev/mern-it-ticketing-system",
    technologies: ["HTML", "CSS", "MongoDB", "ExpressJS", "ReactJS", "NodeJs", "Axios", "MaterializeCSS", "bcrypt", "JWT", "Mongoose", "react-fontawesome", "react-moment", "redux", "redux-thunk"],
    desc: "A Ticketing System where an Employee and a IT Personnel (Technician) can collaborate to fix a Hardware/Software issue in the office by issuing a Ticket for each issue.",
    status: "Online"
  },
  {
    url: "https://jmj-covid-19-tracker.netlify.app/",
    img: Covid19Thumbnail,
    title: "Covid-19 Tracker",
    repository: "https://github.com/jmjaro-dev/covid-19-tracker",
    technologies: ["HTML", "CSS", "ReactJS", "NodeJs", "Axios", "Material-UI", "react-moment", "react-fontawesome"],
    desc: "A simple Novel Corona Virus (COVID-19) Tracker that displays the latest information of Total confirmed cases, deaths, active cases, critical cases, total recoveries and total tests conducted around the Globe and for each countries. It also shows the Top 10 Countries that has the most type of cases.",
    status: "Online" 
  },
  {
    url: "https://he-item-builder-v1.netlify.app/",
    img: HEItemBuilderThumbnail,
    title: "Hereos Evolved Item Builder",
    repository: "https://github.com/jmjaro-dev/he-item-builder",
    technologies: ["HTML", "CSS", "ReactJS", "NodeJs", "SASS", "PWA" ],
    desc: "Improved version of Heroes Evolved Mobile Item Builder that is based in the in-game feature where you can create an Item Build for the hero of your choice even when Offline. Can be installed to any devices Mobile, Tablets and Desktops.",
    status: "Online" 
  }
]