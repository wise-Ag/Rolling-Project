import { useEffect } from "react";

export const useKaKao = () => {
  const { Kakao } = window;

  useEffect(() => {
    const jsKey = "4044b3d4c1b332a8f736a3eabf26eefe";
    Kakao.cleanup();
    Kakao.init(jsKey);
  }, []);

  const shareKakao = () => {
    const id = 1;

    Kakao.Link.sendCustom({
      templateId: 100601,
      templateArgs: {
        id: id,
      },
    });
  };

  return shareKakao;
};
