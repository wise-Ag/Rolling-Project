import style from "./CardButtonImage.module.css";
import plusbutton from "../../../assets/images/icons/plusbutton.svg";
import { Link } from "react-router-dom";

const CardButtonImage = ({ onClick, id }) => {
  return (
    <div className={style.container}>
      <Link to={`/post/${id}/message`}>
        <img src={plusbutton} alt="plus-button" onClick={onClick} />
      </Link>
    </div>
  );
};

export default CardButtonImage;
