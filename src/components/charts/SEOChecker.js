import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import SEOCheckerPlaceholder from '../loaders/SEOCheckerPlaceholder'; // Make sure this component is imported

const SEOChecker = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    // Get chart options
    const getSEOChartOptions = () => {
        return {
            series: [{
                name: 'SEO Metrics',
                data: [70, 50, 66, 93, 83, 90]
            }],
            labels: [
                'Meta Information',
                'Page Quality',
                'Page Structure',
                'Link Structure',
                'Serve',
                'External Factors'
            ],
            colors: ['#2563EB'],
            chart: {
                type: 'bar',
                height: 400,
                fontFamily: 'Inter, sans-serif',
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    barHeight: 20,
                    borderRadius: 10,
                    borderRadiusApplication: "end"
                },
            },
            xaxis: {
                categories: [
                    'Meta Information',
                    'Page Quality',
                    'Page Structure',
                    'Link Structure',
                    'Serve',
                    'External Factors'
                ],
                labels: {
                    formatter: (value) => `${value}%`
                }
            },
            yaxis: {
                show: true
            },
            grid: {
                show: true,
                borderColor: '#e0e0e0',
                strokeDashArray: 4,
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                yaxis: {
                    lines: {
                        show: true
                    }
                },
            },
            tooltip: {
                shared: false,
                followCursor: false,
                fillSeriesColor: false,
                style: {
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                },
                y: {
                    formatter: function (value) {
                        return `${value}%`;
                    },
                },
            },
            dataLabels: {
                enabled: false,
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
        };
    };

    return (
        <div className='bg-white p-6 rounded-lg shadow-custom'>
            <h2 className='text-xl font-semibold mb-4'>SEO Metrics Overview</h2>
            <hr className="my-2" />
            {loading ? (
                <SEOCheckerPlaceholder />
            ) : (
                <div className='flex flex-col lg:flex-row items-center justify-center'>
                    <div className='lg:w-3/4 w-full mb-4 lg:mb-0'>
                        <Chart options={getSEOChartOptions()} series={[{ name: 'SEO Metrics', data: [70, 50, 66, 93, 83, 90] }]} type="bar" height={350} />
                    </div>
                    <div className='lg:w-1/4 w-full flex justify-center'>
                        <a href="https://freetools.seobility.net/en/seocheck/decarb.earth">
                            <img src="https://freetools.seobility.net/widget/widget.png?url=decarb.earth" alt="Seobility Score for decarb.earth" />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SEOChecker;
