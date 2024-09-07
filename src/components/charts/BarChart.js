import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import BarPlaceholder from '../BarPlaceholder';

const BarChart = ({ options, series }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => setLoading(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='bg-white p-6 rounded-lg shadow-custom'>
            <h2 className='text-xl font-semibold mb-4'>Top 10 CO2 Contributors</h2>
            <hr className="my-2" />
            {loading ? (
                <BarPlaceholder />
            ) : (
                <Chart
                    options={options}
                    series={series}
                    type='bar'
                    height={350}
                />
            )}
        </div>
    );
};

export default BarChart;
