import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
    const navigate = useNavigate(); // Hook to navigate between routes
    const [isSidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar visibility

    // Function to handle navigation to the sales page
    const handleNavigate = () => {
        console.log('navigate to sales page');
        navigate('/sales');
    };

    // Function to handle navigation to the update profile page
    const handleUpdateProfile = () => {
        console.log('Update profile');
        navigate('/update-profile');
    };

    // Function to handle user logout and redirect to the home page
    const handleLogout = () => {
        console.log('Logging out...');
        localStorage.removeItem('name'); // Remove user data from local storage
        navigate('/', { replace: true }); // Redirect to home page
    };

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='bg-gray-50 flex h-screen'>
            {/* Sidebar component */}
            <aside
                className={`fixed top-0 left-0 h-screen bg-white border-r border-gray-200 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0 lg:relative lg:flex z-40 w-64`}
            >
                {/* Sidebar actions passed as props */}
                <Sidebar
                    logout={handleLogout}
                    updateProfile={handleUpdateProfile}
                    sales={handleNavigate}
                />
            </aside>

            {/* Button to toggle the sidebar on small screens */}
            <button
                onClick={toggleSidebar}
                className='lg:hidden fixed top-4 left-4 z-50 p-2 text-gray-600 bg-white rounded-full shadow focus:outline-none focus:ring-2 focus:ring-gray-100'
            >
                {/* Render different icons based on sidebar state */}
                {isSidebarOpen ? (
                    <svg
                        className='w-6 h-6'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        {/* Close icon */}
                        <path
                            fillRule='evenodd'
                            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                            clipRule='evenodd'
                        />
                    </svg>
                ) : (
                    <svg
                        className='w-6 h-6'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        {/* Hamburger icon */}
                        <path
                            fillRule='evenodd'
                            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                            clipRule='evenodd'
                        />
                    </svg>
                )}
            </button>

            {/* Main content area where nested routes are rendered */}
            <main className='flex-1 ml-5 p-4 overflow-y-auto'>
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
