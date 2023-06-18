// prev state 를 활용한 리팩토링

import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { type Address } from "react-daum-postcode";

export default function ModalAlertPage() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = (): void => {
    // setIsOpen(true);
    // 기존 prev 즉 isOpen이 false였으므로 그 반댓값 적용
    setIsOpen((prev) => !prev);
  };
  // const handleOk = (): void => {
  //   // setIsOpen(false);
  //   setIsOpen((prev) => !prev);
  // };
  // const handleCancel = (): void => {
  //   // setIsOpen(false);
  //   setIsOpen((prev) => !prev);
  // };
  const handleComplete = (data: Address): void => {
    console.log(data);
    // setIsOpen(false);
    onToggleModal();
  };
  // 모든 명령어 동일. 따라서 그 이외의 함수 제거

  return (
    <>
      <button onClick={onToggleModal}>모달창 열기</button>
      {isOpen && (
        <Modal
          title="모달 제목"
          open={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
