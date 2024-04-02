export const randomInteger = (
  min: number,
  max: number,
  numbersToAvoid?: number[],
  numberOfAttempts?: number
): number => {
  if (min > max) {
    throw new Error("Min must not be greater than max.");
  }

  const currentAttempt = numberOfAttempts ?? 0;

  const selectedNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Just return the number if 1000 attempts have been made:
  return numbersToAvoid?.includes(selectedNumber) && currentAttempt < 1000
    ? randomInteger(min, max, numbersToAvoid, currentAttempt + 1)
    : selectedNumber;
};

export const integerRange = (min: number, max: number): number[] => {
  if (min > max) {
    throw new Error("Min must not be greater than max.");
  }
  const nums = [];
  for (let i = min; i <= max; i++) {
    nums.push(i);
  }
  return nums;
};
