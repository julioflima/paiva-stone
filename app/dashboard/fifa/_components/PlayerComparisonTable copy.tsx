"use client"

import { PlayerData } from "@/app/types/DataSet";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';


const PlayerComparisonTable: React.FC<{ playerA: PlayerData; playerB: PlayerData }> = ({ playerA, playerB }) => {
    const createDataRow = (label: string, valueA: any, valueB: any, abbreviation: string = '') => {
        const abbreviationResult = abbreviation || String(Array(...label).at(0)).toLocaleUpperCase()


        return (
            <tr>
                <td className="border px-4 py-2" data-tooltip-id="my-tooltip" data-tooltip-content={label}>{abbreviationResult}</td>
                <td className="border px-4 py-2">{valueA}</td>
                <td className="border px-4 py-2">{valueB}</td>
            </tr>
        )
    };


    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2">{playerA.entity}</th>
                        <th className="px-4 py-2">{playerB.entity}</th>
                    </tr>
                </thead>
                <tbody>
                    {createDataRow('Pontos', playerA.points, playerB.points)}
                    {createDataRow('Jogados', playerA.played, playerB.played)}
                    {createDataRow('Vitórias', playerA.wins, playerB.wins)}
                    {createDataRow('Empates', playerA.draws, playerB.draws)}
                    {createDataRow('Derrotas', playerA.losses, playerB.losses)}
                    {createDataRow('Gols Marcados', playerA.goals_for, playerB.goals_for)}
                    {createDataRow('Gols Sofridos', playerA.goals_against, playerB.goals_against)}
                    {createDataRow('Razão de Gols', playerA.goals_ratio, playerB.goals_ratio)}
                    {createDataRow('Média de Gols', playerA.goals_avg, playerB.goals_avg)}
                    {createDataRow('Ambos Marcaram', playerA.both_score, playerB.both_score)}
                    {createDataRow('Desvio Padrão de Gols Marcados', playerA.std_dev_goals_for, playerB.std_dev_goals_for)}
                    {createDataRow('Desvio Padrão de Gols Sofridos', playerA.std_dev_goals_against, playerB.std_dev_goals_against)}
                    {createDataRow('Utilização', playerA.utilization, playerB.utilization)}
                    {createDataRow('Maior Sequência de Vitórias', playerA.max_sequence_wins, playerB.max_sequence_wins)}
                    {createDataRow('Maior Sequência de Derrotas', playerA.max_sequence_losses, playerB.max_sequence_losses)}
                </tbody>
            </table>
            <Tooltip id="my-tooltip" />
        </div>

    );
};


export default PlayerComparisonTable
