import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import ScatterPlaceholder from './ScatterPlaceholder';

const ScatterPlot = ({ options, series }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='bg-white p-6 rounded-lg shadow-custom'>
            <h2 className='text-xl font-semibold mb-4'>Atmospheric CO2 (2000 - 2024)</h2>
            <hr className="my-2" />
            {loading ? (
                <ScatterPlaceholder />
            ) : (
                <Chart
                    options={options}
                    series={series}
                    type='scatter'
                    height={350}
                />
            )}
        </div>
    );
};

export default ScatterPlot;
