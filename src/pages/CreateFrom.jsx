import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Input from "../components/TextField/Input";
import styles from "./CreateFrom.module.css";
import MarkDown from "../components/TextField/MarkDown";
import Dropdown from "../components/TextField/Dropdown";
import Button from "../components/Button/Button";
import postRecipientMessage from "../apis/postRecipientMessage";
import { useNavigate, useParams } from "react-router-dom";
import ProfileImageFileInput from "../components/ProfileImageFileInput/ProfileImageFileInput";
import { useAsync } from "../hooks/useAsync";
import getProfileImages from "../apis/getProfileImages";

const CreateFrom = () => {
  const {
    data: { imageUrls },
  } = useAsync(getProfileImages);

  const [from, setFrom] = useState("");

  const [markDownInput, setMarkDownInput] = useState("");

  const [getRelation, setRelation] = useState("지인");
  const [getFont, setFont] = useState("Noto Sans");

  const [imgValue, setImgValue] = useState();

  useEffect(() => {
    if (imageUrls) {
      setImgValue(imageUrls[0]);
    }
  }, [imageUrls]);

  const [isLoading, setIsloading] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  const relation = ["가족", "친구", "동료", "지인"];
  const font = ["Noto Sans", "Pretendard", "Nanum Gothic"];

  const handleChange = (e) => {
    setFrom(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataset = {
      recipientId: id,
      sender: from,
      profileImageURL: imgValue,
      relationship: getRelation,
      content: markDownInput,
      font: getFont,
    };

    if (dataset.name === "") {
      return;
    }

    try {
      setIsloading(true);
      const { response } = await postRecipientMessage(dataset);
      if (response.ok) {
        navigate(`/post/${id}`);
      }
    } finally {
      setIsloading(false);
    }
  };

  return (
    <>
      <Header></Header>

      <div className={styles.root}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <label>
              <h2 className={styles.title}>From.</h2>
            </label>
            <Input
              placeholder="이름을 입력해 주세요."
              onChange={handleChange}
              value={from}
            ></Input>
          </div>
          <div>
            <h2 className={styles.title}>프로필 이미지</h2>
            <ProfileImageFileInput
              imageUrls={imageUrls}
              value={imgValue}
              setValue={setImgValue}
            />
          </div>
          <div>
            <h2 className={styles.title}>상대와의 관계</h2>
            <Dropdown
              option={relation}
              selected={getRelation}
              setSelected={setRelation}
            />
          </div>
          <div>
            <h2 className={styles.title}>내용을 입력해 주세요</h2>
            <MarkDown setter={setMarkDownInput} />
          </div>
          <div>
            <h2 className={styles.title}>폰트 선택</h2>
            <Dropdown option={font} selected={getFont} setSelected={setFont} />
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
};

export default CreateFrom;
