import confrontation from '@/__mock_data__/confrontation.json';
import futureGames from '@/__mock_data__/futureGames.json';
import playerStats from '@/__mock_data__/playerStats.json';
import playerStatsTeams from '@/__mock_data__/playerStatsTeams.json';

export type FutureData = typeof futureGames[0]

export type PlayerStatsData = typeof playerStats[0]

export type PlayerStatsTeamsData = typeof playerStatsTeams[0]

export type ConfrontationData = typeof confrontation[0]
