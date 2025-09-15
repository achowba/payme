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
