import players from '@/__mock_data__/players.json';

type TPlayers = Omit<(typeof players)[0], 'player'>;

export interface PlayerData extends TPlayers {
  entity: string;
}
export interface DataSet extends TPlayers {
  player?: string;
  team?: string;
}

type EnumLike<T> = { [K in keyof T]: K };

// Create an object that behaves like an enum
export const DataSetEnum = Object.freeze({
  player: 'player',
  team: 'team',
  points: 'points',
  played: 'played',
  wins: 'wins',
  draws: 'draws',
  losses: 'losses',
  goals_for: 'goals_for',
  goals_against: 'goals_against',
  goals_ratio: 'goals_ratio',
  goals_avg: 'goals_avg',
  std_dev_goals_for: 'std_dev_goals_for',
  std_dev_goals_against: 'std_dev_goals_against',
  utilization: 'utilization',
  max_sequence_wins: 'max_sequence_wins',
  max_sequence_losses: 'max_sequence_losses',
  last_games: 'last_games',
}) as EnumLike<Required<DataSet>>;
