import { useEffect, useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
export const useKaKao = () => {
  const { Kakao } = window;
  const { name } = useContext(LocaleContext);

  useEffect(() => {
    const jsKey = "4044b3d4c1b332a8f736a3eabf26eefe";
    Kakao.cleanup();
    Kakao.init(jsKey);
  }, []);

  const shareKakao = () => {
    Kakao.Link.sendCustom({
      templateId: 100601,
      templateArgs: {
        message: `${name}님께 그동안 하지 못했던 속마음을 전해보세요`,
        THU: "https://cdn.pixabay.com/photo/2017/11/05/08/38/christmas-2919725_640.jpg",
      },
    });
  };

  return shareKakao;
};
