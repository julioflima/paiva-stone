"use client"

import { PlayerStatsData } from '@/app/types/DataTypes';
import { Bar } from 'react-chartjs-2';

import "chart.js/auto";


interface AverageGoalsChartProps {
    playerStats: PlayerStatsData[];
}

const AverageGoalsChart: React.FC<AverageGoalsChartProps> = ({ playerStats }) => {
    const data = {
        labels: playerStats.map(stat => stat.player),
        datasets: [
            {
                label: 'Média de gols nos últimos 7 dias',
                data: playerStats.map(stat => (stat.avg_goals_last_7_days)),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: 'Média de gols nos últimos 30 dias',
                data: playerStats.map(stat => (stat.avg_goals_last_30_days)),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    return <Bar data={data} />;
};


export default AverageGoalsChart