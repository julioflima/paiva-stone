"use client"

import { ConfrontationData } from '@/app/types/DataTypes';
import { Bar } from 'react-chartjs-2';

import "chart.js/auto";

interface ConfrontationStatsChartProps {
    confrontationData: ConfrontationData;
}

const ConfrontationStatsChart: React.FC<ConfrontationStatsChartProps> = ({ confrontationData }) => {
    const data = {
        labels: ['Wins A', 'Wins B', 'Draws', 'Average Goals A', 'Average Goals B'],
        datasets: [
            {
                label: 'Confrontation Stats',
                data: [
                    confrontationData.wins_a,
                    confrontationData.wins_b,
                    confrontationData.draws,
                    confrontationData.avg_goals_a,
                    confrontationData.avg_goals_b
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return <Bar data={data} />;
};

export default ConfrontationStatsChart