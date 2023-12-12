import React, { useEffect, useRef } from "react";
import "assets/CSS/Modal/AlertModal.css";
import { ThreeDots } from "react-loader-spinner";
const AlertModal = ({ alertString, onClose }) => {
  const modalRef = useRef(null);

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.classList.add("modalFadeOut");
      setTimeout(() => {
        onClose();
      }, 500); // 페이드아웃 애니메이션(0.5초) 후 onClose() 호출
    }
  };

  useEffect(() => {
    modalRef.current.classList.add("modalFadeIn");
  }, []);

  return (
    <div className="modalOverlay">
      <div className="alertModal" ref={modalRef}>
        <div className="alertModal_1">
          {alertString === "loading" && (
            <div className="alertModal_lo">
              잠시만 기다려 주세요
              <ThreeDots
                height="40"
                width="90"
                radius="9"
                color="#1e9d82"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            </div>
          )}

          {alertString !== "loading" &&
            alertString
              .split(".")
              .map((sentence, index) => <p key={index}>{sentence}</p>)}
        </div>
        {alertString !== "loading" && (
          <button onClick={closeModal}>확인</button>
        )}
      </div>
    </div>
  );
};

export default AlertModal;
