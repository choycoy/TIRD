import React, { useEffect, useState } from "react";
import {
  DashboardContainer,
  DashboardContent,
  MyAccountTitle,
  TopUpSection,
  ModalOverlay,
  Modal,
  CloseButton,
} from "../style/StyledComponents";
import logo from "../img/logo-black.png";
import Nav from "./Nav";
import AmountArea from "./account-page/AmountArea";
import ProfileArea from "./account-page/ProfileArea";
import PointArea from "./account-page/PointArea";
import TotalArea from "./account-page/TotalArea";
import { CheckoutPage } from "./account-page/CheckoutPage";
import { useUser } from "./UserContext";

export default function MyAccountPage() {
  const [total, setTotal] = useState("0");
  const [amountInput, setAmountInput] = useState("10,000");
  const [pointInput, setPointInput] = useState("0");
  const { user } = useUser();
  const [showModal, setShowModal] = useState(false);
  const minAmount = "10000";

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const calculateTotal = (amount, point) => {
    const numericAmount = parseInt(amount.replace(/,/g, ""), 10);
    const totalPoint = user?.point || 0;
    if (point > totalPoint) {
      return formatNumber(Math.max(numericAmount - totalPoint, 0));
    } else {
      return formatNumber(Math.max(numericAmount - point, 0));
    }
  };

  const handleApplyClick = () => {
    setTotal(calculateTotal(amountInput, pointInput));
  };

  useEffect(() => {
    if (!amountInput) {
      setTotal(0);
    } else {
      setTotal(calculateTotal(amountInput, pointInput));
    }
  }, [amountInput, pointInput]);

  return (
    <DashboardContainer>
      <Nav />
      <DashboardContent>
        <MyAccountTitle>My Account</MyAccountTitle>
        <ProfileArea />
        <TopUpSection>
          <AmountArea amountInput={amountInput} setAmountInput={setAmountInput} minAmount={minAmount} />
          <PointArea
            pointInput={pointInput}
            setPointInput={setPointInput}
            onApplyClick={handleApplyClick}
            totalPoint={user?.point || 0}
          />
          <TotalArea total={total} setShowModal={setShowModal} minAmount={minAmount} />
          {showModal && (
            <ModalOverlay>
              <Modal style={{ backgroundColor: "white" }}>
                <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
                <img src={logo} alt="TIRD" width="100px" height="100px" />
                <CheckoutPage
                  amountInput={parseInt(amountInput.replace(/,/g, ""), 10)}
                  userUid={user?.uid}
                  appliedPoint={pointInput}
                />
              </Modal>
            </ModalOverlay>
          )}
        </TopUpSection>
      </DashboardContent>
    </DashboardContainer>
  );
}
