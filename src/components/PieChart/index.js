import React from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

const data = [
    { name: 'Founding Team Incentives', value: 4204800 },
    { name: 'Genesis Mapping', value: 42108530 },
    { name: 'Umayyad 1.0 Staking Incentives', value: 12159120 },
    { name: 'Future Development Fund', value: 4204800 },
    { name: 'PoW Subsidy', value: 147562750 },
];

const COLORS = ['#00cffe', '#00c4b4', '#ffdb28', '#ffa142', '#ff28f4'];

const PieChartComponent = ({ title }) => (
    <div className='chart'>
        <h4>{ title }</h4>
        <PieChart width={400} height={400}>
            <Pie
                data={data}
                cx={200}
                cy={180}
                outerRadius={110}
                fill="#8884d8"
                dataKey="value"
                label
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Legend />
            <Tooltip />
        </PieChart>
    </div>
);

export default PieChartComponent;
