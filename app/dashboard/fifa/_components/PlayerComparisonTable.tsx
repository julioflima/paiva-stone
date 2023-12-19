
'use client'

import { PlayerData } from "@/app/types/DataSet";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const PlayerComparisonTable: React.FC<{ playerA: PlayerData; playerB: PlayerData }> = ({ playerA, playerB }) => {
    const playerStats = [
        { label: 'Pontos', playerAValue: playerA.points, playerBValue: playerB.points },
        { label: 'Jogados', playerAValue: playerA.played, playerBValue: playerB.played },
        { label: 'Vitórias', playerAValue: playerA.wins, playerBValue: playerB.wins },
        { label: 'Empates', playerAValue: playerA.draws, playerBValue: playerB.draws },
        { label: 'Derrotas', playerAValue: playerA.losses, playerBValue: playerB.losses },
        { label: 'Gols Marcados', playerAValue: playerA.goals_for, playerBValue: playerB.goals_for },
        { label: 'Gols Sofridos', playerAValue: playerA.goals_against, playerBValue: playerB.goals_against },
        { label: 'Razão de Gols', playerAValue: Number(playerA.goals_ratio * 100).toFixed(2), playerBValue: Number(playerB.goals_ratio * 100).toFixed(2) },
        { label: 'Média de Gols', playerAValue: Number(playerA.goals_avg).toFixed(2), playerBValue: Number(playerB.goals_avg).toFixed(2) },
        { label: 'Ambos Marcaram', playerAValue: playerA.both_score, playerBValue: playerB.both_score },
        { label: 'Desvio Padrão de Gols Marcados', playerAValue: Number(playerA.std_dev_goals_for).toFixed(2), playerBValue: Number(playerB.std_dev_goals_for).toFixed(2) },
        { label: 'Desvio Padrão de Gols Sofridos', playerAValue: Number(playerA.std_dev_goals_against).toFixed(2), playerBValue: Number(playerB.std_dev_goals_against).toFixed(2) },
        { label: 'Utilização', playerAValue: Number(playerA.utilization).toFixed(2), playerBValue: Number(playerB.utilization).toFixed(2) },
        { label: 'Maior Sequência de Vitórias', playerAValue: playerA.max_sequence_wins, playerBValue: playerB.max_sequence_wins },
        { label: 'Maior Sequência de Derrotas', playerAValue: playerA.max_sequence_losses, playerBValue: playerB.max_sequence_losses },
        // Adicione outras estatísticas conforme necessário
    ];

    return (
        <div className="overflow-x-auto mb-12">
            <h6 className="display-md-4 display-xl-3 fw-600 lh-2 pt-12 mb-7 mb-lg-8">
                <span className="d-block text-white text-3xl">
                    Tabela de Jogadores
                </span>
            </h6>
            <table className="border-collapse border border-blue-700 table-auto w-full">
                <thead>
                    <tr className="bg-transparent">
                        <th className="px-4 py-2"></th>
                        {playerStats.map((stat, index) => (
                            <th key={index} className="border-2 border-pink-500 px-4 py-2 text-gray-50 cursor-default" data-tooltip-id="my-tooltip" data-tooltip-content={stat.label}>
                                {String(Array(...stat.label).at(0)).toLocaleUpperCase()}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={("border px-4 py-2 font-bold text-green-500")}>{playerA.entity}</td>
                        {playerStats.map((stat, index) => (
                            <td key={index} className="border px-4 py-2 cursor-default text-green-300 hover:bg-green-300 hover:text-gray-900">{stat.playerAValue}</td>
                        ))}

                    </tr>
                    <tr>
                        <td className="border px-4 py-2 font-bold text-pink-500">{playerB.entity}</td>
                        {playerStats.map((stat, index) => (
                            <td key={index} className="border px-4 py-2 cursor-default text-pink-300 hover:bg-pink-300 hover:text-gray-900">{stat.playerBValue}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default PlayerComparisonTable;
