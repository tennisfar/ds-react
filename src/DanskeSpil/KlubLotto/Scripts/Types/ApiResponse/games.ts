export type DailyLotApiResponse = {
  status: 'LotGranted' | 'AlreadyGranted';
};

export type GameHistoryDayApiResponse = {
  weekday: string;
  dayNumber: number;
  completed: boolean;
  date: string;
};

export type GameHistoryApiResponse = GameHistoryDayApiResponse[];

type GameApiResponse = {
  id: string;
  url: string;
  game_id: string;
  start: string;
  end: string;
  completed: boolean;
};

export type GamesApiResponse = GameApiResponse[];

export type GameLauncherApiResponse = {
  completed: boolean;
  id: string;
  url: string;
  success: boolean;
  launchGameDate: string;
};

export type MarkGameCompletedStatusApiResponse = 'LotGranted' | 'AlreadyGranted' | 'LotNotGranted' | 'Error';

export type MarkGameCompletedApiResponse = {
  success: boolean;
  status: MarkGameCompletedStatusApiResponse;
  message: string;
};
