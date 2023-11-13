import React, { useEffect } from "react";

const useScroll = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 1,
      },
    );
    if (myRef.current) {
      observer.observe(myRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [items]);
  useEffect(() => {
    if (count !== 0) {
      if (offset >= count) {
        return;
      }
    }

    fetchMoreData();
  }, [Isvisible]);
  return <div></div>;
};

export default useScroll;
