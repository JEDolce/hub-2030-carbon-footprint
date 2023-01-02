import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ChartBar({ sortedObj }) {

    const data = [
        {
            name: Object.keys(sortedObj)[0],
            Fuente: Object.values(sortedObj)[0],
            amt: 2400,
        },
        {
            name: Object.keys(sortedObj)[1],
            Fuente: Object.values(sortedObj)[1],
            amt: 2400,
        },
        {
            name: Object.keys(sortedObj)[2],
            Fuente: Object.values(sortedObj)[2],
            amt: 2400,
        },
        {
            name: Object.keys(sortedObj)[3],
            Fuente: Object.values(sortedObj)[3],
            amt: 2400,
        },
        {
            name: Object.keys(sortedObj)[4],
            Fuente: Object.values(sortedObj)[4],
            amt: 2400,
        },
        {
            name: Object.keys(sortedObj)[5],
            Fuente: Object.values(sortedObj)[5],
            amt: 2400,
        },
        {
            name: Object.keys(sortedObj)[6],
            Fuente: Object.values(sortedObj)[6],
            amt: 2400,
        },
        {
            name: Object.keys(sortedObj)[7],
            Fuente: Object.values(sortedObj)[7],
            amt: 2400,
        },
    ];

    var screenWidth = window.innerWidth;

    return (
        <ResponsiveContainer width="100%" height="100%" >
            <div className="chart">
                <BarChart
                    width={screenWidth > 1400 ? 800 : 600}
                    height={screenWidth > 1400 ? 300 : 250}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Fuente" fill="#78909C" />
                </BarChart>
            </div>
        </ResponsiveContainer>
    )
}
