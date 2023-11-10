// import { useGetMessage } from "../../../data-access/useGetMessage";
import CardBody from "../CardBody/CardBody";
import Card from "../Card";
import CardButtonImage from "../CardImage/CardButtonImage";
import { useParams } from "react-router-dom";
import { useAsync } from "../../../hooks/useAsync";
import getRecipientMessages from "../../../apis/getRecipientMessages";

const CardContainer = () => {
  const { id } = useParams();

  const { data } = useAsync(getRecipientMessages, { recipientId: id });
  const results = data?.results || [];

  return (
    <>
      <Card>
        {/* plus Button */}
        <CardButtonImage id={id} />
      </Card>
      {results?.map((item) => {
        return <CardBody key={item.id} item={item} />;
      })}
    </>
  );
};

export default CardContainer;
