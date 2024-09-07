import React from 'react';
import LightHouse from './LightHouse'; // Import LightHouse component
import SEOChecker from './charts/SEOChecker'; // Import SEOChecker component
import BarChart from './charts/BarChart'; // Import the BarChart component
import ScatterPlot from './charts/ScatterPlot'; // Import the ScatterPlot component

const Dashboard = () => {
    // Configuration options for the BarChart component
    const barChartOptions = {
        chart: {
            type: 'bar', // Specifies the type of chart
            height: 350, // Sets the height of the chart
        },
        plotOptions: {
            bar: {
                horizontal: false, // Sets bars to be vertical
                columnWidth: '50%', // Width of each column
            },
        },
        dataLabels: {
            enabled: false, // Disables data labels on bars
        },
        xaxis: {
            categories: [
                'China', 'USA', 'India', 'Russia', 'Japan', 'Germany', 'Iran', 'South Korea', 'Saudi Arabia', 'Indonesia',
            ], // Categories displayed on the x-axis
            title: {
                text: 'Country', // Title of the x-axis
            },
        },
        yaxis: {
            title: {
                text: 'CO2 Emissions (Million Metric Tons)', // Title of the y-axis
            },
        },
        fill: {
            opacity: 1, // Sets the opacity of the bars
        },
    };

    // Series data for the BarChart component
    const barChartSeries = [
        {
            name: 'CO2 Emissions', // Name of the data series
            data: [10100, 5420, 2560, 1520, 1120, 750, 720, 620, 580, 540], // Sample data for each category
        },
    ];

    // Configuration options for the ScatterPlot component
    const scatterPlotOptions = {
        chart: {
            height: 350, // Sets the height of the chart
            type: 'scatter', // Specifies the type of chart
        },
        xaxis: {
            title: {
                text: 'Year', // Title of the x-axis
            },
            tickAmount: 12, // Number of ticks on the x-axis
            labels: {
                formatter: (value) => parseInt(value), // Formats x-axis labels to display as whole numbers
            },
        },
        yaxis: {
            title: {
                text: 'CO2 Levels (parts per million)', // Title of the y-axis
            },
        },
        tooltip: {
            x: {
                formatter: (val) => `Year: ${val}`, // Formats the tooltip for x-axis values
            },
            y: {
                formatter: (val) => `${val} ppm`, // Formats the tooltip for y-axis values
            },
        },
    };

    // Series data for the ScatterPlot component
    const scatterPlotSeries = [
        {
            name: 'CO2 Levels', // Name of the data series
            data: [
                [2000, 370], [2001, 372], [2002, 374], [2003, 376], [2004, 378],
                [2005, 380], [2006, 382], [2007, 384], [2008, 386], [2009, 388],
                [2010, 390], [2011, 392], [2012, 394], [2013, 396], [2014, 398],
                [2015, 400], [2016, 402], [2017, 404], [2018, 406], [2019, 408],
                [2020, 410], [2021, 412], [2022, 414], [2023, 416], [2024, 418],
            ], // Sample data showing CO2 levels over the years
        },
    ];

    // Retrieves the user's name from local storage
    const name = localStorage.getItem('name');

    return (
        <div>
            {/* Header displaying a welcome message */}
            <h1 className='text-3xl font-bold mb-6 text-center md:text-left'>
                Welcome, {name ? name : 'User'}
            </h1>

            {/* Grid layout to display BarChart and ScatterPlot side by side on larger screens */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                <BarChart options={barChartOptions} series={barChartSeries} /> {/* Renders the bar chart */}
                <ScatterPlot options={scatterPlotOptions} series={scatterPlotSeries} /> {/* Renders the scatter plot */}
            </div>

            {/* Grid layout to display LightHouse and SEOChecker side by side on larger screens */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                <LightHouse /> {/* Renders the LightHouse component */}
                <SEOChecker /> {/* Renders the SEOChecker component */}
            </div>
        </div>
    );
};

export default Dashboard;
