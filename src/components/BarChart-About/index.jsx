import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

// Define the settings for the chart, including styling and axes
const chartSetting = {
    yAxis: [{ label: 'Percentage (%)' }],
    width: 800,
    height: 500,
    sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-20px, 0)',
        },
    },
};

// Dataset for the BarChart
const dataset = [
    { percentage: 100, month: 'HTML' },
    { percentage: 95, month: 'CSS' },
    { percentage: 90, month: 'JavaScript' },
    { percentage: 93, month: 'React' },
    { percentage: 80, month: 'NodeJs' },
    { percentage: 88, month: 'NextJs' },
    { percentage: 76, month: 'ExpressJs' },
    { percentage: 70, month: 'Python' },
    { percentage: 85, month: 'Angular' },
    { percentage: 90, month: 'C++' },
    { percentage: 70, month: 'PHP' },
    { percentage: 90, month: 'SQL' },
];

// Formatter for displaying values
const valueFormatter = value => `${value}%`;

function BarsDataset() {
    return (
        <div className='mx-auto flex justify-center'>
            <BarChart
                dataset={dataset}
                xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                series={[
                    { dataKey: 'percentage', label: 'My-Skills', valueFormatter },
                ]}
                {...chartSetting}
            />
        </div>
    );
}

export default BarsDataset;
