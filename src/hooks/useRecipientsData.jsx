import { useEffect, useState } from "react";
import getRecipientsList from "../apis/getRecipientsList";

const MIN_MESSAGE_COUNT = 1;

const sortDataByMessageCount = (data) => {
  return [...data]
    .filter((value) => value?.messageCount >= MIN_MESSAGE_COUNT)
    .sort((a, b) => b?.messageCount - a?.messageCount);
};

const sortDataByDate = (data) => {
  return [...data].sort(
    (a, b) => (new Date(b?.createdAt) || 0) - (new Date(a?.createdAt) || 0),
  );
};

/**
 * 수신자 데이터를 관리하는 Hook
 *
 * @returns {Object} - 수신자 데이터 및 로딩 상태
 * @property {Object[]} data.popular - 인기순으로 정렬된 수신자 데이터 배열
 * @property {Object[]} data.recent - 최근에 생성된 순으로 정렬된 수신자 데이터 배열
 * @property {boolean} loading - 데이터 로딩 상태
 */
const useRecipientsData = () => {
  const [data, setData] = useState({ popular: [], recent: [] });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await getRecipientsList({ limit: "100" });
      const responseData = response?.result?.results || [];

      const sortedPopularData = sortDataByMessageCount(responseData);
      const sortedRecentData = sortDataByDate(responseData);

      setData({ popular: sortedPopularData, recent: sortedRecentData });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message || error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
};

export default useRecipientsData;
