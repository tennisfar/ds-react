import { useQuery } from '@tanstack/react-query';
import { getQuizQuestion } from '../Api/QuizApi';
import { output } from '../Utils/output';
import { QuizQuestionApiResponse } from '../Types/ApiResponse/quiz';

export type QuizQuestionResult = {
  data?: QuizQuestionApiResponse;
  isLoading: boolean;
  isError: boolean;
};

export const useQuizQuestion = (key?: number, answer?: number, gameDate?: string): QuizQuestionResult => {
  const { data, isLoading, isError } = useQuery<QuizQuestionApiResponse>({
    queryKey: ['useQuizQuestion', key, answer, gameDate],
    queryFn: async () => {
      output('useQuizQuestion', key + '', answer + '', gameDate || '');
      return await getQuizQuestion(key, answer, gameDate);
    },
  });

  return {
    data,
    isLoading,
    isError,
  };
};
