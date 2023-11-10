import CardModal from "./CardModal";
import Modal from "./Modal";
import Toast from "../Toast/Toast";
import { useModal } from "../../hooks/useModal";
import { useToast } from "../../hooks/useToast";
import { createContext } from "react";
import Button from "../Button/Button";

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
          <Button onClick={closeModalFunc} width='12' size="40" color="primary">확인</Button>
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
