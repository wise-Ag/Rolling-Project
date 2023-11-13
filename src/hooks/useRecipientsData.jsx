import { useEffect, useState } from "react";
import getRecipientsList from "../apis/getRecipientsList";

/**
 * Recipients 데이터를 가져와 정렬하는 커스텀 훅입니다.
 * @returns {{ popular: Array, recent: Array, loading: boolean }} - popular, recent 데이터와 로딩 상태를 포함한 객체.
 */
const useRecipientsData = () => {
  const [data, setData] = useState({ popular: [], recent: [] });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await getRecipientsList({ limit: "0" });
      const responseData = response?.result?.results || [];

      const sortedPopularData = [...responseData].sort((a, b) => b?.messageCount - a?.messageCount);
      const sortedRecentData = [...responseData].sort(
        (a, b) => (new Date(b?.createdAt) || 0) - (new Date(a?.createdAt) || 0)
      );

      setData({ popular: sortedPopularData, recent: sortedRecentData });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
};

export default useRecipientsData;
