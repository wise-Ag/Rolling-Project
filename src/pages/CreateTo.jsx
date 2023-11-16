import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Input from "../components/TextField/Input";
import styles from "./CreateTo.module.css";
import Background from "../components/Option/Background";
import useAuth from "../hooks/useAuth";
import { useAsync } from "../hooks/useAsync";
import getBackgroundImages from "../apis/getBackgroundImages";
import useInput from "../hooks/useInput";
import ToggleButton from "../components/Button/ToggleButton";

function CreateTo() {
  // 이름 input value 추적
  const inputTo = useInput({
    errorText: "이름은 비워둘 수 없습니다",
  });

  // 색상과 이미지 배경값을 받아오는 용도
  const [imgOpt, setImgOpt] = useState();
  const [colorOpt, setColorOpt] = useState("beige");

  const [isLoading, setIsloading] = useState(false);

  const [toggle, setToggle] = useState(true);

  const auth = useAuth();

  useEffect(() => {
    auth.redirectTo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataset = {
      name: inputTo.value,
      backgroundColor: colorOpt,
      backgroundImageURL: imgOpt,
    };

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
              onBlur={inputTo.handleBlur}
              onFocus={inputTo.handleFocus}
              onChange={inputTo.handleChange}
              errorMessage={inputTo.errorMessage}
              value={inputTo.value}
            ></Input>
          </div>
          <div>
            <h2 className={styles.title}>배경화면을 선택해 주세요.</h2>
            <p className={styles.subTitle}>
              컬러를 선택하거나, 이미지를 선택할 수 있습니다.
            </p>

            <ToggleButton toggle={toggle} setToggle={setToggle} />

            {toggle ? (
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
            disabled={isLoading && inputTo.value}
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
