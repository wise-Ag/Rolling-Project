const getVisibleCardCount = (data) => Math.min(4, data.length);

const calculateTransform = (
  currentIndex,
  containerWidth,
  visibleCount,
  deltaX = 0,
) => {
  return `translateX(${
    -currentIndex * (containerWidth / visibleCount) + deltaX
  }px)`;
};

export { getVisibleCardCount, calculateTransform };
