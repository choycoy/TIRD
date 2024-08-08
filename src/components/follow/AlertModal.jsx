import React from "react";
import { ModalOverlay, SendBtn, AlertModalContainer } from "../../style/StyledComponents";

const AlertModal = ({ message, onClose }) => (
  <ModalOverlay>
    <AlertModalContainer>
      <p>{message}</p>
      <SendBtn onClick={onClose} style={{ height: "24px" }}>
        OK
      </SendBtn>
    </AlertModalContainer>
  </ModalOverlay>
);

export default AlertModal;
