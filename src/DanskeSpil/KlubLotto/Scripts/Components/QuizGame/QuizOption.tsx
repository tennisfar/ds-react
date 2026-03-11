import React from 'react';

type QuizOptionProps = {
  option: string;
  index: number;
  selectedOption: string | null;
  setSelectedOption: (option: string) => void;
};

const QuizOption = ({ option, index, selectedOption, setSelectedOption }: QuizOptionProps) => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F']; // Add more if needed
  const letter = letters[index] || '';

  return (
    <div className={'kl-quiz__option'} data-letter={letter}>
      <input
        type={'radio'}
        id={`option-${index}`}
        name={'quiz-option'}
        value={option}
        checked={selectedOption === option}
        onChange={() => setSelectedOption(option)}
      />

      <label htmlFor={`option-${index}`}>{option}</label>
    </div>
  );
};

export default QuizOption;
