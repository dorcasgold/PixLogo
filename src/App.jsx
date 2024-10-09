import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Mainpage from './pages/Mainpage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/main" element={<Mainpage />} />
        
      </Routes>
    </Router>
  );
};

export default App;
