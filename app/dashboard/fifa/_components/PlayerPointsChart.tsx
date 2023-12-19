"use client"

import { PlayerData } from '@/app/types/DataSet';
import { Bar } from 'react-chartjs-2';

import "chart.js/auto";

const PlayerPointsChart: React.FC<{ playerA: PlayerData; playerB: PlayerData }> = ({ playerA, playerB }) => {
    const data = {
        labels: ['Points'],
        datasets: [
            {
                label: playerA.entity,
                data: [playerA.points],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: playerB.entity,
                data: [playerB.points],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    return <Bar data={data} />;
};


export default PlayerPointsChart