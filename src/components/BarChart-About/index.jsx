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
    { percentage: 50, month: 'CSS' },
    { percentage: 47, month: 'JavaScript' },
    { percentage: 54, month: 'React' },
    { percentage: 57, month: 'NodeJs' },
    { percentage: 60, month: 'NextJs' },
    { percentage: 59, month: 'ExpressJs' },
    { percentage: 65, month: 'Python' },
    { percentage: 51, month: 'Angular' },
    { percentage: 60, month: 'C++' },
    { percentage: 67, month: 'PHP' },
    { percentage: 61, month: 'SQL' },
];

// Formatter for displaying values
const valueFormatter = value => `${value}%`;

function BarsDataset() {
    return (
        <div className='m-auto flex justify-center'>
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
