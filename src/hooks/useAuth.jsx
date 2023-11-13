import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postRecipientCreate from "../apis/postRecipientCreate";

const useAuth = () => {
  // 일단 선언하면서 ID가 있는지 없는지 확인
  const [id, setId] = useState(localStorage.getItem("ID"));
  const navigate = useNavigate();

  // 지금 로그인이 되어있는지 확인해야할 때
  // id 값이
  const isAuth = () => {
    if (id !== undefined) return true;
  };

  const tryLogin = async (dataset) => {
    const { response, result } = await postRecipientCreate(dataset);
    if (response.ok) {
      localStorage.setItem("ID", result.id);
      navigate(`/post/${result.id}`);
    }
  };

  return { id, setId, isAuth, tryLogin };
};

export default useAuth;
