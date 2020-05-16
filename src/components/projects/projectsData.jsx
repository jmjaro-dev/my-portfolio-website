import Covid19Thumbnail from '../../assets/thumbnails/covid-19-tracker-thumbnail.png';
import ITTicketingSystemThumbnail from '../../assets/thumbnails/it-ticketing-system-thumbnail.png'

export const projectsData = [
  {
    url: "https://mern-it-ticketing-system.herokuapp.com/",
    img: ITTicketingSystemThumbnail,
    title: "IT Ticketing System",
    technologies: ["HTML5", "CSS", "MongoDB", "ExpressJS", "ReactJS", "NodeJs", "Axios", "MaterializeCSS"],
    desc: "A Ticketing System where an employee and a IT Personnel (Technician) can collaborate to fix a Hardware/Software technical issue in the office by issuing a Ticket for each problem.",
    status: "Online"
  },
  {
    url: "https://jmj-covid-19-tracker.netlify.app/",
    img: Covid19Thumbnail,
    title: "Covid-19 Tracker",
    technologies: ["HTML5", "CSS", "ReactJS", "NodeJs", "Axios", "Material-UI"],
    desc: "A simple Novel Corona Virus (COVID-19) Tracker that displays the latest information of Total confirmed cases, deaths, critical cases and total recoveries around the Globe and for each countries.",
    status: "Online" 
  }
]