import { PlayerData } from "@/app/types/DataSet";
import { ConfrontationData, FutureData, PlayerStatsData, PlayerStatsTeamsData } from "@/app/types/DataTypes";
import pool from "@/db";

export type ConfrontationPayload = {
  game: FutureData
  playerStatsA: PlayerStatsData
  playerStatsB: PlayerStatsData
  playerStatsTeamsA: PlayerStatsTeamsData
  playerStatsTeamsB: PlayerStatsTeamsData
  confrontation: ConfrontationData
  playerA: PlayerData
  playerB: PlayerData
}

export async function GET() {
  try {
    const { rows: rows } = await pool.query<FutureData>(`SELECT * FROM future_games LIMIT 1`);

    const game = rows.at(0)

    if (!game) throw new Error('Nenhum jogo rodando')

    const playerStatsA = (await pool.query<PlayerStatsData[]>(`
      SELECT * FROM player_stats ps
      WHERE ps.player = $1
    `, [game?.player_a]))?.rows.at(0)

    const playerStatsB = (await pool.query<PlayerStatsData[]>(`
      SELECT * FROM player_stats ps
      WHERE ps.player = $1
    `, [game?.player_b]))?.rows.at(0)

    const playerStatsTeamsA = (await pool.query<PlayerStatsTeamsData[]>(`
      SELECT * FROM player_stats_teams pst
      WHERE pst.player = $1 AND pst.team ILIKE $2
    `, [game?.player_a, `%${game.team_a}%`]))?.rows.at(0)

    const playerStatsTeamsB = (await pool.query<PlayerStatsTeamsData[]>(`
      SELECT * FROM player_stats_teams pst
      WHERE pst.player = $1 AND pst.team ILIKE $2
    `, [game?.player_b, `%${game.team_b}%`]))?.rows.at(0)

    const confrontation = (await pool.query<ConfrontationData[]>(`
      SELECT * FROM confrontation c
      WHERE c.confrontation ILIKE $1
    `, [`%${game?.player_a} vs ${game.player_b}%`]))?.rows.at(0)

    const playerA = (await pool.query<PlayerData[]>(`
      SELECT * FROM dataset_games_fifa(FALSE) ds
      WHERE ds.entity = $1
    `, [game?.player_a]))?.rows.at(0)

    const playerB = (await pool.query<PlayerData[]>(`
      SELECT * FROM dataset_games_fifa(FALSE) ds
      WHERE ds.entity = $1
    `, [game?.player_b]))?.rows.at(0)

    return new Response(JSON.stringify({
      game,
      playerStatsA,
      playerStatsB,
      playerStatsTeamsA,
      playerStatsTeamsB,
      confrontation,
      playerA,
      playerB,
    }), {
      status: 200
    });

  } catch (err: any) {
    console.log(err);
    return new Response(JSON.stringify(err), { status: 500 });
  }

}


// game
// {
//   date_played: 2023-11-20T03:00:00.000Z,
//   time_played: '12:15:00',
//   player_a: 'arthur',
//   team_a: 'Spain',
//   player_b: 'misterx',
//   team_b: 'Italy'
// }

// playerStatsA
// {
//   player: 'arthur',
//   games_last_7_days: '64',
//   percentage_wins_last_7_days: '50.00000000000000000000',
//   avg_goals_last_7_days: '2.9218750000000000',
//   games_last_30_days: '556',
//   percentage_wins_last_30_days: '37.23021582733812949600',
//   avg_goals_last_30_days: '2.5683453237410072'
// }

// playerStatsB
// {
//   player: 'misterx',
//   games_last_7_days: '96',
//   percentage_wins_last_7_days: '44.79166666666666666700',
//   avg_goals_last_7_days: '2.5729166666666667',
//   games_last_30_days: '512',
//   percentage_wins_last_30_days: '39.45312500000000000000',
//   avg_goals_last_30_days: '2.7500000000000000'
// }

// playerStatsTeamsA
// {
//   player: 'arthur',
//   team: 'Spain',
//   games_played: '15',
//   avg_goals_by_player: '3.2666666666666667',
//   percentage_both_score: '93.33333333333333333300',
//   percentage_wins: '40.00000000000000000000',
//   percentage_draws: '33.33333333333333333300',
//   percentage_losses: '26.66666666666666666700'
// }

// playerStatsTeamsB
// {
//   player: 'misterx',
//   team: 'Italy',
//   games_played: '23',
//   avg_goals_by_player: '2.7391304347826087',
//   percentage_both_score: '91.30434782608695652200',
//   percentage_wins: '34.78260869565217391300',
//   percentage_draws: '21.73913043478260869600',
//   percentage_losses: '43.47826086956521739100'
// }

// confrontation
// {
//   confrontation: 'arthur vs misterx',
//   games_played: '51',
//   wins_a: '19',
//   wins_b: '21',
//   draws: '11',
//   avg_goals_a: '2.7843137254901961',
//   avg_goals_b: '2.6078431372549020',
//   both_score_confrontation: '86.27450980392156862700'
// }

// playerA
// {
//   entity: 'arthur',
//   points: 1211,
//   played: 889,
//   wins: 345,
//   draws: 176,
//   losses: 368,
//   goals_for: 2326,
//   goals_against: 2382,
//   goals_ratio: '0.97649034424853064652',
//   goals_avg: '2.6164229471316085',
//   both_score: '87.5141',
//   std_dev_goals_for: '1.4713',
//   std_dev_goals_against: '1.5443',
//   utilization: '0.45406824146981627297',
//   max_sequence_wins: 5,
//   max_sequence_losses: 11,
//   last_games: [ 3, 3, 3, 1, 0 ]
// }

// playerB
// {
//   entity: 'misterx',
//   points: 1084,
//   played: 758,
//   wins: 326,
//   draws: 106,
//   losses: 326,
//   goals_for: 2187,
//   goals_against: 2215,
//   goals_ratio: '0.98735891647855530474',
//   goals_avg: '2.8852242744063325',
//   both_score: '88.5224',
//   std_dev_goals_for: '1.6572',
//   std_dev_goals_against: '1.6705',
//   utilization: '0.47669305189094107300',
//   max_sequence_wins: 8,
//   max_sequence_losses: 10,
//   last_games: [ 3, 0, 0, 3, 3 ]
// }