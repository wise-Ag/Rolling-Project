import { useEffect } from "react";

export default function useKaKao() {
  const { Kakao } = window;

  useEffect(() => {
    const jsKey = "4044b3d4c1b332a8f736a3eabf26eefe";
    Kakao.cleanup();
    Kakao.init(jsKey);
  }, []);
  //

  const shareKakao = () => {
    // const currentURL = window.location.pathname;
    // const regex = /(?<=post\/)(\w+)/;
    // const match = currentURL.match(regex);
    // console.log(match[1]);
    // /post/1/edit
    // post/1

    const id = 1;
    Kakao.Share.sendCustom({
      templateId: 100578,
      templateArgs: {
        id: id,
      },
    });
  };

  return shareKakao;
}
