import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

const Chart = () => {
    return (
        <>
            <PieChart
                width={400}
                height={300}
                series={[
                    {
                        data: [
                            { id: 0, value: 10, label: 'series A' },
                            { id: 1, value: 15, label: 'series B' },
                            { id: 2, value: 20, label: 'series C' },
                            { id: 3, value: 20, label: 'series C' },
                        ],
                        innerRadius: 30,
                        outerRadius: 100,
                        paddingAngle: 5,
                        cornerRadius: 5,
                        startAngle: -180,
                        endAngle: 180,
                        cx: 150,
                        cy: 100,
                    }
                ]}
            />
        </>
    )
}

export default Chart