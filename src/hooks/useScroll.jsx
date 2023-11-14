// ref를 리턴 하기
// api받는동안 중복 노출 트리거 되지 않도록 예외처리
// react intersection observer

import { useEffect, useRef } from "react";

const useScroll = ({ items, setIsVisible }) => {
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });

    if (myRef.current) {
      observer.observe(myRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [items]);

  return myRef;
};

export default useScroll;
