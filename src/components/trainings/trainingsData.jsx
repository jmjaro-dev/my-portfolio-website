// Certificate of Training
import WebDesignTraining from '../../assets/certificates/web-design-certificate-of-training.jpg';
import WebDevelopmentTraining from '../../assets/certificates/web-dev-certificate-of-training.jpg';
// Web Design Award
import WebDesignMostOutstandingStudent from '../../assets/certificates/web-design-most-outstanding.jpg'; 
// Web Development Awards
import WebDevBestInFrontendAndBackend from '../../assets/certificates/web-dev-best-in-frontend-and-backend.jpg';
import WebDevJuniorProgrammingLevel from '../../assets/certificates/web-dev-junior-programmer-level.jpg';
import WebDevGoodProgrammingHabit from '../../assets/certificates/web-dev-good-programming-habit-of-using-full-stack-application.jpg';

export const trainingsData = [
  {
    thumbnail: WebDesignTraining,
    title: "Creative Web Design Level III",
    startDate: "August 8, 2019",
    endDate: "August 24, 2019",
    totalHours: 102,
    awards: [
      {
        title: "Most Outstanding Student",
        certificate: WebDesignMostOutstandingStudent,
        featured: true
      }
    ]
  },
  {
    thumbnail: WebDevelopmentTraining,
    title: "Web Development Level III",
    startDate: "July 12, 2019",
    endDate: "July 31, 2019",
    totalHours: 108,
    awards: [
      {
        title: "Front and Backend Web Development",
        certificate: WebDevBestInFrontendAndBackend,
        featured: true
      },
      {
        title: "Junior Programming Level",
        certificate: WebDevJuniorProgrammingLevel,
        featured: false
      },
      {
        title: "Good Programming Habit",
        certificate: WebDevGoodProgrammingHabit,
        featured: false
      }
    ]
  }
]