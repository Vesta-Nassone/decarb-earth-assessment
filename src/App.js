import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Register from './components/Register';
import VerificationPage from './components/VerificationPage'; // Import the VerificationPage component

function App() {
  return (
    <Router>
      <div className="font-poppins">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/verify" element={<VerificationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
