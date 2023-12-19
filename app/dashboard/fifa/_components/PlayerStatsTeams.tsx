import { PlayerStatsTeamsData } from "@/app/types/DataTypes";
import clsx from "clsx";

const PlayerStatsTeam: React.FC<{ stats: PlayerStatsTeamsData, color?: string }> = ({ stats, color = 'text-green-500' }) => {
    return (
        <div className="p-4 bg-slate-800 bg-opacity-10 shadow rounded">
            <h2 className={clsx("text-xl font-bold", color)}>{stats.player}</h2>
            <div>Jogos Disputados:
                <b className={clsx('ml-4 text-blue-500')}>{Number(stats.games_played).toFixed(2)}</b>
            </div>
            <div>Média de Gols por Jogador:
                <b className={clsx('ml-4 text-blue-500')}>{Number(stats.avg_goals_by_player).toFixed(2)}</b>
            </div>
            <div>Percentual de Ambas as Equipes Marcarem:
                <b className={clsx('ml-4 text-blue-500')}>{Number(stats.percentage_both_score).toFixed(2)}</b>
            </div>
            <div>Percentual de Vitórias:
                <b className={clsx('ml-4 text-blue-500')}>{Number(stats.percentage_wins).toFixed(2)}%</b>
            </div>
            <div>Percentual de Empates:
                <b className={clsx('ml-4 text-blue-500')}>{Number(stats.percentage_draws).toFixed(2)}%</b>
            </div>
            <div>Percentual de Derrotas:
                <b className={clsx('ml-4 text-blue-500')}>{Number(stats.percentage_losses).toFixed(2)}%</b>
            </div>
        </div>
    );
};


export default PlayerStatsTeam