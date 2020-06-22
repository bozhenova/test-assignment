const parseStargazersCount = number => {
  if (number > 999 && number <= 999999) {
    return Math.floor(number / 100) / 10 + 'k';
  } else {
    return number;
  }
};

export default parseStargazersCount;
