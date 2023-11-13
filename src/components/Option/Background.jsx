import { useState } from "react";
import styles from "./Background.module.css";
import checkIcon from "../../assets/images/icons/checkIcon.svg";

const colors = ["beige", "blue", "purple", "green"];
const images = [
  "https://ifh.cc/g/LMjp5Q.jpg",
  "https://ifh.cc/g/9LLavj.jpg",
  "https://ifh.cc/g/7QKVfm.jpg",
  "https://ifh.cc/g/Zw6WCW.jpg",
];

const Background = ({ option }) => {
  // const [option, setOption] = useState(color);
  // 이 useState를 컬러/이미지 버튼쪽에서 사용해주면 될 것 같습니다.
  // 컬러/이미지 버튼을 누를 때 setOption를 통해 colors나 images로 바꿔준다
  const [selectedBackground, setSelectedBackground] = useState(option[0]);

  const handleClickBackground = (background) => {
    setSelectedBackground(background);
  };

  return (
    <div className={styles.container}>
      {option.map((background) => (
        <div
          key={background}
          onClick={() => handleClickBackground(background)}
          className={`${styles.backgroundBox} ${styles[background]}`}
          style={{ backgroundImage: `url(${background})` }}
        >
          {selectedBackground === background && (
            <img src={checkIcon} alt={checkIcon} className={styles.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Background;
