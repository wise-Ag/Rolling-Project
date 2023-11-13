import { useState } from "react";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Input from "../components/TextField/Input";
import styles from "./CreateTo.module.css";
import Background from "../components/Option/Background";

const CreateTo = () => {
  const [to, setTo] = useState("");
  const [colorButton, setColorButton] = useState(true);
  const [imgButton, setimgButton] = useState(false);

  const [imgOpt, setImgOpt] = useState();
  const [colorOpt, setColorOpt] = useState("beige");

  const handleChange = (e) => {
    setTo(e.target.value);
  };

  const handleClick = () => {
    setColorButton((color) => !color);
    setimgButton((img) => !img);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const colors = ["beige", "blue", "purple", "green"];
  const images = [
    "https://ifh.cc/g/LMjp5Q.jpg",
    "https://ifh.cc/g/9LLavj.jpg",
    "https://ifh.cc/g/7QKVfm.jpg",
    "https://ifh.cc/g/Zw6WCW.jpg",
  ];

  return (
    <>
      <Header></Header>
      <div className={styles.root}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <label>
              <h2 className={styles.title}>To.</h2>
            </label>
            <Input
              placeholder="받는 사람 이름을 입력해 주세요"
              onChange={handleChange}
              value={to}
            ></Input>
          </div>
          <h2 className={styles.title}>배경화면을 선택해 주세요.</h2>
          <p className={styles.subTitle}>
            컬러를 선택하거나, 이미지를 선택할 수 있습니다.
          </p>

          <div className={styles.toggleButtonContainer}>
            <button
              className={styles.toggleButton}
              disabled={colorButton}
              onClick={handleClick}
            >
              색상
            </button>
            <button
              className={styles.toggleButton}
              disabled={imgButton}
              onClick={handleClick}
            >
              이미지
            </button>
          </div>

          {colorButton ? (
            <Background
              option={colors}
              selectedBackground={colorOpt}
              set={setColorOpt}
            />
          ) : (
            <Background
              option={images}
              selectedBackground={imgOpt}
              set={setImgOpt}
            />
          )}

          <Button
            className={styles.button}
            shape="block"
            color="primary"
            size="56"
          >
            생성하기
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateTo;
