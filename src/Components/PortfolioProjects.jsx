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
      link: "https://rapid-bite.vercel.app",
      github: "https://github.com/Aditi020/RapidBite", 
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
      link: "https://my-portfolio-xi-two-61.vercel.app/",
      github: "https://github.com/Aditi020/My-Portfolio/tree/main", 
    },
    {
      id: 5,
      title: "Zerodha.",
      category: "Web design",
      imgSrc: project5,
      link: "https://ak-zerodha.vercel.app/",
      github: "https://github.com/Aditi020/Zerodha", 
    },
    {
      id: 6,
      title: "Zomato",
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
      github: "https://github.com/username/tasknet", 
    },
    {
      id: 8,
      title: "Wanderlust",
      category: "Applications",
      imgSrc: project8,
      link: "https://wanderlust-opal.vercel.app/",
      github: "https://github.com/Aditi020/Wanderlust", // Placeholder GitHub link
    },
    {
      id: 9,
      title: "Blog Website",
      category: "Web development",
      imgSrc: project9,
      link: "https://dev-quill.vercel.app/",
      github: "https://github.com/Aditi020/DevQuill", 
    },
  ];
}

export default PortfolioProjects;
