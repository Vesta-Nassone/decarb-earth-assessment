import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import LightHouse from './LightHouse';
import SEOChecker from './SEOChecker';
import BarChart from './BarChart'; // Import the BarChart component
import ScatterPlot from './ScatterPlot'; // Import the ScatterPlot component

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
                text: 'Year',
            },
            tickAmount: 12, // Ensure the x-axis shows enough ticks for all years
            labels: {
                formatter: (value) => parseInt(value), // Show years as whole numbers
            },
        },
        yaxis: {
            title: {
                text: 'CO2 Levels (parts per million)',
            },
        },
        tooltip: {
            x: {
                formatter: (val) => `Year: ${val}`,
            },
            y: {
                formatter: (val) => `${val} ppm`,
            },
        },
    };
    
    const scatterPlotSeries = [
        {
            name: 'CO2 Levels',
            data: [
                [2000, 370],
                [2001, 372],
                [2002, 374],
                [2003, 376],
                [2004, 378],
                [2005, 380],
                [2006, 382],
                [2007, 384],
                [2008, 386],
                [2009, 388],
                [2010, 390],
                [2011, 392],
                [2012, 394],
                [2013, 396],
                [2014, 398],
                [2015, 400],
                [2016, 402],
                [2017, 404],
                [2018, 406],
                [2019, 408],
                [2020, 410],
                [2021, 412],
                [2022, 414],
                [2023, 416],
                [2024, 418],
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
        console.log('Logging out...');
        localStorage.removeItem('name');
        navigate('/');
    };

    const name = localStorage.getItem('name');

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='bg-gray-50 flex h-screen'>
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

            <main className='flex-1 ml-5 p-4 overflow-y-auto'>
                <h1 className='text-3xl font-bold mb-6 text-center md:text-left'>
                    Welcome, {name ? name : 'User'}
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                    {/* Bar Chart */}
                    <BarChart options={barChartOptions} series={barChartSeries} />

                    {/* Scatter Plot */}
                    <ScatterPlot options={scatterPlotOptions} series={scatterPlotSeries} />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                    <div className='bg-white p-6 rounded-lg shadow-custom'>
                        {/* LightHouse Pie Chart */}
                        <LightHouse />
                    </div>

                    {/* SEO Checker Pie Chart */}
                    <div className='bg-white p-6 rounded-lg shadow-custom'>
                        <h2 className='text-xl font-semibold mb-4'>SEO Performance Metrics</h2>
                        <hr className="my-2" />
                        <div className='flex flex-col lg:flex-row items-center justify-center'>
                            <div className='lg:w-3/4 w-full mb-4 lg:mb-0'>
                                <SEOChecker />
                            </div>
                            <div className='lg:w-1/4 w-full flex justify-center'>
                                <a href="https://freetools.seobility.net/en/seocheck/decarb.earth">
                                    <img src="https://freetools.seobility.net/widget/widget.png?url=decarb.earth" alt="Seobility Score for decarb.earth" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
