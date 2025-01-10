import project1 from '../assets/Projects/RapidBite.jpeg';
import project2 from '../assets/Projects/ChatApp.jpeg';
import project3 from '../assets/Projects/ToDo.jpeg';
import project4 from '../assets/Projects/Portfolio.jpeg';
import project5 from '../assets/Projects/Zerodha.png';
import project6 from '../assets/Projects/Zomato.webp';
import project7 from '../assets/Projects/TaskNet.jpg';
import project8 from '../assets/Projects/Travel.jpg'; //
import project9 from '../assets/Projects/Blog.jpeg'; //

function PortfolioProjects() {
  return [
    {
      id: 1,
      title: "RapidBite",
      category: "Web development",
      imgSrc: project1,
      link: "https://example.com/finance",
      github: "https://github.com/username/rapidbite", // GitHub link
    },
    {
      id: 2,
      title: "Chat App",
      category: "Web development",
      imgSrc: project2,
      link: "https://example.com/orizon",
      github: "#", // Placeholder GitHub link
    },
    {
      id: 3,
      title: "ToDos",
      category: "Web design",
      imgSrc: project3,
      link: "https://example.com/fundo",
      github: "#", // Placeholder GitHub link
    },
    {
      id: 4,
      title: "Portfolio",
      category: "Applications",
      imgSrc: project4,
      link: "https://example.com/brawlhalla",
      github: "https://github.com/username/portfolio", // GitHub link
    },
    {
      id: 5,
      title: "Zerodha.",
      category: "Web design",
      imgSrc: project5,
      link: "https://example.com/dsm",
      github: "https://github.com/username/zerodha", // GitHub link
    },
    {
      id: 6,
      title: "TaskNet",
      category: "Web design",
      imgSrc: project6,
      link: "https://example.com/metaspark",
      github: "#", // Placeholder GitHub link
    },
    {
      id: 7,
      title: "TaskNet",
      category: "Web development",
      imgSrc: project7,
      link: "https://example.com/summary",
      github: "https://github.com/username/tasknet", // GitHub link
    },
    {
      id: 8,
      title: "Wanderlust",
      category: "Applications",
      imgSrc: project8,
      link: "https://example.com/taskmanager",
      github: "#", // Placeholder GitHub link
    },
    {
      id: 9,
      title: "Blog Website",
      category: "Web development",
      imgSrc: project9,
      link: "https://example.com/arrival",
      github: "https://github.com/username/blog-website", // GitHub link
    },
  ];
}

export default PortfolioProjects;
