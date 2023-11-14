import Card from "../Card";
import CardButtonImage from "../CardImage/CardButtonImage";
import { useParams } from "react-router-dom";
import { useAsync } from "../../../hooks/useAsync";
import getRecipientMessages from "../../../apis/getRecipientMessages";
import { useEffect, useState } from "react";
import CardBody from "../CardBody/CardBody";
import useScroll from "../../../hooks/useScroll";

const CardContainer = () => {
  const LIMIT = 8;
  const { id } = useParams();
  const [offset, setOffset] = useState(8);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [Isvisible, setIsVisible] = useState(false);

  const { data } = useAsync(getRecipientMessages, {
    recipientId: id,
    limit: LIMIT,
  });

  useEffect(() => {
    if (data) {
      setItems(data.results || []);
    }
  }, [data]);

  const myRef = useScroll({ items, setIsVisible });

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
    setIsVisible(false);
    setCount(count);
  };

  useEffect(() => {
    if (count !== 0) {
      if (offset >= count) {
        return;
      }
    }
    if (Isvisible) {
      fetchMoreData();
    }
  }, [Isvisible]);

  return (
    <>
      <Card>
        <CardButtonImage id={id} />
      </Card>
      {items?.map((item, index) => {
        return (
          <CardBody
            key={item.id}
            item={item}
            items={items}
            index={index}
            myRef={myRef}
          />
        );
      })}
    </>
  );
};

export default CardContainer;
