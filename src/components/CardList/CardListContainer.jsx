import { useState, useEffect, useRef } from "react";

import CardList from "./CardList";
import { getVisibleCardCount, calculateTransform } from "./CardListUtils";

const CardListContainer = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);

  const containerRef = useRef();

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const touchX = e.touches[0].clientX;
    const deltaX = touchX - startX;
    const containerWidth = containerRef.current.offsetWidth;
    const visibleCount = getVisibleCardCount(data);

    const isFirstIndex = currentIndex === 0;
    const isLastIndex = currentIndex === data.length - visibleCount;

    if ((isFirstIndex && deltaX > 0) || (isLastIndex && deltaX < 0)) {
      return;
    }

    containerRef.current.style.transition = "none";
    containerRef.current.style.transform = calculateTransform(currentIndex, containerWidth, visibleCount, deltaX);
  };

  const handleTouchEnd = (e) => {
    const containerWidth = containerRef.current.offsetWidth;
    const visibleCount = getVisibleCardCount(data);
    const newTouchEndX = e.changedTouches[0].clientX;
    const threshold = containerWidth / 100;

    const isSwipeLeft = startX - newTouchEndX > threshold;
    const isSwipeRight = startX - newTouchEndX < -threshold;

    if (isSwipeLeft && currentIndex < data.length - visibleCount) {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, data.length - visibleCount));
    }
    if (isSwipeRight && currentIndex > 0) {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }

    containerRef.current.style.transition = "transform 0.5s ease-in-out";
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const visibleCount = getVisibleCardCount(data);

    containerRef.current.style.transform = calculateTransform(currentIndex, containerWidth, visibleCount);
  }, [currentIndex, data]);

  return (
    <CardList
      data={data}
      containerRef={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onNextSlide={handleNextSlide}
      onPrevSlide={handlePrevSlide}
      currentIndex={currentIndex}
    />
  );
};

export default CardListContainer;
