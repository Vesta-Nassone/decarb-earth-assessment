import React from 'react';
import Chart from 'react-apexcharts';

const SEOChecker = () => {
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
        <div id="seo-checker-chart" className="w-full">
            <Chart options={getSEOChartOptions()} series={[{ name: 'SEO Metrics', data: [70, 50, 66, 93, 83, 90] }]} type="bar" height={400} />
        </div>
    );
};

export default SEOChecker;
