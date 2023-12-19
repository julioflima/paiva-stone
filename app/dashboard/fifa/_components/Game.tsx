import { FutureData } from "@/app/types/DataTypes";
import { FC } from "react";

const Game: FC<FutureData> = (game) => {
    return (
        <div className="bg-slate-800 bg-opacity-10 shadow-md rounded p-4 mx-10">
            <div className="text-gray-50 text-xl">{new Date(game.date_played)?.toDateString()}</div>
            <div className="text-gray-500">{game.time_played}</div>
            <div className="text-green-500 flex justify-between text-lg">
                <div className="text-green-500">{game.player_a} ({game.team_a})</div>
                <div className="text-pink-500">{game.player_b} ({game.team_b})</div>
            </div>
        </div>
    );
};


export default Game