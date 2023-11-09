import { useGetMessage } from "../../../data-access/useGetMessage";
import CardBody from "../CardBody/CardBody";
import Card from "../Card";
import CardButtonImage from "../CardImage/CardButtonImage";
import { useParams } from "react-router-dom";

const CardContainer = () => {
  const { data } = useGetMessage();
  const { id } = useParams();

  return (
    <>
      <Card>
        {/* plus Button */}
        <CardButtonImage id={id} />
      </Card>
      {data?.map((item) => {
        return <CardBody key={item.id} item={item} />;
      })}
    </>
  );
};

export default CardContainer;
