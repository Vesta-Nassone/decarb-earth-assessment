import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import VerificationPage from './components/VerificationPage';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="font-poppins">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/verify" element={<VerificationPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
