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
                            { id: 0, value: 65, label: 'Design' },
                            { id: 1, value: 35, label: 'Code' },
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