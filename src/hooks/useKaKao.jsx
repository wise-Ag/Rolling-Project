import { useEffect } from "react";

export default function useKaKao() {
  const { Kakao } = window;

  // console.log(Kakao); // {VERSION: '2.4.0', cleanup: ƒ, init: ƒ, isInitialized: ƒ}
  useEffect(() => {
    const jsKey = "4044b3d4c1b332a8f736a3eabf26eefe";
    Kakao.cleanup();
    Kakao.init(jsKey);
    // console.log(Kakao.isInitialized());
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

  // return으로 함수를 내보내려면?

  return shareKakao;
}
