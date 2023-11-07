import CardModal from "./CardModal";
import Modal from "./Modal";
import Toast from "../Toast/Toast";
import CloseModalButton from "./CloseModalButton";
import { useModal } from "./useModal";
import { useToast } from "../Toast/useToast";
import { createContext } from "react";
export const ToastContext = createContext();
const ModalTest = () => {
  const { isModalVisible, openModalFunc, closeModalFunc } = useModal();
  const { isToastPop, openToast, closeToast } = useToast();
  const handleOpenModalClick = () => {
    openModalFunc();
  };
  const handleToastClick = () => {
    openToast();
  };
  return (
    <>
      <button onClick={handleOpenModalClick}>모달 열기</button>
      <button onClick={handleToastClick}>토스트 열기</button>
      {isModalVisible && (
        <Modal>
          <CardModal />
          <CloseModalButton onButtonClick={closeModalFunc} />
        </Modal>
      )}
      {isToastPop && (
        <ToastContext.Provider value={closeToast}>
          <Toast>URL이 복사 되었습니다.</Toast>
        </ToastContext.Provider>
      )}
    </>
  );
};

export default ModalTest;
