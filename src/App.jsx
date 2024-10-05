import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './Components/Sidebar.jsx';
// import Navbar from './Components/Navbar';
// import About from './Components/About';
// import Resume from './Components/Resume';
// import Portfolio from './Components/Portfolio';
// import Blog from './Components/Blog';
// import Contact from './Components/Contact';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* You can add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
