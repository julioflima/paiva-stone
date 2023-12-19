import { ConfrontationData } from "@/app/types/DataTypes";
import clsx from "clsx";

const Confrontation: React.FC<{ confrontationData: ConfrontationData }> = ({ confrontationData }) => {
    const [playerA, playerB] = confrontationData.confrontation.split(' vs ')

    return (
        <div className="p-4 bg-slate-800 bg-opacity-10 shadow rounded">
            <span>
                <span className={clsx("text-xl font-bold text-green-500")}>{playerA}</span>
                <span className={clsx("text-xl font-bold text-white")}> {'  vs  '}</span>
                <span className={clsx("text-xl font-bold text-pink-500")}>{playerB}</span>
            </span>
            <div>Jogos Disputados:
                <b className={clsx('ml-4 text-blue-500')}>{confrontationData.games_played}</b>
            </div>
            <div>Vitórias do Jogador A:
                <b className={clsx('ml-4 text-blue-500')}>{confrontationData.wins_a}</b>
            </div>
            <div>Vitórias do Jogador B:
                <b className={clsx('ml-4 text-blue-500')}>{confrontationData.wins_b}</b>
            </div>
            <div>Empates:
                <b className={clsx('ml-4 text-blue-500')}>{confrontationData.draws}</b>
            </div>
            <div>Média de Gols do Jogador A:
                <b className={clsx('ml-4 text-blue-500')}>{Number(confrontationData.avg_goals_a).toFixed(2)}</b>
            </div>
            <div>Média de Gols do Jogador B:
                <b className={clsx('ml-4 text-blue-500')}>{Number(confrontationData.avg_goals_b).toFixed(2)}</b>
            </div>
            <div>Ambas as Equipes Marcaram:
                <b className={clsx('ml-4 text-blue-500')}>{Number(confrontationData.both_score_confrontation).toFixed(2)}%</b>
            </div>
        </div>
    );
};

export default Confrontation