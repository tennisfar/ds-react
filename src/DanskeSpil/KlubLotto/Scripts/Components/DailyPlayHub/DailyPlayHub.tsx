import React, { useEffect } from 'react';
import useGamesData from '../../Hooks/useGamesData';

export const DailyPlayHub = () => {
  const { data } = useGamesData();

  useEffect(() => {
    if (data) {
      const games = document.querySelectorAll('.kl-daily-play-hub__game');

      games.forEach(game => {
        const gameId = game.getAttribute('data-game-id');
        const gameData = data.find(g => g.game_id === gameId);

        game.classList.toggle('kl-daily-play-hub__game--completed', gameData?.completed || false);
        game.classList.remove('kl-daily-play-hub__game--loading');
      })

    }
  }, [data]);

  return <></>;
};