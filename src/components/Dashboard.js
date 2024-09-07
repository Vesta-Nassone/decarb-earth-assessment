import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import LightHouse from './LightHouse';
import SEOChecker from './SEOChecker';
import BarChart from './BarChart'; // Import the BarChart component
import ScatterPlot from './ScatterPlot'; // Import the ScatterPlot component

const Dashboard = () => {
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
                columnWidth: '50%',
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: [
                'China',
                'USA',
                'India',
                'Russia',
                'Japan',
                'Germany',
                'Iran',
                'South Korea',
                'Saudi Arabia',
                'Indonesia',
            ],
            title: {
                text: "Country",
            }
        },
        yaxis: {
            title: {
                text: 'CO2 Emissions (Million Metric Tons)',
            },
        },
        fill: {
            opacity: 1,
        },
    };

    const barChartSeries = [
        {
            name: 'CO2 Emissions',
            data: [10100, 5420, 2560, 1520, 1120, 750, 720, 620, 580, 540], // Sample data
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
        navigate('/', { replace: true });
    };

    const name = localStorage.getItem('name');

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
        <h1 className='text-3xl font-bold mb-6 text-center md:text-left'>
            Welcome, {name ? name : 'User'}
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
            <BarChart options={barChartOptions} series={barChartSeries} />
            <ScatterPlot options={scatterPlotOptions} series={scatterPlotSeries} />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
            <LightHouse />
            <SEOChecker />
        </div>
    </div>
    );
};

export default Dashboard;
