import React, { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import QuizOption from './QuizOption';
import GameResult from '../GameResult/GameResult';
import { ErrorDefaultOutput } from '../ErrorDefaultOutput/ErrorDefaultOutput';
import { Spinner } from '../Spinner/Spinner';
import { QuizGameContentProps } from '../../Types/game';
import { trackEvent } from '../../Utils/tracking';

export const QuizGameContent: React.FC<QuizGameContentProps> = (
  {
    currentQuestion,
    isLoading,
    error,
    onSubmitAnswer,
    gameResultTexts,
    solution,
    result,
    linkBack,
    successLottie,
    submitQuizAnswerCtaLabel,
  }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    if (selectedOption) {
      trackEvent({ action: 'game_play_quiz_selectAnswer', label: selectedOption });
    }
  }, [selectedOption]);

  if (error) return (
    <div className={'kl-game kl-game--quiz'}>
      <ErrorDefaultOutput className={'kl-game__error'} variant={'light'}/>
    </div>
  );

  if (isLoading || (!result && !currentQuestion)) {
    return (
      <div className={'kl-game kl-game--quiz'}>
        <Spinner className={'kl-game__spinner kl-game__spinner--quiz'} variant={'quiz'}/>
      </div>
    );
  }

  if (!result) {
    return (
      <div className={'kl-game kl-game--quiz'}>
        <div className={'kl-quiz'}>
          <div className={'kl-quiz__question'}>{currentQuestion.question}</div>
          <div className={'kl-quiz__options'}>
            {currentQuestion.options?.map((option: string, index: number) => (
              <QuizOption
                option={option}
                key={index}
                index={index}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            ))}
          </div>

          <Button
            tracking={{ action: 'game_play_quiz_submitAnswer' }}
            onClick={() => onSubmitAnswer(selectedOption)}
            inverted={true}
            disabled={!selectedOption || isLoading}
          >{submitQuizAnswerCtaLabel}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className={'kl-game kl-game--quiz'}>
      <GameResult
        gameType={'quiz'}
        result={result}
        solution={solution}
        gameResultTexts={gameResultTexts}
        linkBack={linkBack}
        successLottie={successLottie}/>;
    </div>
  );
};
