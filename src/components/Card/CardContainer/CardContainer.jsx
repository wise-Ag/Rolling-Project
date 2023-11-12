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
    if (data) {
      setItems(data.results || []);
    }
  }, [data]);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

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
    setFetching(false);
  };

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
        <CardButtonImage id={id} />
      </Card>
      {items?.map((item) => {
        return <CardBody key={item.id} item={item} />;
      })}
    </>
  );
};

export default CardContainer;
