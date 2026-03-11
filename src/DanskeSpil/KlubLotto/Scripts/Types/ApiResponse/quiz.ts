export type QuizQuestionCurrentApiResponse = {
  key: number;
  options: string[];
  correct_key: number;
};

export type QuizQuestionApiResponse = {
  completed: boolean;
  status?: {
    correct: boolean;
  };
  question?: QuizQuestionCurrentApiResponse;
};
