import React from 'react';
import Chart from 'react-apexcharts';

const LightHouse = () => {
    // Get chart options
    const getLightHouseChartOptions = () => {
        return {
            series: [40, 82, 75, 91], // The results for Performance, Accessibility, Best practices, and SEO
            labels: ['Performance', 'Accessibility', 'Best Practices', 'SEO'],
            colors: ['#EF4444', '#F59E0B', '#F59E0B', '#10B981'],
            chart: {
                type: 'donut',
                height: 400,
                fontFamily: 'Inter, sans-serif',
                toolbar: {
                    show: false,
                },
            },
            responsive: [
                {
                    breakpoint: 430,
                    options: {
                        chart: {
                            height: 300,
                        },
                    },
                },
            ],
            states: {
                hover: {
                    filter: {
                        type: 'darken',
                        value: 0.9,
                    },
                },
            },
            tooltip: {
                shared: true,
                followCursor: false,
                fillSeriesColor: false,
                inverseOrder: true,
                style: {
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                },
                x: {
                    show: true,
                    formatter: function (val, { seriesIndex, w }) {
                        const label = w.config.labels[seriesIndex];
                        return label ? label : '';
                    },
                },
                y: {
                    formatter: function (value) {
                        return value !== undefined ? value + '%' : '';
                    },
                },
            },
            grid: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: true,
                position: 'bottom',
                onItemHover: {
                    highlightDataSeries: false
                },
            },
        };
    };

    return (
        <div className='bg-white p-6 rounded-lg shadow-custom'>
            <h2 className='text-xl font-semibold mb-4'>Website Performance Overview</h2>
            <hr className="my-2" />
            <Chart options={getLightHouseChartOptions()} series={[40, 82, 75, 91]} type="donut" height={350} />
        </div>
    );
};

export default LightHouse;
