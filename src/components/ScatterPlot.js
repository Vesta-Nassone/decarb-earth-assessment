// src/components/ScatterPlot.js
import React from 'react';
import Chart from 'react-apexcharts';

const ScatterPlot = ({ options, series }) => {
    return (
        <div className='bg-white p-6 rounded-lg shadow-custom'>
            <h2 className='text-xl font-semibold mb-4'>Data Distribution</h2>
            <hr className="my-2" />
            <Chart
                options={options}
                series={series}
                type='scatter'
                height={350}
            />
        </div>
    );
};

export default ScatterPlot;
