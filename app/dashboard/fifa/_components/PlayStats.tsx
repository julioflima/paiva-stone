import { PlayerStatsData } from "@/app/types/DataTypes";
import clsx from "clsx";

const PlayerStats: React.FC<{ stats: PlayerStatsData, color?: string }> = ({ stats, color = 'text-green-500' }) => {
    return (
        <div className="p-4 bg-slate-800 bg-opacity-10 shadow rounded">
            <h2 className={clsx("text-xl font-bold", color)}>{stats.player}</h2>
            <div className="flex-col justify-start w-full text-left">
                <div><b className={clsx('text-yellow-200 text-[16px]')}>Últimos 7 dias:</b>
                </div>
                <div>
                    Jogos:
                    <b className={clsx('ml-4 text-blue-500')}>{stats.games_last_7_days}</b>
                </div>
                <div>
                    Percentual de vitórias:
                    <b className={clsx('ml-4 text-blue-500')}>{Number(stats.percentage_wins_last_7_days).toFixed(2)}%</b>
                </div>
                <div>
                    Média de gols:
                    <b className={clsx('ml-4 text-blue-500')}>{Number(stats.avg_goals_last_7_days).toFixed(2)}</b>
                </div>
                <br />
                <div><b className={clsx('text-orange-400 text-[16px]')}>Últimos 30 dias:</b>
                </div>
                <div>
                    Jogos:
                    <b className={clsx('ml-4 text-blue-500')}>{stats.games_last_30_days}</b>
                </div>
                <div>
                    Percentual de vitórias:
                    <b className={clsx('ml-4 text-blue-500')}>{(Number(stats.percentage_wins_last_30_days).toFixed(2))}%</b>
                </div>
                <div>
                    Média de gols:
                    <b className={clsx('ml-4 text-blue-500')}>{Number(stats.avg_goals_last_30_days).toFixed(2)}</b>
                </div>
            </div>
        </div >
    );
};

export default PlayerStats
