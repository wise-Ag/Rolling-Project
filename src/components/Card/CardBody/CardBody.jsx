import Card from "../Card";
import CardProfileImage from "../CardImage/CardProfileImage";
import CardProfile from "../CardProfile/CardProfile";
import CardContent from "../CardContent/CardContent";
import CardDate from "../CardDate/CardDate";
import style from "./CardBody.module.css";
import bin from "../../../assets/images/icons/bin.svg";
import { useLocation } from "react-router-dom";

const CardBody = ({ item }) => {
  const location = useLocation();
  const isEditPage = location.pathname.endsWith("edit");
  const { profileImageURL, sender, relationship, content, createdAt } = item;
  return (
    <Card>
      <div className={style.header}>
        <CardProfileImage profileImageURL={profileImageURL} />
        <CardProfile sender={sender} relationship={relationship} />
        {isEditPage && <img className={style.bin} src={bin} alt="bin" />}
      </div>
      <div className={style.divider}></div>
      <CardContent content={content} />
      <CardDate createdAt={createdAt} />
    </Card>
  );
};

export default CardBody;
