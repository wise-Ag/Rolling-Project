import { useState } from "react";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Input from "../components/TextField/Input";
import styles from "./CreateTo.module.css";
import Background from "../components/Option/Background";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import getBackgroundImages from "../apis/getBackgroundImages";

function CreateTo() {
  // 이름 input value 추적
  const [to, setTo] = useState("");

  //  버튼 토글에 따라서 구성할 조건식
  const [colorButton, setColorButton] = useState(true);
  const [imgButton, setimgButton] = useState(false);

  // 색상과 이미지 배경값을 받아오는 용도
  const [imgOpt, setImgOpt] = useState();
  const [colorOpt, setColorOpt] = useState("beige");

  const [isLoading, setIsloading] = useState(false);

  const auth = useAuth();

  if (auth.isAuth()) {
    return <Navigate to={`/post/${auth.id}`} />;
  }

  const handleChange = (e) => {
    setTo(e.target.value);
  };

  const handleToggleButtonClick = () => {
    setColorButton((color) => !color);
    setimgButton((img) => !img);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataset = {
      name: to,
      backgroundColor: colorOpt,
      backgroundImageURL: imgOpt,
    };

    if (dataset.name === "") {
      return;
    }

    try {
      setIsloading(true);
      await auth.tryLogin(dataset);
    } finally {
      setIsloading(false);
    }
  };

  const colors = ["beige", "blue", "purple", "green"];
  const { data } = useAsync(getBackgroundImages);

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
          <div>
            <h2 className={styles.title}>배경화면을 선택해 주세요.</h2>
            <p className={styles.subTitle}>
              컬러를 선택하거나, 이미지를 선택할 수 있습니다.
            </p>

            <div className={styles.toggleButtonContainer}>
              <button
                className={styles.toggleButton}
                disabled={colorButton}
                onClick={handleToggleButtonClick}
              >
                색상
              </button>
              <button
                className={styles.toggleButton}
                disabled={imgButton}
                onClick={handleToggleButtonClick}
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
                option={data.imageUrls}
                selectedBackground={imgOpt}
                set={setImgOpt}
              />
            )}
          </div>
          <Button
            disabled={isLoading}
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
}

export default CreateTo;
