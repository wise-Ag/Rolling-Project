import { useEffect } from "react";
import CardBody from "../CardBody/CardBody";

const InifiniteScroll = ({ items, status, setStatus, fetchfunc }) => {
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (status === false && scrollTop + clientHeight >= scrollHeight) {
      setStatus(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (status && items.length > 0) {
      fetchfunc();
    }
  }, [status, items]);

  return (
    <>
      {items?.map((item) => {
        return <CardBody key={item.id} item={item} />;
      })}
    </>
  );
};

export default InifiniteScroll;
