import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import VerificationPage from './components/VerificationPage';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="font-poppins">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/verify" element={<VerificationPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/update-profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
