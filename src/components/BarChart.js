import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({ options, series }) => {
    return (
        <div className='bg-white p-6 rounded-lg shadow-custom'>
            <h2 className='text-xl font-semibold mb-4'>Sales Overview</h2>
            <hr className="my-2" />
            <Chart
                options={options}
                series={series}
                type='bar'
                height={350}
            />
        </div>
    );
};

export default BarChart;
