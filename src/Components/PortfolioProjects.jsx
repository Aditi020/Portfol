import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.jpg';
import project4 from '../assets/project-4.png';
import project5 from '../assets/project-5.png';
import project6 from '../assets/project-6.png';
import project7 from '../assets/project-7.png';
import project8 from '../assets/project-8.jpg';
import project9 from '../assets/project-9.png';

function PortfolioProjects() {
  return [
    {
      id: 1,
      title: "Finance",
      category: "Web development",
      imgSrc: project1,
      link: "https://example.com/finance",
    },
    {
      id: 2,
      title: "Orizon",
      category: "Web development",
      imgSrc: project2,
      link: "https://example.com/orizon",
    },
    {
      id: 3,
      title: "Fundo",
      category: "Web design",
      imgSrc: project3,
      link: "https://example.com/fundo",
    },
    {
      id: 4,
      title: "Brawlhalla",
      category: "Applications",
      imgSrc: project4,
      link: "https://example.com/brawlhalla",
    },
    {
      id: 5,
      title: "DSM.",
      category: "Web design",
      imgSrc: project5,
      link: "https://example.com/dsm",
    },
    {
      id: 6,
      title: "MetaSpark",
      category: "Web design",
      imgSrc: project6,
      link: "https://example.com/metaspark",
    },
    {
      id: 7,
      title: "Summary",
      category: "Web development",
      imgSrc: project7,
      link: "https://example.com/summary",
    },
    {
      id: 8,
      title: "Task Manager",
      category: "Applications",
      imgSrc: project8,
      link: "https://example.com/taskmanager",
    },
    {
      id: 9,
      title: "Arrival",
      category: "Web development",
      imgSrc: project9,
      link: "https://example.com/arrival",
    },
  ];
}

export default PortfolioProjects;
