import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
