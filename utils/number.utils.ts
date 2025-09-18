export const calculatePowerOfTen = (amount: number | string): number => {
  const parsedAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    return 0;
  }

  const power = Math.max(1, Math.floor(Math.log10(parsedAmount)));
  return Math.pow(10, power);
};

export const getRandomNumber = (min: number = 1, max: number = 100): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
