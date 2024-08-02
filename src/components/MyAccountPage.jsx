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
import { useEffect, useState } from "react";
import { CheckoutPage } from "./account-page/CheckoutPage";

export default function MyAccountPage() {
  const [total, setTotal] = useState("0");
  const [amountInput, setAmountInput] = useState("10,000");
  const [pointInput, setPointInput] = useState("0");
  const [showModal, setShowModal] = useState(false);
  const totalPoint = 8000;

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    const numericAmount = parseInt(amountInput.replace(/,/g, ""), 10);
    const numericPoint = pointInput === "" ? 0 : parseInt(pointInput.replace(/,/g, ""), 10);
    const calculatedTotal = numericAmount - numericPoint;
    setTotal(formatNumber(calculatedTotal));
  }, [amountInput, pointInput]);

  return (
    <DashboardContainer>
      <Nav />
      <DashboardContent>
        <MyAccountTitle>My Account</MyAccountTitle>
        <ProfileArea />
        <TopUpSection>
          <AmountArea amountInput={amountInput} setAmountInput={setAmountInput} />
          <PointArea pointInput={pointInput} setPointInput={setPointInput} totalPoint={totalPoint} />
          <TotalArea total={total} setShowModal={setShowModal} />
          {showModal && (
            <ModalOverlay>
              <Modal style={{ backgroundColor: "white" }}>
                <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
                <img src={logo} alt="TIRD" width="100px" height="100px" />
                <CheckoutPage total={total} />
              </Modal>
            </ModalOverlay>
          )}
        </TopUpSection>
      </DashboardContent>
    </DashboardContainer>
  );
}
