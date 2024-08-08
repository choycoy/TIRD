import styled, { keyframes, css } from "styled-components";
import {
  ModalOverlay,
  Modal,
  CloseButton,
  ChargeSection,
  BalanceText2,
  ChargeBtn,
  ChargeInput,
  SendBtn,
  RequirementText,
} from "../../style/StyledComponents";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import AlertModal from "./AlertModal";
import PINModal from "./PINModal";

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

export const ShakingInput = styled(ChargeInput)`
  ${(props) =>
    props.shake &&
    css`
      animation: ${shake} 0.3s;
    `}
`;

export default function FollowModal({ onClose }) {
  const [deposit, setDeposit] = useState("");
  const [shake, setShake] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showPINInput, setShowPINInput] = useState(false);
  const [showCompletionMessage, setShowCompletionMessage] = useState(false);
  const inputRef = useRef(null);

  const requirement = 50000;
  const balance = 50000;

  const formatNumber = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const handleAmountOnChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    if (/^\d*$/.test(value)) {
      setDeposit(formatNumber(value));
    }
  };

  const handleSendClick = () => {
    const numericDeposit = parseInt(deposit.replace(/,/g, ""), 10);
    if (!deposit) {
      setShake(true);
      inputRef.current.focus();
      setTimeout(() => setShake(false), 300);
    } else if (numericDeposit > balance) {
      setAlertMessage("Your balance is insufficient.");
    } else if (numericDeposit < requirement) {
      setAlertMessage("You do not meet the requirement.");
    } else {
      setShowPINInput(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSendClick();
  };

  const handleAlertClose = () => setAlertMessage("");
  const handlePINSubmit = () => {
    setShowPINInput(false);
    setShowCompletionMessage(true);
  };
  const handleCompletionClose = () => {
    setShowCompletionMessage(false);
    onClose(false);
  };

  return (
    <>
      <ModalOverlay>
        <Modal style={{ width: "360px", height: "190px" }}>
          <ChargeSection>
            <p style={{ fontSize: "26px", margin: "0", fontWeight: "bold", textAlign: "left" }}>
              To follow this trader
            </p>
            <BalanceText2>
              Your balance: ₩ {formatNumber(balance)}
              <Link to="/myaccount">
                <ChargeBtn>charge</ChargeBtn>
              </Link>
            </BalanceText2>
            <RequirementText> Requirement: ₩ {formatNumber(requirement)}</RequirementText>
            <div style={{ display: "flex", alignItems: "center", marginTop: "16px" }}>
              <ShakingInput
                ref={inputRef}
                shake={shake}
                value={deposit}
                onKeyDown={handleKeyDown}
                onChange={handleAmountOnChange}
                placeholder="Enter the deposit amount"
              />
              <SendBtn onClick={handleSendClick}>send</SendBtn>
            </div>
            <CloseButton onClick={() => onClose(false)}>&times;</CloseButton>
          </ChargeSection>
        </Modal>
      </ModalOverlay>
      {alertMessage && <AlertModal message={alertMessage} onClose={handleAlertClose} />}
      {showCompletionMessage && <AlertModal message="Transfer Complete" onClose={handleCompletionClose} />}
      {showPINInput && <PINModal onSubmit={handlePINSubmit} onClose={() => setShowPINInput(false)} />}
    </>
  );
}
