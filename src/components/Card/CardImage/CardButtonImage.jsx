import style from "./CardButtonImage.module.css";
import plusbutton from "../../../assets/images/icons/plusbutton.svg";
import { Link } from "react-router-dom";

const CardButtonImage = ({ id }) => {
  return (
    <div className={style.container}>
      <Link to={`/post/${id}/message`}>
        <img src={plusbutton} alt="plus-button" />
      </Link>
    </div>
  );
};

export default CardButtonImage;
