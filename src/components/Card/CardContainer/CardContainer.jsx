import { useGetMessage } from "../../../data-access/useGetMessage";
import CardBody from "../CardBody/CardBody";
import Card from "../Card";
import CardButtonImage from "../CardImage/CardButtonImage";

const CardContainer = () => {
  const { data } = useGetMessage();

  return (
    <>
      <Card>
        <CardButtonImage />
      </Card>
      {data?.map((item) => {
        return <CardBody key={item.id} item={item} />;
      })}
    </>
  );
};

export default CardContainer;
