import { useEffect, useMemo, useRef, useState } from "react";

const useScroll = () => {
  const [Isvisible, setIsVisible] = useState();
  const myRef = useRef();
  // const createObserver = new IntersectionObserver((entries) => {
  //   const entry = entries[0];
  //   setIsVisible(entry.isIntersecting);
  // });
  const observer = useMemo(() => {
    return new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });
  }, []);
  // const observer = useMemo(() => createObserver, [Isvisible]);
  useEffect(() => {
    if (myRef.current) {
      observer.observe(myRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [Isvisible, myRef.current]);

  return {
    Isvisible,
    myRef,
  };
};

export default useScroll;
