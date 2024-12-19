export const colorOptions = [
  '#0984e3',
  '#00cec9',
  '#d63031',
  '#fab1a0',
  '#6c5ce7',
];

export const shuffle = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const compareBoards = (arr1: string[], arr2: string[]) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

export const getNumberCorrect = (arr1: string[], arr2: string[]) => {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) count++;
  }
  return count;
};

export const createGame = () => {
  const board = colorOptions.concat();
  let answers = shuffle(colorOptions.concat());
  while (compareBoards(board, answers)) {
    answers = shuffle(colorOptions.concat());
  }

  return {
    board,
    answers,
    moves: 0,
    correct: getNumberCorrect(board, answers),
  };
};
