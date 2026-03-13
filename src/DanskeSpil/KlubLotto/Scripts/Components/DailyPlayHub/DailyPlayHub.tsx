import React, { useEffect, useState } from 'react';
import useGamesData from '../../Hooks/useGamesData';
import { trackEventOnRedirect } from '../../Utils/tracking';
import { DailyPlayHubDataSettings } from '../../Types/DataSettings/dailyPlayHub';
import { GamesApiResponse } from '../../Types/ApiResponse/games';

export const DailyPlayHub = (
  {
    imageQuiz,
    imageSudoku,
    imageOrdknuden,
    imageOrdklover,
    imageKrydsord,
    imagePreviousGames,
    linkQuiz,
    linkSudoku,
    linkOrdknuden,
    linkOrdklover,
    linkKrydsord,
    linkPreviousGames,
    labelQuiz,
    labelSudoku,
    labelOrdknuden,
    labelOrdklover,
    labelKrydsord,
    labelPreviousGames,
  }: DailyPlayHubDataSettings) => {
  const { data } = useGamesData();
  const [games, setGames] = useState<GamesApiResponse>([]);

  useEffect(() => {
    if (data) {
      setGames(data);
    }
  }, [data]);

  const isGameCompleted = (gameId: string) => {
    return games.find((game) => game.game_id === gameId)?.completed || false;
  };

  const tiles = [
    {
      game: 'quiz',
      label: labelQuiz,
      image: imageQuiz,
      link: linkQuiz,
    },
    {
      game: 'sudoku',
      label: labelSudoku,
      image: imageSudoku,
      link: linkSudoku,
    },
    {
      game: 'ordknuden',
      label: labelOrdknuden,
      image: imageOrdknuden,
      link: linkOrdknuden,
    },
    {
      game: 'ordklover',
      label: labelOrdklover,
      image: imageOrdklover,
      link: linkOrdklover,
    },
    {
      game: 'krydsord',
      label: labelKrydsord,
      image: imageKrydsord,
      link: linkKrydsord,
    },
    {
      game: 'previousGames',
      label: labelPreviousGames,
      image: imagePreviousGames,
      link: linkPreviousGames,
    },
  ];

  return (
    <div className={'kl-daily-play-hub__games'}>
      {tiles.map((tile) => (
        <a
          key={tile.game}
          onClick={() => {
            trackEventOnRedirect({ action: 'dailyPlayHub', ctaLabel: tile.label });
          }}
          href={tile.link?.url}
          className={`kl-daily-play-hub__game ${tile.game !== 'previousGames' && isGameCompleted(tile.game) ? 'kl-daily-play-hub__game--completed' : ''}`}
        >
          {tile.game !== 'previousGames' && isGameCompleted(tile.game) && (
            <div className={'kl-daily-play-hub__game-checked'}>
              <img src={'/dlo/Components/DanskeSpil/Domain/Feature.KlubLotto/Graphics/DailyPlayHub/checked.svg'} alt=''/>
            </div>
          )}
          <img src={tile.image?.src} className={'kl-daily-play-hub__game-image'} alt={''}/>
          <div className={'kl-daily-play-hub__game-label'}>{tile.label}</div>
        </a>
      ))}
    </div>
  );
};