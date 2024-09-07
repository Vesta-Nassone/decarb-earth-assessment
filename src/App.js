import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import VerificationPage from './components/VerificationPage';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import DashboardLayout from './components/DashboardLayout';
import { useEffect, useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const name = localStorage.getItem('name');
    setIsAuthenticated(name ? true : false);
  }, []);

  if (isAuthenticated === null) {
    return (
      <div role="status" className='flex justify-center items-center min-h-screen bg-gray-100'>
        {/* Loading spinner SVG */}
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <Router>
      <div className="font-poppins">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/verify" element={<VerificationPage />} />
          <Route
            path="/"
            element={isAuthenticated ? <DashboardLayout /> : <Navigate to="/" />}
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="update-profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;