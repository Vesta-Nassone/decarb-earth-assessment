import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import routing components from react-router-dom
import Register from './components/Register'; // Import the Register component
import VerificationPage from './components/VerificationPage'; // Import the VerificationPage component
import Dashboard from './components/Dashboard'; // Import the Dashboard component
import Profile from './components/Profile'; // Import the Profile component
import DashboardLayout from './components/DashboardLayout'; // Import the DashboardLayout component for authenticated routes
import { useEffect, useState } from 'react'; // Import React hooks
import SEOChecker from './components/charts/SEOChecker';
import LightHouse from './components/charts/LightHouse';

function App() {
  // State to determine if the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  // Effect to check local storage for authentication status on component mount
  useEffect(() => {
    const name = localStorage.getItem('name'); // Retrieve the user's name from local storage
    setIsAuthenticated(name ? true : false); // Set authentication state based on presence of name
  }, []);

  // Show a loading spinner while the authentication status is being determined
  if (isAuthenticated === null) {
    return (
      <div role="status" className='flex justify-center items-center min-h-screen bg-gray-100'>
        {/* Loading spinner SVG */}
        <span className="sr-only">Loading...</span> {/* Screen reader text for accessibility */}
      </div>
    );
  }

  return (
    <Router>
      <div className="font-poppins">
        <Routes>
          {/* Route for the registration page */}
          <Route path="/" element={<Register />} />

          {/* Route for the verification page */}
          <Route path="/verify" element={<VerificationPage />} />

          {/* Route for authenticated users, redirects to registration if not authenticated */}
          <Route
            path="/app"
            element={isAuthenticated ? <DashboardLayout /> : <Navigate to="/" />}
          >
            {/* Nested routes under DashboardLayout */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="update-profile" element={<Profile />} />
            <Route path="seo" element={<SEOChecker />} />
            <Route path="performance" element={<LightHouse />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
