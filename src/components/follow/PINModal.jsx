import React, { useState } from "react";
import styled from "styled-components";
import {
  ModalOverlay,
  SendBtn,
  PINModalContainer,
  PINInput,
  NumberButton,
  ButtonGrid,
  CloseButton,
} from "../../style/StyledComponents";
const BackspaceButton = styled(NumberButton)`
  background-color: black;
  color: white;
  padding: 0;
  border-radius: 4px;
  margin-top: 8px;
`;
const PINModal = ({ onSubmit, onClose }) => {
  const [pin, setPin] = useState(Array(6).fill(""));

  const handlePINChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      if (value && index < 5) {
        const nextInput = document.getElementById(`pin-input-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleButtonClick = (value) => {
    const firstEmptyIndex = pin.findIndex((digit) => digit === "");
    if (firstEmptyIndex !== -1) {
      handlePINChange(firstEmptyIndex, value);
    }
  };

  const handleBackspace = () => {
    const lastFilledIndex = pin.findIndex((digit) => digit === "");
    const indexToClear = lastFilledIndex === -1 ? pin.length - 1 : lastFilledIndex - 1;
    if (indexToClear >= 0) {
      handlePINChange(indexToClear, "");
      document.getElementById(`pin-input-${indexToClear}`).focus();
    }
  };

  const handleSubmit = () => {
    if (pin.join("").length === 6) {
      onSubmit(pin.join(""));
    }
  };

  return (
    <ModalOverlay>
      <PINModalContainer>
        <p style={{ marginTop: "24px" }}>Please enter your 6-digit PIN</p>
        <div>
          {pin.map((digit, index) => (
            <PINInput key={index} id={`pin-input-${index}`} type="text" value={digit} readOnly />
          ))}
        </div>
        <ButtonGrid>
          {Array.from({ length: 10 }, (_, i) => (
            <NumberButton key={i} onClick={() => handleButtonClick(i.toString())}>
              {i}
            </NumberButton>
          ))}
          <BackspaceButton onClick={handleBackspace}>⌫</BackspaceButton>
        </ButtonGrid>
        <SendBtn onClick={handleSubmit} style={{ marginTop: "8px" }}>
          Confirm
        </SendBtn>
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </PINModalContainer>
    </ModalOverlay>
  );
};

export default PINModal;
