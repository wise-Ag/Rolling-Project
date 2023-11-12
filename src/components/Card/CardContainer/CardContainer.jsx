import CardBody from "../CardBody/CardBody";
import Card from "../Card";
import CardButtonImage from "../CardImage/CardButtonImage";
import { useParams } from "react-router-dom";
import { useAsync } from "../../../hooks/useAsync";
import getRecipientMessages from "../../../apis/getRecipientMessages";
import { useEffect, useState } from "react";

const CardContainer = () => {
  const LIMIT = 8;
  const { id } = useParams();
  const [offset, setOffset] = useState(8);
  const [items, setItems] = useState([]);
  const [fetching, setFetching] = useState(false);
  const { data } = useAsync(getRecipientMessages, {
    recipientId: id,
    limit: LIMIT,
  });

  useEffect(() => {
    // 이 데이터는 items state값을 말하는건가?
    if (data) {
      setItems(data.results || []);
    }
  }, [data]);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    // fecthing이 false이면은  즉 더 많은 데이터를 안 가지고 오는 상태
    if (fetching === false && scrollTop + clientHeight >= scrollHeight) {
      setFetching(true);
    }
  };

  const fetchMoreData = async () => {
    const data = await getRecipientMessages({
      recipientId: id,
      limit: LIMIT,
      offset: offset,
    });

    const {
      result: { count, results },
    } = data;

    if (offset > count) return;

    setItems((prev) => [...prev, ...results]);
    setOffset((prev) => prev + 8);
    // 데이터를 다 가져왔음 다시 false로
    setFetching(false);
  };

  // 더 불러오기가 실행이 됬을때 실행되는 유즈이펙트
  useEffect(() => {
    if (fetching && items.length > 0) {
      fetchMoreData();
    }
  }, [fetching, items]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Card>
        {/* plus Button */}
        <CardButtonImage id={id} />
      </Card>
      {items?.map((item) => {
        return <CardBody key={item.id} item={item} />;
      })}
    </>
  );
};

export default CardContainer;
