"use client"

import { PlayerStatsTeamsData } from '@/app/types/DataTypes';
import { Bar } from 'react-chartjs-2';

import "chart.js/auto";

interface TeamStatsChartProps {
    playerStats: PlayerStatsTeamsData[];
}

const TeamStatsChart: React.FC<TeamStatsChartProps> = ({ playerStats }) => {
    const data = {
        labels: playerStats.map(stat => `${stat.player} (${stat.team})`),
        datasets: [
            {
                label: 'Percentual de vitórias',
                data: playerStats.map(stat => (stat.percentage_wins)),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Percentual de empates',
                data: playerStats.map(stat => (stat.percentage_draws)),
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1,
            },
            {
                label: 'Percentual de perdas',
                data: playerStats.map(stat => (stat.percentage_losses)),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    return <Bar data={data} />;
};


export default TeamStatsChart
