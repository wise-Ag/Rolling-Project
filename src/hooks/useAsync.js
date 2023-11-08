import { useCallback, useState } from "react";

/**
 * 비동기 함수를 처리하는 커스텀 훅.
 * @param {Function} asyncFunction - 비동기 함수.
 * @returns {Object} - 상태 및 래핑된 비동기 함수를 반환하는 객체.
 * @property {boolean} status - 비동기 함수 실행 상태를 나타내는 상태 값. true는 실행 중, false는 비실행 상태.
 * @property {Function} wrappedFunction - 비동기 함수를 감싼 함수. 비동기 함수를 실행할 때 이 함수를 호출하면 실행 상태를 관리합니다.
 */
const useAsync = (asyncFunction) => {
  const [status, setStatus] = useState(false);

  const wrappedFunction = useCallback(
    async (...args) => {
      try {
        setStatus(true);
        return await asyncFunction(...args);
      } finally {
        setStatus(false);
      }
    },
    [asyncFunction],
  );

  return { status, wrappedFunction };
};

export default useAsync;
