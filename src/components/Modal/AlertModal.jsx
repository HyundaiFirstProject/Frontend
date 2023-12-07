import React, { useEffect, useRef } from "react";
import "assets/CSS/Modal/AlertModal.css";
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
        <div>
          {alertString.split(".").map((sentence, index) => (
            <p key={index}>{sentence}</p>
          ))}
        </div>
        <button onClick={closeModal}>확인</button>
      </div>
    </div>
  );
};

export default AlertModal;
