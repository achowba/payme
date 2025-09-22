export const getRandomElementsFromArray = (array: any[], maximumItemsToShow: number) => {
  if (!array.length || !maximumItemsToShow) {
    return array;
  }

  // Clamp maximumItemsToShow to array length to handle cases where it exceeds the array size
  const maxVisibleItems = Math.min(maximumItemsToShow, array.length);

  const maxStartingIndex = array.length - maxVisibleItems;
  const startingIndex = Math.floor(Math.random() * (maxStartingIndex + 1));

  return array.slice(startingIndex, startingIndex + maxVisibleItems);
}

export const splitCardNumber = (cardNumber: string) => {
  // Remove non-digit characters and ensure string input
  const cleanNumber = String(cardNumber).replace(/\D/g, '');

  // Validate length
  if (cleanNumber.length !== 16) {
    throw new Error('Card number must be 16 digits');
  }

  // Return array of 4 groups of 4 digits
  return [
    cleanNumber.slice(0, 4),
    cleanNumber.slice(4, 8),
    cleanNumber.slice(8, 12),
    cleanNumber.slice(12, 16)
  ];
}
