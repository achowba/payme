import { MAXIMUM_AMOUNT } from "@/constants/money.constants";

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

export const sanitizeAmount = (prev: string, digit: string) => {
  const isDecimalSeparator = digit === '.' || digit === ',';
  const isDecimalSeparatorAlreadyPresent = prev.includes('.') || prev.includes(',');

  const isAmountEmpty = prev.trim() === '' && isDecimalSeparator;
  const isDecimalSeparatorActive = isDecimalSeparatorAlreadyPresent && isDecimalSeparator;

  if (isAmountEmpty || isDecimalSeparatorActive) {
    console.log('Ignored input', {
      isAmountEmpty,
      isDecimalSeparatorActive,
      isDecimalSeparator,
      prev,
      digit,
    });

    return prev;
  }

  const amountWithLeadingZerosRemoved = `${prev}${digit}`.replace(/^0+/, ''); // Remove leading zeros
  const amountWithoutLetters = amountWithLeadingZerosRemoved.replace(/[^0-9]./g, ''); // Remove non-numeric characters

  let parsedAmount = parseInt(amountWithoutLetters);

  if (isNaN(parseInt(amountWithoutLetters))) {
    return '';
  }

  if (parsedAmount > MAXIMUM_AMOUNT) {
    console.log('Exceeded maximum amount', {
      parsedAmount,
      MAXIMUM_AMOUNT,
      amountWithLeadingZerosRemoved,
      prev,
      digit,
    });

    parsedAmount = MAXIMUM_AMOUNT;
  }

  return parsedAmount.toString();
};
