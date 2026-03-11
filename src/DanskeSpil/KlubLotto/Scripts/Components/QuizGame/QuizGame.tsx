import React, { useEffect, useState } from 'react';
import { QuizFlowResult, useQuizFlow } from '../../Hooks/useQuizFlow';
import { QuizGameContent } from './QuizGameContent';
import { output } from '../../Utils/output';
import { getUrlParam } from '../../Utils/urlParams';
import { GameDataSettings } from '../../Types/DataSettings/game';

export const QuizGame = ({
  gameType,
  gameResultTexts,
  linkBack,
  successLottie,
  submitQuizAnswerCtaLabel,
}: GameDataSettings) => {
  const [gameDate, setGameDate] = useState(getUrlParam('date') || undefined);
  const { currentQuestion, isLoading, error, submitAnswer, solution, result }: QuizFlowResult = useQuizFlow(
    gameType,
    gameDate,
    setGameDate
  );

  useEffect(() => {
    output('solution:', solution);
  }, [solution]);

  useEffect(() => {
    if (!currentQuestion) return;
  }, [currentQuestion]);

  return (
    <QuizGameContent
      result={result}
      currentQuestion={currentQuestion}
      isLoading={isLoading}
      error={error}
      onSubmitAnswer={submitAnswer}
      gameResultTexts={gameResultTexts}
      solution={solution}
      linkBack={linkBack}
      successLottie={successLottie}
      submitQuizAnswerCtaLabel={submitQuizAnswerCtaLabel}
    />
  );
};
