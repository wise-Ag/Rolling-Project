import Card from "../Card";
import CardButtonImage from "../CardImage/CardButtonImage";
import { useParams } from "react-router-dom";
import { useAsync } from "../../../hooks/useAsync";
import getRecipientMessages from "../../../apis/getRecipientMessages";
import { useEffect, useState } from "react";
import InfiniteScroll from "./InfiniteScroll";

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
    if (data) {
      setItems(data.results || []);
    }
  }, [data]);

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
    setFetching(false);
  };

  return (
    <>
      <Card>
        <CardButtonImage id={id} />
      </Card>
      <InfiniteScroll
        items={items}
        status={fetching}
        setStatus={setFetching}
        fetchfunc={fetchMoreData}
      />
    </>
  );
};

export default CardContainer;
