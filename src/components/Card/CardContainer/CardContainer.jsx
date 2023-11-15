import Card from "../Card";
import CardButtonImage from "../CardImage/CardButtonImage";
import { useParams, useLocation } from "react-router-dom";
import { useAsync } from "../../../hooks/useAsync";
import getRecipientMessages from "../../../apis/getRecipientMessages";
import { useEffect, useRef, useState } from "react";
import CardBody from "../CardBody/CardBody";

const CardContainer = () => {
  const LIMIT = 8;
  const { id } = useParams();
  const [offset, setOffset] = useState(8);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [Isvisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isEditPage = location.pathname.endsWith("edit");

  const { data } = useAsync(getRecipientMessages, {
    recipientId: id,
    limit: LIMIT,
  });

  useEffect(() => {
    if (data) {
      setItems(data.results || []);
    }
  }, [data]);

  const myRef = useRef(null);

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
      {!isEditPage && (
        <Card>
          <CardButtonImage id={id} />
        </Card>
      )}
      {items?.map((item, index) => {
        return (
          <CardBody
            key={item.id}
            item={item}
            myRef={myRef}
            index={index}
            items={items}
            setItems={setItems}
          />
        );
      })}
    </>
  );
};

export default CardContainer;
