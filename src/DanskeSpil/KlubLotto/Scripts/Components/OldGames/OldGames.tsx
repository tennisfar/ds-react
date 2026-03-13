import React from 'react';
import useGameHistoryData from '../../Hooks/useGameHistoryData';
import { GameType } from '../../Types/game';
import { trackEventOnRedirect } from '../../Utils/tracking';
import { OldGamesDataSettings } from '../../Types/DataSettings/oldGames';
import { GameHistoryApiResponse, GameHistoryDayApiResponse } from '../../Types/ApiResponse/games';

export const OldGames = ({ quizTitle, quizImage, quizLinkToGame, sudokuTitle, sudokuLinkToGame, sudokuImage, }: OldGamesDataSettings) => {
  // Fetch game data and loading states
  const quiz = useGameHistoryData('quiz');
  const sudoku = useGameHistoryData('sudoku');

  const gameDataMap: Partial<Record<GameType, GameHistoryApiResponse | undefined>> = {
    quiz: quiz.data,
    sudoku: sudoku.data,
  };

  const games = [
    {
      gameType: 'quiz',
      title: quizTitle,
      url: quizLinkToGame.url,
      image: quizImage.src,
    },
    {
      gameType: 'sudoku',
      title: sudokuTitle,
      url: sudokuLinkToGame.url,
      image: sudokuImage.src,
    },
  ];

  return (
    <div className={'kl-old-games__sections'}>
      {games.map(({ title, gameType, url, image }) => (
        <div className={'kl-old-games__section'} key={gameType}>
          <input type={'checkbox'} id={gameType} className={'kl-old-games__toggle'} hidden/>
          <label htmlFor={gameType} className={'kl-old-games__title'}>
            {title}
          </label>
          <div className={'kl-old-games__panel'}>
            {gameDataMap[gameType as GameType]?.map((game: GameHistoryDayApiResponse, index: number) => (
              <div
                key={index}
                className={`kl-old-games__entry ${game.completed ? 'kl-old-games__entry--completed' : ''}`}
                onClick={() => {
                  if (game.completed) return;
                  trackEventOnRedirect({ action: 'oldGames', ctaLabel: `${gameType} ${game.date}` });
                  window.location.href = `${url}?date=${encodeURIComponent(game.date)}`;
                }}
              >
                <div className={'kl-old-games__frame'}>
                  <img src={image} alt={''}/>
                </div>
                <div className={'kl-old-games__weekday'}>{game.weekday}</div>
                <div className={'kl-old-games__date'}>
                  {new Date(game.date).toLocaleDateString('da-DK', {
                    day: 'numeric',
                    month: 'long',
                  })}
                </div>
                <div className={'kl-old-games__status'}>
                  {game.completed ? <img src={'/dlo/Components/DanskeSpil/Domain/Feature.KlubLotto/Graphics/OldGames/check.svg'} alt={''}/> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))
      }
    </div>
  );
};