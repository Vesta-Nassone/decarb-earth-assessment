import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import LightHouse from './LightHouse';
import SEOChecker from './SEOChecker';

const Dashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Sample data for bar chart
    const barChartOptions = {
        chart: {
            type: 'bar',
            height: 350,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        },
        fill: {
            opacity: 1,
        },
    };

    const barChartSeries = [
        {
            name: 'Sales',
            data: [30, 40, 35, 50, 49, 60, 70],
        },
    ];

    // Sample data for scatter plot
    const scatterPlotOptions = {
        chart: {
            height: 350,
            type: 'scatter',
        },
        xaxis: {
            title: {
                text: 'X Axis',
            },
        },
        yaxis: {
            title: {
                text: 'Y Axis',
            },
        },
    };

    const scatterPlotSeries = [
        {
            name: 'Series 1',
            data: [
                [1, 10],
                [2, 20],
                [3, 30],
                [4, 40],
                [5, 50],
            ],
        },
    ];

    const handleNavigate = () => {
        console.log('navigate to sales page');
        navigate('/sales');
    };

    const handleUpdateProfile = () => {
        console.log('Update profile');
        navigate('/update-profile');
    };

    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logging out...');
        localStorage.removeItem('name');
        navigate('/login');
    };

    const name = localStorage.getItem('name');

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='bg-gray-100 min-h-screen flex'>
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-screen bg-white border-r border-gray-200 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0 lg:relative lg:flex z-40 w-64`}
            >
                <Sidebar
                    logout={handleLogout}
                    updateProfile={handleUpdateProfile}
                    sales={handleNavigate}
                />
            </aside>

            {/* Hamburger Menu */}
            <button
                onClick={toggleSidebar}
                className='lg:hidden fixed top-4 left-4 z-50 p-2 text-gray-600 bg-white rounded-full shadow focus:outline-none focus:ring-2 focus:ring-gray-100'
            >
                {isSidebarOpen ? (
                    <svg
                        className='w-6 h-6'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                    >
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
                        <path
                            fillRule='evenodd'
                            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                            clipRule='evenodd'
                        />
                    </svg>
                )}
            </button>

            {/* Main Content */}
            <main className='flex-1 p-4'>
                <h1 className='text-3xl font-bold mb-6 text-center md:text-left'>Welcome, {name ? name : 'User'}</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                    {/* Bar Chart */}
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <h2 className='text-xl font-semibold mb-4'>Sales Overview</h2>
                        <hr className="my-2" />
                        <Chart
                            options={barChartOptions}
                            series={barChartSeries}
                            type='bar'
                            height={350}
                        />
                    </div>

                    {/* Scatter Plot */}
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <h2 className='text-xl font-semibold mb-4'>Data Distribution</h2>
                        <hr className="my-2" />
                        <Chart
                            options={scatterPlotOptions}
                            series={scatterPlotSeries}
                            type='scatter'
                            height={350}
                        />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                    {/* Lighthouse Pie Chart */}
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <h2 className='text-xl font-semibold mb-4'>Website Performance Overview</h2>
                        <hr className="my-2" />
                        <LightHouse />
                    </div>

                    {/* SEO Performance Metrics Chart */}
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <h2 className='text-xl font-semibold mb-4'>SEO Performance Metrics</h2>
                        <hr className="my-2" />
                        <div className='flex items-center'>
                            <SEOChecker />
                            <a href="https://freetools.seobility.net/en/seocheck/decarb.earth"><img src="https://freetools.seobility.net/widget/widget.png?url=decarb.earth" alt="Seobility Score für decarb.earth" /></a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
